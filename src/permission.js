import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { isPathMatch } from '@/utils/validate'
import { isRelogin } from '@/utils/request'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register']

const isWhiteList = (path) => {
  return whiteList.some(pattern => isPathMatch(pattern, path))
}

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if (to.path !== '/') {
//     next({ path: '/' })
//   } else {
//     next()
//   }
//   NProgress.done()
// })

// router.afterEach(() => {
//   NProgress.done()
// })
