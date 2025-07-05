// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/registerPage.vue'
import SuccessRegister from '../views/SuccessRegister.vue'
import SuccessEditPwd from '../views/SuccessEditPwd.vue'
import ForgetPwdPage from '../views/ForgetPwdPage.vue'
import Index from '../views/Index.vue'
import one from '../views/error/401.vue'
import two from '../views/error/404.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/successRegister', component: SuccessRegister },
    { path: '/successEditPwd', component: SuccessEditPwd },
    { path: '/forgetPwdPage', component: ForgetPwdPage },
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