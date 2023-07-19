<script setup lang="ts">
import TopBar from './components/topBar/TopBar.vue'
import Slider from './components/slider/Slider.vue'
import ProductGrid from './components/productGrid/ProductGrid.vue'
import SectionTitle from './components/sectionTitle/SectionTitle.vue'
import Posts from './components/mag/Posts.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <header>
    <TopBar />
  </header>
    <Slider />
    <SectionTitle>
      <h1>خرید جعبه هدیه زعفران</h1>
    </SectionTitle>
    <ProductGrid />
    <SectionTitle>
      <h2>مجله زعفران بینا</h2>
    </SectionTitle>
    <Posts />
    <Footer />
</template>
