import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import SurpresaView from '../views/Surpresa.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/surpresa',  // Rota de surpresa
      name: 'surpresa',
      component: SurpresaView  // Defina o componente de surpresa
    },
  ]
})

export default router
