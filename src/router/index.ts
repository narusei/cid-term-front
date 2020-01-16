import Vue from "vue";
import VueRouter from "vue-router";
import NoiseCheckerPage from "../views/NoiseCheckerPage.vue";
import PastNoisePage from "../views/PastNoisePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "NoiseCheckerPage",
    component: NoiseCheckerPage
  },
  {
    path: "/past-noise",
    name: "PastNoisePage",
    component: PastNoisePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
