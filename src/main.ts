import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import '@fortawesome/fontawesome-free/css/all.min.css';


// 在Vue实例中全局挂载
const app = createApp(App);
app.config.globalProperties.$Chart = Chart;

// 挂载Vue3实例到 #app 容器
app.mount('#app');
