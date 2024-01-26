import { createRouter, createWebHistory } from 'vue-router'
import { routerMenu } from './routerMenu'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        requireVisitor: true, // 用户已经登录不能访问
      },
      component: () => import('../views/login/login.vue'),
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: 'vue3-admin',
        requireAuth: true, // 用户登录才能访问
      },
      component: () => import('../layout/MainLayout.vue'),
      children: [...routerMenu],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const { requireAuth, requireVisitor, title } = to.meta
  const token = localStorage.getItem('token')

  document.title = title ? `${title} - vue3-admin` : 'vue3-admin'

  if (requireAuth && !token) {
    next('/login')
  } else if (requireVisitor && token) {
    next('/home')
  } else {
    next()
  }
})

export default router
