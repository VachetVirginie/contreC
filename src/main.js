import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueIframe from "vue-iframes";
import TwitterFeed from "vuejs-twitter-feed";

Vue.use(VueIframe, TwitterFeed);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
