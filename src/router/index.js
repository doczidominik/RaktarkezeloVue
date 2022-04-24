import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/termek',
    name: 'termek',
    component: () => import('../views/TermekView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
