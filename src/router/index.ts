import Vue from "vue";
import VueRouter from "vue-router";
import NoiseCheckerPage from "../views/NoiseCheckerPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "NoiseCheckerPage",
    component: NoiseCheckerPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
