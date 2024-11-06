import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import SurpresaView from '../views/Surpresa.vue'
import AceitoView from '../views/Aceept.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/surpresa',
      name: 'surpresa',
      component: SurpresaView
    },
    {
      path: '/aceito',
      name: 'aceito',
      component: AceitoView
    },
  ]
})

export default router
