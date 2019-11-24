import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Detalhes1 from "./views/Home/Detalhes1.vue";
import Detalhes2 from "./views/Home/Detalhes2.vue";

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
      path: "/detalhes1",
      component: Detalhes1,
      meta: {
        name: "Detalhes1"
      }
    },
    {
      path: "/detalhes2",
      component: Detalhes2,
      meta: {
        name: "Detalhes2"
      }
    },
  ]
});
