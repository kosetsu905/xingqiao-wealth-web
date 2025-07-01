import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Chart, registerables } from 'chart.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginPage from './components/LoginPage.vue' // 新增导入

Chart.register(...registerables);

// 配置路由
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: LoginPage },
        // 可在此添加其他路由...
    ]
})

// 在Vue实例中全局挂载
const app = createApp(App);
app.config.globalProperties.$Chart = Chart;
app.use(router) // 注册路由

// 挂载Vue3实例到 #app 容器
app.mount('#app');
