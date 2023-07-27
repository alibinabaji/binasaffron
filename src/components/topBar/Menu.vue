<script setup lang="ts">
import { RouterLink } from 'vue-router'

const menuItem = [
  {
    title: 'صفحه نخست',
    link: '/'
  },
  {
    title: 'خرید زعفران',
    link: '/product-category/saffron/'
  },
  {
    title: 'خرید جعبه هدیه زعفران',
    link: '/product-category/gift-box/'
  },
  {
    title: 'مجله زعفران بینا',
    link: '/mag/'
  },
  {
    title: 'تماس با ما',
    link: '/contact-us/'
  }
]

</script>

<template>
  <div class="menu text-sm border-b-2 border-inherit">
    <nav class="hidden md:flex justify-around max-w-[70%] my-4 mx-auto">
        <RouterLink to="/">صفحه نخست</RouterLink>
        <a href="/product-category/saffron/">خرید زعفران</a>
        <a href="/product-category/gift-box/">خرید جعبه هدیه زعفران</a>
        <a href="/mag/">مجله زعفران بینا</a>
        <RouterLink to="/contact-us">تماس با ما</RouterLink>
    </nav>
  </div>
</template>
