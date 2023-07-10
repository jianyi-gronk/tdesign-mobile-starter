import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/index.vue';
import User from '../pages/user/MyManagement.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
