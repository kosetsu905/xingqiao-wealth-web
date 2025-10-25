import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Chart, registerables } from 'chart.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BackToTop from '@/components/common/BackToTop.vue';

// 图标导入保持不变
import {
    faUsers,
    faDollarSign,
    faChartPie,
    faChartBar,
    faGlobe,
    faChartLine,
    faPiggyBank,
    faHeart,
    faBuilding,
    faUserPlus,
    faMagnifyingGlass,
    faBullseye,
    faList,
    faCircleUser,
    faCalculator,
    faChartArea,
    faFileInvoice,
    faChevronRight,
    faXmark
} from '@fortawesome/free-solid-svg-icons'

// 添加图标到库
library.add(
    faUsers,
    faDollarSign,
    faChartPie,
    faChartBar,
    faGlobe,
    faChartLine,
    faPiggyBank,
    faHeart,
    faBuilding,
    faUserPlus,
    faMagnifyingGlass,
    faBullseye,
    faList,
    faCircleUser,
    faCalculator,
    faChartArea,
    faFileInvoice,
    faChevronRight,
    faXmark
)

import { createPinia } from 'pinia'
// 路由配置
import { router } from './router' // 确保 './router' 指向正确的 JavaScript 文件

// 注册 Chart.js 组件
Chart.register(...registerables);
import '@klinecharts/pro/dist/klinecharts-pro.css'

// 创建并配置 Vue 应用实例
const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.config.globalProperties.$Chart = Chart; // 全局挂载 Chart.js 实例
app.use(router) // 注册路由
app.use(createPinia()) // 注册状态管理库 Pinia
app.component('BackToTop', BackToTop);

// 将应用挂载到 DOM
app.mount('#app');
