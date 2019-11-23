// @ts-nocheck
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import Helpers from './plugins/helpers';
import router from './router';
import './assets/main.css';
import App from './App.vue';
import VueTheMask from 'vue-the-mask';

Vue.use(VueTheMask);
Vue.use(Helpers);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
