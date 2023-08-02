<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import LoadingGetPosys from "./LoadingGetPosys.vue";
  import type { PropType } from "vue";
  const listPosts = ref([]);

  const props = defineProps<{
  listPosts: listPostsData,
  total: any
}>();
  async function getData() {
    const res = await fetch("https://binasaffron.ir/wp-json/wp/v2/posts?per_page="+ props.total);
    const finalRes = await res.json();
    listPosts.value = finalRes;
  }
 getData()
export interface listPostsData {
  yoast_head_json: any;
  og_image: string;
  description: string;
  link: string;
  title: any;
  rendered: string
  
}


</script>
<template>
    <div class="postsList flex flex-wrap" v-if="listPosts.length>0">
      <div class="post h-96 basis-full  md:basis-1/4 text-center my-7 px-5" v-for="posts in listPosts">
        <div class="h-full bg-white border border-gray-200 rounded-lg shadow">
            <a :href="posts.link">
                <img class="rounded-t-lg" :src= "posts.yoast_head_json.og_image[0].url" alt="" />
            </a>
            <div class="p-5">
                <a :href="posts.link">
                    <h5 class="mb-2 text-base text-2xl font-bold tracking-tight text-gray-900">{{posts.title.rendered}}</h5>
                </a>
                <p class="mb-3 text-sm font-normal text-gray-700">{{posts.yoast_head_json.description}}</p>
                <a :href="posts.link" class="text-xs	inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-900">
                    ادامه مطلب
                </a>
            </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap" v-else>
        <LoadingGetPosys  v-for="(item, index) in 4" :key="index" />
    </div>
  </template>