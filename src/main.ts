import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const head = createHead();

library.add(faTwitter, faInstagram, faLinkedin, faWhatsapp, faTelegram);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.use(head);

app.mount('#app');
