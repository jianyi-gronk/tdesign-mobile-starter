import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', component:() => import('../pages/detailPage/index.vue') }
    // { path: '/', component:() => import('../pages/index.vue') }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router