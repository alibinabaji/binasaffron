<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

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
        <RouterLink v-for="value in menuItem" :to="{path:value.link}">{{value.title}}</RouterLink>
    </nav>
  </div>
</template>
