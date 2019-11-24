<template>
  <v-container fluid grid-list-md>
    <div>
      <h1>Explorar</h1>
      <v-layout row wrap>
        <br />

        <div class="row wrap" style="padding-left=5px">
          <v-spacer></v-spacer>

          <v-card max-width="344">
            <v-img
              class="white--text align-end"
              height="200px"
              src="data:image/jpeg;base64,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"
            >
              <v-card-title>DIA DE FEIRA</v-card-title>
            </v-img>

            <!-- <div class="text-left">
              <v-rating v-model="rating"></v-rating>
            </div>-->

            <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</v-card-text>
          </v-card>
          <v-spacer></v-spacer>

          <v-card max-width="344">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.ocp.news/2019/07/cinema-ao-livre-gratuito-jaragua-do-sul-catolica.jpg"
            >
              <v-card-title>AR LIVRE</v-card-title>
            </v-img>

            <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</v-card-text>
          </v-card>

          <v-spacer></v-spacer>

          <v-card max-width="344">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://ecovaletur.com.br/site/wp-content/uploads/2018/07/seguro-e-seguranca-no-ecoturismo-ecovaletur.jpg"
            >
              <v-card-title>ECOTURISMO</v-card-title>
            </v-img>

            <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</v-card-text>
          </v-card>

          <v-spacer></v-spacer>

          <v-card max-width="344">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://i2.wp.com/www.hisour.com/wp-content/uploads/2018/08/Street-food.jpg?fit=960%2C640&ssl=1"
            >
              <v-card-title>COMIDA DE RUA</v-card-title>
            </v-img>

            <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</v-card-text>
          </v-card>
          <v-spacer></v-spacer>
        </div>
      </v-layout>
    </div>

    <div>
      <br />
      <h1>Troca de Experiencias</h1>
      <v-card class="mx-auto">
        <v-row no-gutters>
          <v-col cols="3">
            <v-card>
              <v-carousel hide-delimiter-background show-arrows-on-hover cycle height="250">
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
          <v-col class="mx-auto">
            <v-card elevation="0" class="mx-auto">
              <v-card-title>Sábado em Londrina</v-card-title>
              <v-card-text
                class="pb-0 text--primary"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur blanditiis itaque soluta libero.</v-card-text>
              <v-card-text class="text--primary">
                <v-row no-gutters>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Pastel da Sergipe</span>
                  </v-col>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Catedral de Londrina</span>
                  </v-col>
                </v-row>
                <br />

                <v-row no-gutters>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Suco da Rodoviaria</span>
                  </v-col>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Exposição de Arte Moderna</span>
                  </v-col>
                </v-row>
                <br />

                <v-row no-gutters>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Feira da Lua</span>
                  </v-col>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Lago Igápo</span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <br />
      <v-card class="mx-auto">
        <v-row no-gutters>
          <v-col cols="3">
            <v-card>
              <v-carousel hide-delimiter-background show-arrows-on-hover cycle height="250">
                <v-carousel-item v-for="(item,i) in items2" :key="i" :src="item.src"></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
          <v-col class="mx-auto">
            <v-card elevation="0" class="mx-auto">
              <v-card-title>Final de Feriado Fora do Óbivio</v-card-title>
              <v-card-text
                class="pb-0 text--primary"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur blanditiis itaque soluta libero.</v-card-text>
              <v-card-text class="text--primary">
                <v-row no-gutters>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Strassberg Tortas Alemãs</span>
                  </v-col>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Voo no aeroporto 14 Bis</span>
                  </v-col>
                </v-row>
                <br />

                <v-row no-gutters>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Por do Sol no Lago Igápo</span>
                  </v-col>
                  <v-col cols="4">
                    <v-icon>room</v-icon>
                    <span class="subtitle-1 center">Feira da Lua</span>
                  </v-col>
                </v-row>
                <br />

              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
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
          "https://mapio.net/images-p/15470398.jpg"
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Jardim_Bot%C3%A2nico_de_Londrina_-_Estufa_01.jpg"
      },
      {
        src:
          "https://cbnlondrina.com.br/uploads/materia/CATEDRALDELONDRINA_hHgyCTYBTLkRAbX.jpeg"
      }
    ],
    items2: [
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
