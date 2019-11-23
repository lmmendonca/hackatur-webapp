<template>
  <v-dialog v-model="alertDialog" persistent max-width="450">
    <v-card>
      <v-card-title>
        <v-icon large color="red lighten-2">warning</v-icon>
        <span class="pl-2">Desculpe!</span>
      </v-card-title>
      <v-card-text>
        <span v-for="(alert, i) in alerts" :key="i" class="subtitle-1">{{alert.message}}</span>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn text @click="closeAlertDialog">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("app", ["alertDialog", "alerts", "auth"])
  },
  methods: {
    ...mapActions("app", ["closeAlertDialog"])
  }
};
</script>

<style>
</style>