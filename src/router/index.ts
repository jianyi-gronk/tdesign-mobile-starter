// router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../pages/home/index.vue') },
  { path: '/my', component: () => import('../pages/my/my.vue') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
