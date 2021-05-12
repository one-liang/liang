import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';

const router = createRouter({
  history: createWebHistory('/liang/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('../view/Experience.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../view/Portfolio.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('../view/Error.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router