// src/plugins/tradingview.ts
import { ref, onMounted, onUnmounted } from 'vue';

// 定义 TradingView 配置接口
interface TradingViewConfig {
  symbol: string;
  interval: string;
  containerId: string;
  width?: string;
  height?: string;
  theme?: 'light' | 'dark';
}

// 动态加载 TradingView 脚本
const loadTradingViewScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 检查是否已经加载
    if (window.TradingView) {
      resolve();
      return;
    }

    // 检查是否正在加载
    const existingScript = document.querySelector('script[src="https://s3.tradingview.com/tv.js"]');
    if (existingScript) {
      // 如果脚本正在加载，等待它加载完成
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', () => reject(new Error('TradingView script failed to load')));
      return;
    }

    // 创建新的脚本标签
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('TradingView script failed to load'));
    document.head.appendChild(script);
  });
};

// 创建 TradingView 组件的组合式函数
export function useTradingView(config: TradingViewConfig) {
  const chart = ref<any>(null);
  let retryTimer: number | null = null;

  // 初始化 TradingView 图表
  const initChart = async () => {
    try {
      await loadTradingViewScript();

      if (typeof window !== 'undefined' && window.TradingView) {
        // 销毁之前的图表实例（如果存在）
        if (chart.value) {
          // TradingView widget 没有 destroy 方法
          chart.value = null;
        }

        // 创建新的图表实例
        chart.value = new window.TradingView.widget({
          symbol: config.symbol,
          interval: config.interval,
          container_id: config.containerId,
          width: config.width || '100%',
          height: config.height || '400px',
          theme: config.theme || 'light',
          style: '1',
          locale: 'zh_CN',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_top_toolbar: false,
          save_image: false,
          hide_legend: false,
          studies: [],
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
          autosize: true
        });
      }
    } catch (error) {
      console.error('Failed to initialize TradingView chart:', error);
    }
  };

  // 在挂载时初始化图表
  onMounted(() => {
    // 确保 DOM 元素已经渲染
    setTimeout(() => {
      initChart();
    }, 0);
  });

  // 在卸载时清理资源
  onUnmounted(() => {
    if (retryTimer) {
      clearTimeout(retryTimer);
    }
    // TradingView widget 没有 destroy 方法
    chart.value = null;
  });

  // 提供更新图表配置的方法
  const updateChart = (newConfig: Partial<TradingViewConfig>) => {
    const updatedConfig = { ...config, ...newConfig };
    Object.assign(config, updatedConfig);
    if (chart.value) {
      initChart();
    }
  };

  return {
    chart,
    updateChart
  };
}
