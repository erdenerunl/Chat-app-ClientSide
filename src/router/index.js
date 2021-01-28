import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../components/Navbar.vue";

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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Şimdilik kapalı kalsın
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.getItem("jwt") == null) {
//       next({
//         path: "/login",
//         params: { nextUrl: to.fullPath },
//       }); 
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
