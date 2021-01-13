import { createRouter, createWebHistory } from 'vue-router'
import Header from '../components/Header.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default : () => import("../views/Home.vue"),
      Header
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
