<script setup lang="ts">
  import { register } from 'swiper/element/bundle';
  register();
  const spaceBetween = 10;
</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
    :centered-slides="true"
    :loop="true"
    :autoplay="true"
    >
    <swiper-slide>
      <img class="m-auto" alt="binasaffron" src="@/assets/slider/binasaffron-slider-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img class="m-auto"  alt="binasaffron" src="@/assets/slider/binasaffron-slider-2.jpg" />
    </swiper-slide>
  </swiper-container>
</template>