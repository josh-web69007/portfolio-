import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Erreur from '../Pages/Erreur.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/src/Pages/Erreur.vue',
      name: 'Erreur',
      component: () => import('../Pages/Erreur.vue')
    },
  ],

})

export default router
