import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home/index.vue';
//import User from '../pages/home/user/MyManagement.vue';
import dateSelection from '../pages/dateSelection/index.vue';
import regionSelection from '../pages/regionSelection/index.vue';
import ApplicantInformation from '../pages/applicantInformation/index.vue';
import purchaseResult from '../pages/purchaseResult/index.vue';
import MyPage from '../pages/my/my.vue';
import EventDetails from '../pages/eventDetails/eventDetails.vue';
import activityDetail from '../pages/detailPage/index.vue';
import orderConfirm from '../pages/orderConfirmation/orderConfirm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'My',
    component: MyPage
  },
  {
    path: '/eventDetails',
    name: 'eventDetails',
    component: EventDetails
  },
  {
    path: '/applicantInformation',
    name: 'applicantInformation',
    component: ApplicantInformation
  },
  {
    path: '/dateSelection',
    name: 'dateSelection',
    component: dateSelection
  },
  {
    path: '/regionSelection',
    name: 'regionSelection',
    component: regionSelection
  },
  {
    path: '/purchaseResult',
    name: 'purchaseResult',
    component: purchaseResult
  },
  {
    path: '/activityDetail',
    name: 'activityDetail',
    component: activityDetail
  },
  {
    path: '/orderConfirm',
    name: 'orderConfirm',
    component: orderConfirm
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
