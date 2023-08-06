<script setup lang="ts">
const props = defineProps<{
    url: any,
}>();
import product from "../components/productGrid/products.json"
let b = 0
switch (props.url) {
case "جعبه-هدیه-2-گوهر-زعفران-و-هل-بینا":
    b = 0
    break;
case "زعفران-گوهر-بینا-1-گرم-به-همراه-هاون":
    b = 1
    break;
case "پک-هدیه-زعفران-بینا":
    b = 2
    break;
case "پک-هدیه-زعفران-و-هل-بینا":
    b = 3
    break;
case "زعفران-هدیه-آذین-بینا-2-گرم-به-همراه-هاو":
    b = 4
    break;
case "پک-هدیه-زعفران-خاتم-و-هل-بینا":
    b = 5
    break;
case "پک-هدیه-تک-خاتم-هاون-دار-بینا":
    b = 6
    break;
case "پک-هدیه-2-خاتم-زرشک-دار-بینا":
    b = 7
    break;
case "پک-هدیه-تک-خاتم-قوری-دار-بینا":
    b = 8
    break;
case "زعفران-هدیه-2-خاتم-بینا-4-گرم":
    b = 9
    break;
case "پک-هدیه-قوری-دار-زعفران-و-هل-بینا":
    b = 10
    break;
case "زعفران-هدیه-خاتم-قوری-دار-بینا-4-گرم":
    b = 11
    break;
case "هل-سبز-بینا-20-گرم":
    b = 12
    break;
case "زعفران-نگین-بینا":
    b = 13
    break;
case "ریشه-زعفران-بینا-4-6-گرم":
    b = 14
    break;
case "زعفران-آذین-بینا-2-گرم":
    b = 15
    break;
case "زعفران-قوطی-تخت-بینا-یک-مثقال":
    b = 16
    break;
case "زعفران-خاتم-بینا-2-گرم":
    b = 17
    break;
}
</script>

<template>
    <div class="singleProduct m-6  p-4">
        <div class="flex flex-wrap font-sans">
            <div class="basis-full md:basis-1/3">
                <div class="flex flex-wrap">
                    <div class="basis-full">
                        <img :src="`https://binasaffron.ir/` + product[b].img" alt="" class="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div class="basis-1/3" v-for="pics in product[b].thumbnails">
                        <img :src="`https://binasaffron.ir` + pics" alt="" class="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
                <div class="basis-full md:basis-2/3 p-6 shadow-md border border-inherit">
                    <div class="grid">
                        <h1 class="flex-auto text-lg font-semibold text-slate-900 my-2">
                            {{product[b].name}}
                        </h1>
                        <div class="text-2xl font-semibold text-red-800 my-2">
                            {{product[b].price}} تومان
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
                        <p v-html="product[b].summarize"></p>
                    </p>
                </div>
        </div>
        
    </div>
    <div class="description p-4 border border-inherit m-4 rounded-md shadow-md">
        <span class="flex-auto text-lg font-semibold text-red-900">
            توضیحات محصول
        </span>
        <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
            <p v-html="product[b].description"></p>
        </div>
</template>
