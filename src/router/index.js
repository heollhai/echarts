import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/d3",
    name: "d3",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/d3.vue")
  },
  {
    path: "/d32",
    name: "d32",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/d32.vue")
  },

];

const router = new VueRouter({
  routes
});

export default router;