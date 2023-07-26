/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module '*./router' {
  import type { DefineComponent } from 'vue-router';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
