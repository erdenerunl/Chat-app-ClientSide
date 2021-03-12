import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../components/Navbar.vue";

const redirectToChatIfAuthenticated = (to, from, next) => {
  if (localStorage.getItem("access_token")) {
    router.push("/");
    return;
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: () => import("../views/Home.vue"),
      Navbar,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter: redirectToChatIfAuthenticated,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("access_token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
