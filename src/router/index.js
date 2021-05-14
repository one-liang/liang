import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory('/liang/'),
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
      path: '/bookmark',
      name: 'Bookmark',
      component: () => import('@/view/Bookmark.vue'),
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