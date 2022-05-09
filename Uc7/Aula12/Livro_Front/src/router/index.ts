import { createRouter, createWebHistory } from 'vue-router'
import LivrosView from '../views/LivrosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LivrosView
    },
    {
      path: '/login',
      name: 'login',
      component:() => import('../views/LoginView.vue')
    }  
  ]
})

export default router
