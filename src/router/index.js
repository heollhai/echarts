import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Echarts.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mapDome",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/map3d/mapDome.vue")
  },
  {
    path: "/d3",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/d3.vue")
  },
  {
    path: "/d3test",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/d3/test1.vue")
  },
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
  {
    path: "/map3D",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/map3d/map3d.vue")
  },
  {
    path: "/map2d",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/map2d/map2d.vue")
  },

];

const router = new VueRouter({
  routes
});

export default router;