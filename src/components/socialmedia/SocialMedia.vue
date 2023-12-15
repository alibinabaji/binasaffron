<script setup lang="ts">
  import { faTwitter, faInstagram, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
    const twitterUrl= 'https://twitter.com/binasaffron';
    const instagramUrl= 'https://instagram.com/binasaffron/';
    const linkedinUrl= 'https://linkedin.com/company/binasaffron/';
    const whatsappUrl= 'https://api.whatsapp.com/message/WZCEHFNAUZA5G1?autoload=1&app_absent=0';
    const telegramUrl= 'https://t.me/binasaffron';

  </script>
<template>
  <div class="flex space-x-4 my-4">
    <!-- Twitter Icon -->
    <a :href="twitterUrl" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'twitter']" class="text-gray-500 mx-2" size="2x" />
    </a>

    <!-- Instagram Icon -->
    <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'instagram']" class="text-gray-500 mx-2" size="2x" />
    </a>

    <!-- LinkedIn Icon -->
    <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="text-gray-500 mx-2" size="2x" />
    </a>

    <!-- WhatsApp Icon -->
    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-gray-500 mx-2" size="2x" />
    </a>

    <!-- Telegram Icon -->
    <a :href="telegramUrl" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'telegram']" class="text-gray-500 mx-2" size="2x" />
    </a>
  </div>
</template>