import { createApp } from 'vue';
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

createApp(App).mount('#app');
