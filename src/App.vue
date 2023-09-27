<script setup lang="ts">
import TopBar from './components/topBar/TopBar.vue';
import FooterSection from './components/footer/FooterSection.vue'
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'
import {computed, reactive } from 'vue'
const siteData = reactive({
      title: `زعفران بینا`,
      description: `خرید زعفران و خرید جعبه های هدیه زعفران مناسب جهت هدایای سازمانی و منابع انسانی شرکت ها و اشخاص`,
    })
useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        ],
     
    })
</script>

<template>
   <header>
    <TopBar />
  </header>
  <RouterView/>
  <FooterSection />
</template>