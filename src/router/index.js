import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Echarts.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/About.vue")
  // },
  // {
  //   path: "/d3",
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/d3.vue")
  // },
  {
    path: "/amcharts",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/amcharts.vue")
  },
  {
    path: "/pyramid",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/pyramid.vue")
  },

];

const router = new VueRouter({
  routes
});

export default router;