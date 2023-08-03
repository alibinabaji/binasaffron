<script setup lang="ts">
import Slider from '../components/slider/Slider.vue'
import ProductGrid from '../components/productGrid/ProductGrid.vue'
import SectionTitle from '../components/sectionTitle/SectionTitle.vue'
import Posts from '../components/mag/Posts.vue'
import GiftBox from '../components/productGrid/GiftboxList.json';

</script>

<template>
 
    <Slider />
    <SectionTitle>
      <h1>خرید جعبه هدیه زعفران</h1>
    </SectionTitle>
    <ProductGrid :ProductList="GiftBox" />
    <SectionTitle>
      <h2>مجله زعفران بینا</h2>
    </SectionTitle>
    <Posts total="4"/>
</template>
