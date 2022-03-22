import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/homeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/aboutView.vue'),
  },
  {
    path: '/network',
    name: 'network',
    component: () => import('../views/networkView.vue'),
  },
  {
    path: '/dataDownload',
    name: 'dataDownload',
    component: () => import('../views/dataDownloadView.vue'),
  },
  {
    path: '/building',
    name: 'building',
    component: () => import('../views/buildingView.vue'),
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/teamView.vue'),
  },
  {
    // 亂打網址會被指回首頁
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
