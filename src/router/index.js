import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../view/About.vue'),
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