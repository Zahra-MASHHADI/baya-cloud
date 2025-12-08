import { createRouter, createWebHistory } from 'vue-router'

import PlayListPage from 'src/views/PlayListPage.vue'
import PlayListDetail from 'src/views/PlayListDetail.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PlayListPage,
  },
  {
    path: '/playlist/:id',
    name: 'About',
    component: PlayListDetail,
  },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // short for `routes: routes`
})

export default router