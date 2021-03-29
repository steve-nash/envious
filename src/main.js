import Vue from "vue";
import BootstrapVue from "bootstrap-vue"
import App from "./App.vue";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./assets/css/app.css";
import router from "./router";
import store from "./store";
import VueSnackbar from "vue-snack";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import ButtonSpinner from "@/components/globals/ButtonSpinner";

UIkit.use(Icons);
window.UIkit = UIkit;
Vue.use(BootstrapVue)

// loads the Icon plugin
window._ = require("lodash");

require("./assets/styles/index.scss");
require("vue-snack/dist/vue-snack.min.css");

Vue.config.productionTip = false;

window.Event = new Vue();

Vue.use(VueSnackbar, {});

Vue.component("button-spinner", ButtonSpinner);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
