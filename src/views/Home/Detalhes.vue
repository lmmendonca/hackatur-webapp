<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12></v-flex>
        <v-card>
            <v-carousel>
                <v-carousel-item
                key="1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jardim_Bot%C3%A2nico_de_Londrina_-_Estufa_01.jpg/1920px-Jardim_Bot%C3%A2nico_de_Londrina_-_Estufa_01.jpg"
                ></v-carousel-item>
                <v-carousel-item
                key="2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Mata_do_Godoy.JPG/1280px-Mata_do_Godoy.JPG"
                ></v-carousel-item>
                <v-carousel-item
                key="3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Zer%C3%A3o1.JPG/1280px-Zer%C3%A3o1.JPG"
                ></v-carousel-item>
            </v-carousel>

            <v-card-title>
            <p style="font-size:250%">Programa Ar Livre</p>
            </v-card-title>

            <v-spacer></v-spacer>
            <v-card-text>
            <p style="font-size:150%">
                <b>Valor:</b> R$ 20,00 &nbsp;&nbsp;&nbsp;&nbsp;
                <b>Forma de Pagamento:</b> Dinheiro&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Data:</b> 20/12/2019
            </p>
            </v-card-text>

            <v-card-title>
                        <tr>
                        <p class="text-left" style="font-size:200%">Itinerario</p>
                        <th></th>
                        </tr>
            </v-card-title>

            <v-card-text style="font-size:150%">
                        <tr>
                            <v-container
                                class="spacing-playground py-50 px-5"
                                fluid
                            ><td>Local</td>
                            </v-container>
                            <td>Local</td>
                        </tr>
                        <tr>
                            <v-container
                                class="spacing-playground py-50 px-5"
                                fluid
                            ><td>Local</td>
                            </v-container>
                            <td>Local</td>
                        </tr>
                        <tr>
                            <v-container
                                class="spacing-playground py-50 px-5"
                                fluid
                            ><td>Local</td>
                            </v-container>
                            <td>Local</td>
                        </tr>
            </v-card-text>
            <v-card-title>
            <p style="font-size:200%">
                Descricao
            </p>
            </v-card-title>
            <v-card-text>
                <p style="font-size:150%">
                    Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                </p>
            </v-card-text>
            <p class="text-right">
                <v-container
                    class="spacing-playground py-0 px-10"
                    fluid
                >
                    <v-btn right=true color="success">Comprar</v-btn>
                    &nbsp;&nbsp;
                    <v-btn right=true color="error">Fechar</v-btn>
                </v-container>
            </p>
        </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>

</style>
