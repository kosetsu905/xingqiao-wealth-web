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
import SalesOpportunity from '../views/agency/SalesOpportunity.vue'
import StableCoinMainPage from "@/views/agency/StableCoinMainPage.vue";
import StableCoinPortfolio from "@/views/agency/StableCoinPortfolio.vue";
import StableCoinPurchase from "@/views/agency/StableCoinPurchase.vue";
import CbdcView from "@/views/agency/CbdcView.vue";
import TradingCenter from "@/views/agency/TradingCenter.vue";
import News from "@/views/agency/News.vue";
import Academy from "@/views/agency/Academy.vue";
import Etf from '../views/agency/Etf.vue'

const WHITE_LIST: string[] = [
  '/client/auth/login',
  '/client/auth/register',
  '/client/auth/sendCode',
  '/login',
  '/register',
  '/successRegister',
  '/successEditPwd',
  '/forgetPwdPage',
  '/401',
  '/404',
];

// 定义路由配置
const routes = [
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
  { path: '/agency/salesOpportunity', component: SalesOpportunity },
  { path: '/agency/stableCoinMainPage', component: StableCoinMainPage },
  { path: '/agency/stableCoinPortfolio', component: StableCoinPortfolio },
  { path: '/agency/stableCoinPurchase', component: StableCoinPurchase },
  { path: '/agency/cbdc', component: CbdcView },
  { path: '/agency/tradingCenter', component: TradingCenter },
  { path: '/agency/news', component: News },
  { path: '/agency/academy', component: Academy },
  { path: '/401', component: one,meta:{requiresAuth: false} },
  { path: '/404', component: two,meta:{requiresAuth: false} },
]

// 为路由批量添加 meta 信息
routes.forEach(route => {
  // 如果路径在白名单中，则设置 requiresAuth 为 false，否则设置为 true
  if (WHITE_LIST.includes(route.path)) {
    route.meta = { requiresAuth: false }
  } else {
    route.meta = { requiresAuth: true }
  }
})

export const router = createRouter({
  history: createWebHistory(),
  routes
})

// 注册全局前置守卫
router.beforeEach(async (to, _from, next) => {
  console.log('路由守卫触发:', to.path)

  // 获取 token（假设存在 localStorage 中）
  const clientToken = localStorage.getItem('client-token')
  console.log("clientToken:"+clientToken)

  const agencyToken = localStorage.getItem('agency-token')
  console.log("agencyToken:"+agencyToken)

  // 判断是否需要登录权限的路由
  const requiresAuth = to.matched.some(record => record.meta?.requiresAuth)
  console.log("requiresAuth:"+requiresAuth)

  // 校验 token 合法性
  if (requiresAuth) {
    if (to.path.startsWith('/agency')&&!agencyToken) {
      console.log("校验agency token")
      // token 不存在，跳转到登录页
      next({ path: '/login' })
    }if (to.path.startsWith('/client')&&!clientToken) {
      console.log("校验client token")
      // token 不存在，跳转到登录页
      next({ path: '/login' })
    }  else {
      next()
    }
  } else {
    // 不需要权限的路由直接进入
    next()
  }
})
