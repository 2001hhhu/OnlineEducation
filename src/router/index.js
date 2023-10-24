import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutPage.vue'),
      redirect: '/home',
      children: [
        { path: '/cart', component: () => import('@/views/layout/CartPage.vue') },
        { path: '/home', component: () => import('@/views/layout/ChannelContainer.vue') },
        {
          path: '/order',
          component: () => import('@/views/layout/OrderPage.vue')
        },
        {
          path: '/course',
          component: () => import('@/views/layout/course/CoursePage.vue'),
          redirect: '/course/detail',
          children: [
            {
              path: '/course/detail',
              component: () => import('@/views/layout/course/CourseDetail.vue')
            },
            {
              path: '/course/learn',
              component: () => import('@/views/layout/course/CourseLearn.vue')
            },
            {
              path: '/course/evaluate',
              component: () => import('@/views/layout/course/CourseEvaluate.vue')
            }
          ]
        },
        {
          path: '/user',
          component: () => import('@/views/layout/user/UserPage.vue'),
          redirect: '/user/profile',
          children: [
            {
              path: '/user/report',
              component: () => import('@/views/layout/user/UserReport.vue')
            },
            {
              path: '/user/profile',
              component: () => import('@/views/layout/user/UserProfile.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
