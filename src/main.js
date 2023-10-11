import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'swiper/css';


const app = createApp(App)
app.use(VueAwesomeSwiper).use(router).use(ElementPlus)
app.mount('#app')


