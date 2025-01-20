import { Component } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: (): Promise<Component> => import('@/layout/ExampleLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'ExampleView',
        component: (): Promise<Component> => import('@/views/ExampleView.vue'),
      },
      {
        path: 'another-page',
        name: 'AnotherExampleView',
        component: (): Promise<Component> => import('@/views/ExampleView2.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory((import.meta.env || process.env).BASE_URL),
  routes,
});

export default router;
