<script setup lang="ts">
const props = defineProps<{
  ProductList: any,
}>();

</script>

<template>
  <div class="productsList flex flex-wrap">
    <div class="product basis-1/2  md:basis-1/6 text-center my-7" v-for="product in props.ProductList">
      <router-link :to="{ name: 'SingleProduct', params: { url: product.link}}">
        <img class="w-full" :src="'https://binasaffron.ir/' +  product.img " alt="" loading="lazy" >
        <h2 class="productName mx-3">{{ product.name }}</h2>
        <span class="price text-red-700">{{ product.price }} تومان</span>
      </router-link>
    </div>
  </div>
</template>
