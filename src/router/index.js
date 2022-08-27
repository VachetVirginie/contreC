import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/hackstock",
    name: "hackstock",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HackstockView"),
  },
  {
    path: "/ideeculture",
    name: "ideeculture",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IdeeCultureView"),
  },
  {
    path: "/laronce",
    name: "laronce",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LaRonceView"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
