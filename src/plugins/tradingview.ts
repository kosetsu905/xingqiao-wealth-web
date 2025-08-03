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

// 扩展 Window 接口
declare global {
  interface Window {
    TradingView: any;
  }
}

// 动态加载 TradingView 脚本
const loadTradingViewScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 检查是否已经加载
    if (typeof window !== 'undefined' && window.TradingView) {
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

  // 初始化 TradingView 图表
  const initChart = async () => {
    try {
      // 确保容器元素存在
      const container = document.getElementById(config.containerId);
      if (!container) {
        console.warn(`Container with id '${config.containerId}' not found`);
        return;
      }

      await loadTradingViewScript();

      if (typeof window !== 'undefined' && window.TradingView) {
        // 清理之前的图表实例（如果存在）
        if (chart.value) {
          // TradingView widget 没有 destroy 方法，但我们可以移除之前的图表
          container.innerHTML = '';
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
          toolbar_bg: config.theme === 'dark' ? '#1e293b' : '#f1f3f6',
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
    // 延迟一小段时间确保 DOM 完全渲染
    const timer = setTimeout(() => {
      initChart();
    }, 100);

    // 清理定时器
    onUnmounted(() => {
      clearTimeout(timer);
    });
  });

  // 在卸载时清理资源
  onUnmounted(() => {
    // TradingView widget 没有 destroy 方法
    chart.value = null;
  });

  // 提供更新图表配置的方法
  const updateChart = (newConfig: Partial<TradingViewConfig>) => {
    const updatedConfig = { ...config, ...newConfig };
    Object.assign(config, updatedConfig);
    initChart();
  };

  return {
    chart,
    updateChart
  };
}
