import { createRouter, createWebHistory } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default : () => import("../views/Home.vue"),
      Sidebar
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
