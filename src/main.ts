import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// 添加具体图标
library.add(faBars)

// 在Vue实例中全局挂载
const app = createApp(App);
app.config.globalProperties.$Chart = Chart;

// 注册图标组件
app.component('font-awesome-icon', FontAwesomeIcon); 
// 挂载Vue3实例到 #app 容器
app.mount('#app');
