import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Detalhes from "./views/Home/Detalhes.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        name: "Hackatur"
      }
    },
    {
      path: "/detalhes",
      component: Detalhes,
      meta: {
        name: "Detalhes"
      }
    },
  ]
});
