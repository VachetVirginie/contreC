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
    path: "/bluetouff",
    name: "bluetouff",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BluetouffView.vue"),
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
    path: "/contreAttaque",
    name: "contreAttaque",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContreAttaqueView"),
  },
  {
    path: "/blast",
    name: "blast",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlastView"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
