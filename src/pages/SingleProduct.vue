<script setup lang="ts">
const props = defineProps<{
    url: any,
}>();
import product from "../components/productGrid/products.json"

const foundProduct = product.find((product) => product.url === props.url);

</script>

<template>
    <div class="singleProduct m-6  p-4">
        <div class="flex flex-wrap font-sans">
            <div class="basis-full md:basis-1/3">
                <div class="flex flex-wrap">
                    <div class="basis-full">
                        <img :src="`https://binasaffron.ir` + foundProduct?.img" alt="" class="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div class="basis-1/3" v-for="pics in foundProduct?.thumbnails">
                        <img :src="`https://binasaffron.ir` + pics" alt="" class="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
                <div class="basis-full md:basis-2/3 p-6 shadow-md border border-inherit">
                    <div class="grid">
                        <h1 class="flex-auto text-lg font-semibold text-slate-900 my-2">
                            {{foundProduct?.name}}
                        </h1>
                        <div class="text-2xl font-semibold text-red-800 my-2">
                            {{foundProduct?.price}} تومان
                        </div>
                    </div>
                    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    </div>
                    <div class="flex space-x-4 mb-6 text-sm font-medium">
                    <div class="flex-auto flex space-x-4">
                        <a href="tel:09152163991">
                            <button class="h-10 px-6 font-semibold rounded-md bg-red-800 text-white" type="submit">
                            خرید
                            </button>
                        </a>
                    </div>
                    </div>
                    <p class="text-sm text-slate-700">
                    برای ثبت سفارش با شماره <a href="tel:09152163991">09152163991</a> در تماس باشید.
                    </p>
                    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    </div>
                    <p class="text-sm text-slate-800">
                        <p v-html="foundProduct?.summarize"></p>
                    </p>
                </div>
        </div>
        
    </div>
    <div class="description p-4 border border-inherit m-4 rounded-md shadow-md">
        <span class="flex-auto text-lg font-semibold text-red-900">
            توضیحات محصول
        </span>
        <br/>
        <div class="flex items-baseline mt-4 mb-3 pb-3 border-b border-slate-200"></div>
            <p class="text-slate-700 text-sm" v-html="foundProduct?.description"></p>
    </div>
</template>
