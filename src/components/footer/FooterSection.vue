<script setup lang="ts">
const openEnamad = () => {
  window.open('https://trustseal.enamad.ir/?id=151181&Code=E8NdkFVVMVFU3cirkrut'); 
}
const openSamandehi = () => {
   window.open("https://logo.samandehi.ir/Verify.aspx?id=1047253&p=rfthobpdaodsjyoeuiwkdshwxlao", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")  
}
</script>

<template>
  <div class="footer text-sm flex flex-wrap p-8 bg-gray-100">
    <div class="contacUs grid basis-full  md:basis-1/4 p-4">
        <span>مشهد ، خیابان شیرازی ، بازار بزرگ غدیر ، طبقه +1 ، پلاک 17</span>
        <a href="tel:09152163991">09152163991</a>
        <a href = "mailto: info@binasaffron.ir">info@binasaffron.ir</a>
    </div>
    <div class="importantLink basis-full  md:basis-1/4 p-4">
        <h4 class="font-bold">زعفران بینا</h4>
        <ul class="mt-4">
            <li><a href="https://binasaffron.ir/mag/">مجله زعفران بینا</a></li>
            <li><RouterLink to="/contact-us">تماس با ما</RouterLink></li>
        </ul>
    </div>
    <div class="categories basis-full  md:basis-1/4 p-4">
        <span class="font-bold">دسته بندی محصولات</span>
        <ul class="mt-4">
          <li><RouterLink to="/product-category/saffron">خرید زعفران</RouterLink></li>
          <li><RouterLink to="/product-category/gift-box">خرید جعبه هدیه زعفران</RouterLink></li>
        </ul>
    </div>
    <div class="trust basis-full md:basis-1/4 p-4 flex">
        <img src="https://binasaffron.ir/mag/wp-content/uploads/2021/07/binasaffron-e-namad.png" class="cursor-pointer" @click="(openEnamad)" alt="">
        <img src="https://binasaffron.ir/mag/wp-content/uploads/2021/07/binasaffron-samandehi.png" @click="(openSamandehi)" alt="">
    </div>
  </div>
  <div class="copyRight text-xs	 py-3 bg-gray-100 text-center border-2 border-t-gray-300">
    <span>© کلیه حقوق این وب سایت متعلق به شرکت فراوران زعفران بینا است.</span>
  </div>
</template>
