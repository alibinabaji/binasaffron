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
        <RouterLink to="/product-category/saffron">خرید زعفران</RouterLink>
        <RouterLink to="/product-category/gift-box">خرید جعبه هدیه زعفران</RouterLink>
        <RouterLink to="/mag">مجله زعفران بینا</RouterLink>
        <RouterLink to="/contact-us">تماس با ما</RouterLink>
    </nav>
  </div>
</template>
