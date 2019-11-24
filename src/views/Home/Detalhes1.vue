<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12></v-flex>
        <v-card>
            <v-carousel>
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>

            <v-card-title class="headline">
            Final de Feriado Fora do Óbivio
            </v-card-title>

            <v-card-text class="subtitle">
                <b>Valor:</b> R$ 20,00 + Alimentação &nbsp;&nbsp;&nbsp;&nbsp;
                <b>Forma de Pagamento:</b> Dinheiro &nbsp;&nbsp;&nbsp;&nbsp;
                <b>Data:</b> 20/12/2019
            </v-card-text>

            <v-card-title class="title">
                        <tr>
                        Itinerario
                        <th></th>
                        </tr>
            </v-card-title>

            <v-card-text>
                        <v-row no-gutters>
                            <v-col cols="4" md="2">
                                <v-card-text
                                class="body-1">
                                <v-icon>room</v-icon>
                                <span class="subtitle-1 center">Strassberg Tortas Alemãs</span>
                                </v-card-text>
                            </v-col>
                            <v-col cols="4" md="2">
                                <v-card-text
                                class="body-1">
                                <v-icon>room</v-icon>
                                <span class="subtitle-1 center">Voo no aeroporto 14 Bis</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="4" md="2">
                                <v-card-text
                                class="body-1">
                                <v-icon>room</v-icon>
                                <span class="subtitle-1 center">Por do Sol no Lago Igápo</span>
                                </v-card-text>
                            </v-col>
                            <v-col cols="4" md="2">
                                <v-card-text
                                class="body-1">
                                <v-icon>room</v-icon>
                                <span class="subtitle-1 center">Feira da Lua</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
            </v-card-text>
            <v-card-title>
            <p class="title">
                Descrição
            </p>
            </v-card-title>
            <v-card-text>
                <p class="body-1">
                    Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                </p>
            </v-card-text>
            <p class="text-right">
                <v-container
                    class="spacing-playground py-0 px-10"
                    fluid
                >
                    <v-btn right=true color="white">Voltar</v-btn>
                    &nbsp;&nbsp;
                    <v-btn right=true color="black" style="color:white;">
                        Comprar
                    </v-btn>
                </v-container>
            </p>
        </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    rating: 3,
    items: [
      {
        src:
          "http://baixaexperimenta.com.br/wp-content/uploads/2014/05/strassberg-tortas-alemas-londrina-02.jpg"
      },
      {
        src:
          "https://tudorondonia.com/uploads/29-07-19-jmo4zi5gnqj4gap.jpg"
      },
      {
        src:
          "https://s2.glbimg.com/6WyMvKpxRqdZkFtcXwcN9LvHUF4=/0x0:500x333/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Q/l/zXA1WfT3qH7WpECUxB0A/feira-noturna.jpg"
      }
    ]
  })
};
</script>

<style>

</style>
