import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/index.vue';
import User from '../pages/home/user/MyManagement.vue';
import ApplicantInformation from '../pages/applicant_information/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/applicant_information',
    name: 'ApplicantInformation',
    component: ApplicantInformation
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
