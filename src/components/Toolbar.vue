<template>
  <div>
    <v-app-bar
      v-if="!$route.meta.hideNavigation"
      color="black"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
      :height="$vuetify.breakpoint.smAndDown ? 120 : 64"
    >
      <v-container fluid ma-0 pa-0>
        <v-layout row>
          <v-flex md3 xs8>
            <v-toolbar-title
              class="pl-3"
              style="vertical-align: center; padding-top: 10px"
              bold
            >Fora do Óbvio</v-toolbar-title>
          </v-flex>
          <v-flex v-if="!$vuetify.breakpoint.smAndDown" md6 style="padding-top: 2px">
            <v-text-field
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="search"
              label="Buscar"
            ></v-text-field>
          </v-flex>
          <v-flex text-right md3 xs4>
            <div class="mr-3">
              <!-- Menu profile -->

              <v-avatar size="32px" tile>
                <v-icon size="32" style="vertical-align: center; padding-top: 15px">account_circle</v-icon>
              </v-avatar>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row v-if="$vuetify.breakpoint.smAndDown" mb-2>
          <v-flex xs12>
            <v-text-field
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="search"
              label="Buscar"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",

  computed: {
    pageTitle() {
      return this.$route.meta.name || "Hackatur";
    }
  }
};
</script>

<style scoped>
.v-application a {
  text-decoration: none;
  color: white;
}
.v-app-bar__nav-icon {
  margin-top: 2px;
}
</style>
