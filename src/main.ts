import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Chart, registerables } from 'chart.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createPinia } from 'pinia'
//路由配置
import { router } from './router'


Chart.register(...registerables);


// 在Vue实例中全局挂载
const app = createApp(App);
app.config.globalProperties.$Chart = Chart;
// 注册路由
app.use(router)
app.use(createPinia())
// 挂载Vue3实例到 #app 容器
app.mount('#app');
