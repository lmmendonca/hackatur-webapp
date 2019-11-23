
import { formatCPF, formatCNPJ, formatTelefone, formatCelular, formatDateBR } from '../lib/helpers';

export default {
  install(Vue) {
    Vue.prototype.$toCurrency = (value, onlyNumber = false, currency = 'BRL') => {
      value = Number(value) || 0;

      return onlyNumber
        ? value.toLocaleString('pt-BR')
        : value.toLocaleString('pt-BR', { style: 'currency', currency })
    };

    Vue.prototype.$toNumber = (value) => {
      return Number(value.replace(/\./g, '').replace(/,/g, '.')) || 0;
    };

    Vue.prototype.$getCurrencyMask = () => {
      return { mask: '############', tokens: { '#': { pattern: /\d|,|\./ } } };
    };

    Vue.prototype.$toDimension = (value, dimension = 'm²') => {
      return `${Number(value).toLocaleString('pt-BR')} ${dimension}`;
    };

    Vue.prototype.$formatCPF = formatCPF;
    Vue.prototype.$formatCNPJ = formatCNPJ;
    Vue.prototype.$formatTelefone = formatTelefone;
    Vue.prototype.$formatCelular = formatCelular;
    Vue.prototype.$formatDateBR = formatDateBR;
  },
};
