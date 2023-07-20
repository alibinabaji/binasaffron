<script setup lang="ts">
const openEnamad = () => {
  window.open('https://trustseal.enamad.ir/?id=151181&Code=E8NdkFVVMVFU3cirkrut'); 
}
const openSamandehi = () => {
   window.open("https://logo.samandehi.ir/Verify.aspx?id=1047253&p=rfthobpdaodsjyoeuiwkdshwxlao", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")  
}
</script>

<template>
  <div class="footer flex flex-wrap p-8 bg-gray-200">
    <div class="contacUs grid basis-full  md:basis-1/4 p-4">
        <span>مشهد ، خیابان شیرازی ، بازار بزرگ غدیر ، طبقه +1 ، پلاک 17</span>
        <a href="tel:09152163991">09152163991</a>
        <a href = "mailto: info@binasaffron.ir">info@binasaffron.ir</a>
    </div>
    <div class="importantLink basis-full  md:basis-1/4 p-4">
        <h4 class="font-bold">زعفران بینا</h4>
        <ul class="mt-4">
            <li><a href="http://binasaffron.ir/mag/">مجله</a></li>
            <li><a href="http://binasaffron.ir/contact-us/">تماس با ما</a></li>
        </ul>
    </div>
    <div class="categories basis-full  md:basis-1/4 p-4">
        <span class="font-bold">دسته بندی محصولات</span>
        <ul class="mt-4">
            <li><a href="https://binasaffron.ir/product-category/saffron/">خرید زعفران</a></li>
            <li><a href="https://binasaffron.ir/product-category/gift-box/">خرید جعبه هدیه زعفران</a></li>
        </ul>
    </div>
    <div class="trust basis-full md:basis-1/4 p-4 flex">
        <img src="https://binasaffron.ir/wp-content/uploads/2021/07/binasaffron-e-namad.png" class="cursor-pointer" @click="(openEnamad)" alt="">
        <img src="https://binasaffron.ir/wp-content/uploads/2021/07/binasaffron-samandehi.png" class="cursor-pointer" @click="(openSamandehi)" alt="">
    </div>
  </div>
  <div class="copyRight py-3 bg-gray-200 text-center border-2 border-t-gray-300">
    <span>© کلیه حقوق این وب سایت متعلق به شرکت فراوران زعفران بینا است.</span>
  </div>
</template>
