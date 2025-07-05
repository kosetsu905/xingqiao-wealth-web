// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/login/LoginPage.vue'
import RegisterPage from '../views/login/RegisterPage.vue'
import SuccessRegister from '../views/login/SuccessRegister.vue'
import SuccessEditPwd from '../views/login/SuccessEditPwd.vue'
import ForgetPwdPage from '../views/login/ForgetPwdPage.vue'
import Index from '../views/client/Index.vue'
import one from '../views/common/401.vue'
import two from '../views/common/404.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/successRegister', component: SuccessRegister },
    { path: '/successEditPwd', component: SuccessEditPwd },
    { path: '/forgetPwdPage', component: ForgetPwdPage },
    { path: '/index', component: Index },
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