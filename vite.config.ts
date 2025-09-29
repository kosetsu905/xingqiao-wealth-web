// Ensure this is the only vite config file in your project
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'



export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Vary': 'Accept-Encoding'
    },
    host: '0.0.0.0',
    port: 8082,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Should match your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 添加WebSocket代理配置，支持/ws和/ws/stock路径
      '/ws': {
        target: 'ws://localhost:8080/ws/stock',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
