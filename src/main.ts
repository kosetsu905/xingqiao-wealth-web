import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// 在Vue实例中全局挂载
const app = createApp(App);
app.config.globalProperties.$Chart = Chart;
library.add(faUser, faHome)

app.component('fa-icon', FontAwesomeIcon)
  .mount('#app')
