import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-mobile-vue';
import 'tdesign-mobile-vue/es/style/index.css';
import router from './router'
import './styles/reset.css'
import './style.css'


const setRem = () => {
    const html = document.querySelector('html')!;
    const width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 10 + 'px';
};

setRem();

window.onresize = () => {
    setRem();
};

createApp(App).use(router).use(TDesign).mount('#app')
