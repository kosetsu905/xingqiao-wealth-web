import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Chart, registerables } from 'chart.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BackToTop from '@/components/common/BackToTop.vue';

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
//路由配置
import { router } from './router'

Chart.register(...registerables);


// 在Vue实例中全局挂载
const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.config.globalProperties.$Chart = Chart;
// 注册路由
app.use(router)
app.use(createPinia())
app.component('BackToTop', BackToTop);

// 挂载Vue3实例到 #app 容器
app.mount('#app');
