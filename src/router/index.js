import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/index.vue';
// import User from '../pages/home/user/MyManagement.vue';
import dateSelection from '../pages/dateSelection/index.vue';
import regionSelection from '../pages/regionSelection/index.vue';
import ApplicantInformation from '../pages/applicantInformation/index.vue';
import purchaseResult from '../pages/purchaseResult/index.vue';
import MyPage from '../pages/my/my.vue';
import Filter from '../pages/filter/filter.vue';
import EventDetails from '../pages/eventDetails/eventDetails.vue';
import Location from '../pages/location/location.vue';
import Admin from '../pages/admin/index.vue';
import DetailPage from '../pages/detailPage/index.vue';

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
    path: '/filter',
    name: 'Filter',
    component: Filter
  },
  {
    path: '/eventDetails',
    name: 'eventDetails',
    component: EventDetails
  },
  {
    path: '/location',
    name: 'location',
    component: Location
  },
  {
    path: '/applicant_information',
    name: 'ApplicantInformation',
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
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/detail_page',
    name: 'detailPage',
    component: DetailPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
