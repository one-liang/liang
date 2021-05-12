import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/liang/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/view/Home.vue'),
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('@/view/Experience.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/view/Portfolio.vue'),
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/view/Test.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('@/view/Error.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router