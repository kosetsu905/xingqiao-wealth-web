<template>
  <div class="dashboard">
    <!-- 引入Header组件 -->
    <Header />
    
    <!-- 仪表盘内容区域 -->
    <div class="heatmap-container" v-if="!loading">
      <div class="tradingview-widget-container">
        <div id="tradingview-heatmap"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from '@/components/client/Header.vue';

// 响应式数据
const selectedSymbol = ref('NASDAQ:AAPL');
const chartRange = ref('12M');
const loading = ref(false);
const error = ref('');
const scriptElement = ref(null);



// 加载TradingView图表
const loadTradingViewChart = () => {
  // 移除之前的脚本
  if (scriptElement.value) {
    scriptElement.value.remove();
    scriptElement.value = null;
  }
  
  // 清空容器内容
  const container = document.getElementById('tradingview-heatmap');
  if (container) {
    container.innerHTML = '';
  }
  
  try {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": selectedSymbol.value,
      "chartOnly": false,
      "dateRange": chartRange.value,
      "noTimeScale": false,
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "zh",
      "width": "100%",
      "autosize": true,
      "height": "100%"
    });

    if (container) {
      container.appendChild(script);
      scriptElement.value = script;
    }
    
    error.value = '';
  } catch (err) {
    console.error('加载TradingView图表失败:', err);
    error.value = '无法加载市场数据，请稍后重试';
  } finally {
    loading.value = false;
  }
};

// 刷新图表
const refreshChart = () => {
  loading.value = true;
  // 添加短暂延迟，提升用户体验
  setTimeout(() => {
    loadTradingViewChart();
  }, 300);
};

// 组件挂载时加载图表
onMounted(() => {
  loading.value = true;
  loadTradingViewChart();
});

// 组件卸载时清理资源
onUnmounted(() => {
  if (scriptElement.value) {
    scriptElement.value.remove();
  }
});
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 市场概览样式 */
.market-overview {
  margin-bottom: 30px;
}

.market-overview h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.market-indicators {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.indicator-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.indicator-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.indicator-name {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.indicator-value {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.trend-up {
  color: #16a34a;
}

.trend-down {
  color: #dc2626;
}

.indicator-change {
  font-size: 16px;
  font-weight: 500;
}

/* 图表区域样式 */
.chart-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.chart-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.chart-controls {
  display: flex;
  gap: 12px;
}

.chart-controls select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.chart-controls select:hover,
.chart-controls select:focus {
  border-color: #4f46e5;
}

.heatmap-container {
  width: 100%;
  height: 500px;
  margin: 0;
  position: relative;
}

.tradingview-widget-container {
  width: 100%;
  height: 100%;
}

/* 加载状态样式 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  color: #666;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4f46e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 错误状态样式 */
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  color: #dc2626;
  text-align: center;
}

.retry-button {
  margin-top: 16px;
  padding: 10px 20px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.retry-button:hover {
  background-color: #4338ca;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dashboard-content {
    padding: 16px;
  }
  
  .chart-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .chart-controls {
    width: 100%;
    flex-direction: column;
  }
  
  .chart-controls select {
    width: 100%;
  }
  
  .heatmap-container {
    height: 400px;
  }
  
  .loading-container,
  .error-container {
    height: 400px;
  }
}
</style>
