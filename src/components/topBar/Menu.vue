<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const menuItem = [
  {
    title: 'صفحه نخست',
    link: '/'
  },
  {
    title: 'خرید زعفران',
    link: '/'
  },
  {
    title: 'خرید جعبه هدیه زعفران',
    link: '/'
  },
  {
    title: 'مجله زعفران بینا',
    link: '/'
  },
  {
    title: 'تماس با ما',
    link: '/about'
  }
]

</script>

<template>
  <div class="menu border-b-2 border-inherit md:block hidden">
    <nav class="flex justify-around max-w-[70%] my-4 mx-auto">
        <RouterLink v-for="value in menuItem" :to="{path:value.link}">{{value.title}}</RouterLink>
    </nav>
  </div>
</template>
