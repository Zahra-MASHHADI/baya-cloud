import { createRouter, createWebHistory } from 'vue-router'

import PlayListPage from '../views/PlayListPage.vue'
import PlayListDetail from '../views/PlayListDetail.vue'
import ChanelPage from '../views/ChanelPage.vue'
import ChannelDetail from '../views/ChannelDetail.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'کانال ها',
    component: ChanelPage,
  },
  {
    path: '/playLists',
    name: 'پلی لیست ها',
    component: PlayListPage,
  },
  {
    path: '/playlists/:id',
    name: 'جزئیات پلی لیست',
    component: PlayListDetail,
  },
  {
    path: '/channel/:id',
    name: 'جزئیات کانال ',
    component: ChannelDetail,
  },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // short for `routes: routes`
})

export default router