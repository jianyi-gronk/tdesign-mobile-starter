import { createRouter, createWebHashHistory } from 'vue-router';

let routes = [
  {
    name: 'applicant_information',
    path: '/applicant_information',
    component: () => import('../pages/applicant_information/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
