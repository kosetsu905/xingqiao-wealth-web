// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/login/LoginPage.vue'
import RegisterPage from '../views/login/RegisterPage.vue'
import SuccessRegister from '../views/login/SuccessRegister.vue'
import SuccessEditPwd from '../views/login/SuccessEditPwd.vue'
import ForgetPwdPage from '../views/login/ForgetPwdPage.vue'
import RiskTest from '../views/client/RiskTest.vue'
import Risk from '../views/client/Risk.vue'
import Analysis from '../views/client/Analysis.vue'
import TransactionInfo from '../views/client/TransactionInfo.vue'
import Index from '../views/client/Index.vue'
import UserInfo from '@/views/client/UserInfo.vue'
import Account from '../views/client/Account.vue'
import Message from '../views/client/Message.vue'
import Product from '../views/client/Product.vue'
import one from '../views/common/401.vue'
import two from '../views/common/404.vue'
import agencyIndex from '../views/agency/Index.vue'
import Insurance from '../views/agency/Insurance.vue'
import Globalinvestmentfund from '../views/agency/Globalinvestmentfund.vue'
import Digitalcurrency from '../views/agency/Digitalcurrency.vue'
import EkycView from '../views/agency/EkycView.vue'
import AgencyUserInfo from '../views/agency/UserInfo.vue'
import CustomerInfo from '../views/agency/CustomerInfo.vue'
import CustomerList from '../views/agency/CustomerList.vue'
import AgencyMessage from '../views/agency/Message.vue'
import AccountInfo from '../views/agency/AccountInfo.vue'
import Calculation from '../views/agency/Calculation.vue'
import PerformanceReport from '../views/agency/PerformanceReport.vue'
import CommissionHistory from '../views/agency/CommissionHistory.vue'
import Etf from '../views/agency/Etf.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/successRegister', component: SuccessRegister },
    { path: '/successEditPwd', component: SuccessEditPwd },
    { path: '/forgetPwdPage', component: ForgetPwdPage },
    { path: '/client/index', component: Index },
    { path: '/client/riskTest', component: RiskTest },
    { path: '/client/risk', component: Risk },
    { path: '/client/userInfo', component: UserInfo },
    { path: '/client/account', component: Account },
    { path: '/client/message', component: Message },
    { path: '/client/product', component: Product },
    { path: '/client/analysis', component: Analysis },
    { path: '/client/transaction', component: TransactionInfo },
    { path: '/agency/index', component: agencyIndex },
    { path: '/agency/insurance', component: Insurance },
    { path: '/agency/globalinvestmentfund', component: Globalinvestmentfund },
    { path: '/agency/digitalcurrency', component: Digitalcurrency },
    { path: '/agency/ekycView', component: EkycView },
    { path: '/agency/etf', component: Etf },
    { path: '/agency/userInfo', component: AgencyUserInfo },
    { path: '/agency/customerInfo', component: CustomerInfo },
    { path: '/agency/customerList', component: CustomerList },
    { path: '/agency/message', component: AgencyMessage },
    { path: '/agency/accountInfo', component: AccountInfo },
    { path: '/agency/calculation', component: Calculation },
    { path: '/agency/performanceReport', component: PerformanceReport },
    { path: '/agency/commissionHistory', component: CommissionHistory },
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