import { createApp } from 'vue';
import TDesign from 'tdesign-mobile-vue';
import './style.css';
import App from './App.vue';

const setRem = () => {
  const html = document.querySelector('html')!;
  const width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 10 + 'px';
};

setRem();

window.onresize = () => {
  setRem();
};
const app = createApp(App);
app.use(TDesign);
app.mount('#app');
