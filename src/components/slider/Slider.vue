<script setup lang="ts">
  import { register } from 'swiper/element/bundle';
  register();
  const spaceBetween = 10;

  const images = [
    {
      src: 'mag/wp-content/uploads/2022/11/binasaffron-slider-1.jpg'
    },
    {
      src: 'mag/wp-content/uploads/2022/11/binasaffron-slider-2.jpg'
    }
  ]
</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
    :centered-slides="true"
    :loop="true"
    :autoplay="true"
    >
    <swiper-slide v-for="image in images">
      <img class="m-auto" alt="binasaffron_slider" :src="'https://binasaffron.ir/' +  image.src " />
    </swiper-slide>
  </swiper-container>
</template>