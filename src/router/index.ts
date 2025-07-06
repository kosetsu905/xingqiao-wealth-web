// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/login/LoginPage.vue'
import RegisterPage from '../views/login/RegisterPage.vue'
import SuccessRegister from '../views/login/SuccessRegister.vue'
import SuccessEditPwd from '../views/login/SuccessEditPwd.vue'
import ForgetPwdPage from '../views/login/ForgetPwdPage.vue'
import RiskTest from '../views/risk/RiskTest.vue'
import Index from '../views/client/Index.vue'
import UserInfo from '../views/client/UserInfo.vue'
import Account from '../views/client/Account.vue'
import one from '../views/common/401.vue'
import two from '../views/common/404.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/client/login', component: LoginPage },
    { path: '/client/register', component: RegisterPage },
    { path: '/client/successRegister', component: SuccessRegister },
    { path: '/client/successEditPwd', component: SuccessEditPwd },
    { path: '/client/forgetPwdPage', component: ForgetPwdPage },
    { path: '/client/index', component: Index },
    { path: '/client/riskTest', component: RiskTest },
    { path: '/client/userInfo', component: UserInfo },
    { path: '/client/account', component: Account },
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