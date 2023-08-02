import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ContactUs from '../pages/ContactUs.vue'
import Mag from '../pages/MagPosts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: ContactUs
    },
    {
      path: '/mag',
      name: 'mag',
      component: Mag
    },
  ]
})

export default router
