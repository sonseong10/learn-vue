import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route } from "vue-router";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import bus from "../utils/bus";
import store from "../store/index";
import createListView from "@/views/CreateListView";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"),
      async beforeEnter(
        to: Route,
        form: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit("start:spinner");
        try {
          await store.dispatch("FETCH_LIST", to.name);
          next();
        } catch (error) {
          new Error("failed to fetch item details");
          // next('404.html');
        }
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      beforeEnter: (to, form, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch(() => new Error("failed to fetch user profile"));
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      beforeEnter: (to, form, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch(() => new Error("failed to fetch jobs"));
      },
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
