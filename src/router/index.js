import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import Login from "@/views/auth/login";
import App from "@/views/layouts/App";
import ApiTest from "@/views/ApiTest";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "app",
      component: App,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/api-test",
      name: "api-test",
      component: ApiTest,
      beforeEnter: ifAuthenticated
    }
  ]
});
