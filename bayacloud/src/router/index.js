import { createRouter, createWebHistory } from 'vue-router'

import PlayListPage from '../views/PlayListPage.vue'
import PlayListDetail from '../views/PlayListDetail.vue'
import ChanelPage from '../views/ChanelPage.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ChanelPage,
  },
  {
    path: '/playLists',
    name: 'playlist',
    component: PlayListPage,
  },
  {
    path: '/playlists/:id',
    name: 'playlistdetail',
    component: PlayListDetail,
  },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // short for `routes: routes`
})

export default router