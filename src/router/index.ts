import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ContactUs from '../pages/ContactUs.vue'
import Mag from '../pages/MagPosts.vue'
import SaffronCategory from '../pages/SaffronCategory.vue'
import GiftboxCategory from '../pages/GiftboxCategory.vue'
import SingleProduct from '../pages/SingleProduct.vue'
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
    {
      path: '/product-category/saffron/',
      name: 'saffron',
      component: SaffronCategory
    },
    {
      path: '/product-category/gift-box/',
      name: 'Gift box',
      component: GiftboxCategory
    },
    {
      path: '/product/:url/',
      name: 'SingleProduct',
      props: true,
      component: SingleProduct
    },
  ]
})

export default router
