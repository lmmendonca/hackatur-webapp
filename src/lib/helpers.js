import dayjs from 'dayjs';

function format(value, pattern) {
  let i = 0;
  const result = value.toString();
  // eslint-disable-next-line no-unused-vars
  return pattern.replace(/#/g, _ => result[i++] || '');
}

function formatCPF(value) {
  value = (value || '').replace(/\D/g, '');
  return format(value, '###.###.###-##');
}

function formatCNPJ(value) {
  value = (value || '').replace(/\D/g, '');
  return format(value, '##.###.###/####-##');
}

function onlyDigits(value) {
  return (value || '').replace(/\D/g, '');
}

function normalizeBRDate(value) {
  const [day, month, year] = (value || '').split('/');
  return `${year}-${month}-${day}`;
}

function formatDateBR(value) {
  const [year, month, day] = (value || '').split('-');

  if (!year || !month || !day) {
    return '';
  }

  return `${day}/${month}/${year}`;
}

function formatTelefone(value) {
  value = (value || '').replace(/\D/g, '');
  const mask = (value.length === 10) ? '(##) ####-####' : '(##) #####-####';
  return format(value, mask);
}

function formatCelular(value) {
  value = (value || '').replace(/\D/g, '');
  return format(value, '(##) #####-####');
}

function validateCpf(document) {
  const cpf = (document || '').replace(/\D/g, '');
  let soma;
  let resto;
  soma = 0;
  if (cpf === '00000000000') return false;

  for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function validateCnpj(document) {
  let tamanho;
  let numeros;
  let digitos;
  let soma;
  let pos;
  let resultado;

  const cnpj = (document || '').replace(/[^\d]+/g, '');

  if (cnpj === '') return false;

  if (cnpj.length !== 14) return false;

  if (
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  )
    return false;

  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado !== Number(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado !== Number(digitos.charAt(1))) return false;

  return true;
}

function validateEmail(value) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
}

function validateVendaImovel(imovel) {
  // Se entrada for a prazo precisa de parcelas e vencimento
  if (
    imovel.tipoPagamento === "prazo" && 
    imovel.tipoEntrada === "prazo" &&
    (
      !Number(imovel.qtdParcelaEntrada) ||
      (Number(imovel.qtdParcelaEntrada) < 0)||
      !validateDateAfter(imovel.dataVencimentoEntrada)
    )
  ) {
    return false;
  }
  
  // Se entrada for a vista precisa da data de pagamento
  if (
    imovel.tipoPagamento === "prazo" &&
    imovel.tipoEntrada === "vista" &&
    !validateDateAfter(imovel.dataVencimentoEntrada)
  ) {
    return false;
  }

  // Se o pagamento for a prazo precisa de parcelas, vencimento e taxa
  if (imovel.tipoPagamento === "prazo") {
    if (
      !Number(imovel.qtdParcelaFinanciamento) ||
      (Number(imovel.qtdParcelaFinanciamento) < 0) ||
      !validateDateAfter(imovel.dataVencimentoParcela) ||
      !imovel.taxa ||
      !imovel.tipoEntrada ||
      !imovel.valorEntrada ||
      (Number(imovel.valorEntrada) < 0)
    ) {
      return false;
    }

    const taxa = Number(imovel.taxa.replace(/,/g, '.'));
    if (!(taxa > 0)) {
      return false;
    }

    // Valida entrada maior que o imóvel
    if (Number(imovel.valorEntrada) > Number(imovel.valor)) {
      return false;
    }
  }

  // Valida desconto maior que o imóvel
  if (Number(imovel.valorDesconto) > Number(imovel.valor)) {
    return false;
  }

  // Se o pagamento for a vista precisa da data de pagamento 
  if (
    imovel.tipoPagamento === "vista" &&
    !validateDateAfter(imovel.dataVencimentoParcela)
  ) {
    return false;
  }

  return (
    imovel.clienteTitular &&
    imovel.tipoPagamento &&
    imovel.tipoFinanciamento    
  );
}

function validateDateAfter(value, dateToCompare = dayjs()) {
  value = (value || '');

  if (value.length !== 10) {
    return false;
  }

  return true
  
  // const date = dayjs(normalizeBRDate(value));
  // return (date.format('YYYY-MM-DD') === dateToCompare.format('YYYY-MM-DD'))
  //   ? true : date.isAfter(dateToCompare);
}

export {
  format,
  formatCPF,
  formatCNPJ,
  onlyDigits,
  validateCpf,
  validateCnpj,
  validateEmail,
  normalizeBRDate,
  formatDateBR,
  formatTelefone,
  formatCelular,
  validateVendaImovel,
  validateDateAfter,
};
