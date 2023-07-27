<script setup lang="ts">
import TopBar from './components/topBar/TopBar.vue';
import FooterSection from './components/footer/FooterSection.vue'
import { RouterView } from 'vue-router'
</script>

<template>
   <header>
    <TopBar />
  </header>
  <RouterView/>
  <FooterSection />
</template>