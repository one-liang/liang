import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Experience from '../view/Experience.vue';

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
      component: Experience,
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