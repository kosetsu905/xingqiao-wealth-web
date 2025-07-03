// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'
import index from '../views/index.vue'
import one from '../views/error/401.vue'
import two from '../views/error/404.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: index },
    { path: '/login', component: loginPage },
    { path: '/register', component: registerPage },
    { path: '/401', component: one },
    { path: '/404', component: two },
  ]
})


// 注册全局前置守卫
router.beforeEach((to, _from, next) => {
  console.log('路由守卫触发:', to.path)
  // 此处可加入权限判断、登录态校验等逻辑
  next()
})