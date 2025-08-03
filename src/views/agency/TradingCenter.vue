
<template>
  <!-- Header -->
  <Header :from="cdbc" :currentTabActive="4"/>
  <!-- 主内容区 -->
  <main class="container mx-auto px-4 py-6">
    <!-- 交易对选择器 -->
    <section class="mb-6">
      <div class="flex flex-wrap items-center gap-3 bg-dark-light p-3 rounded-xl">
        <div class="flex border border-gray-700 rounded-lg overflow-hidden">
          <button class="bg-primary text-white px-4 py-2 text-sm">币币交易</button>
          <button class="bg-transparent hover:bg-dark-lighter text-gray-500 px-4 py-2 text-sm transition-colors">杠杆交易</button>
          <button class="bg-transparent hover:bg-dark-lighter text-gray-500 px-4 py-2 text-sm transition-colors">合约交易</button>
        </div>

        <div class="relative flex-grow max-w-md">
          <select class="w-full bg-dark-lighter border border-gray-700 rounded-lg px-4 py-2 pr-8 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary">
            <option>BTC/USDT</option>
            <option>ETH/USDT</option>
            <option>HEZ/USDT</option>
            <option>OMG/USDT</option>
            <option>AI/USDT</option>
            <option>KIBSHI/USDT</option>
          </select>
          <i class="fa fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
        </div>

        <div class="flex flex-wrap gap-2">
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-white px-3 py-1.5 rounded text-xs transition-colors">BTC</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1.5 rounded text-xs transition-colors">ETH</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1.5 rounded text-xs transition-colors">HEZ</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1.5 rounded text-xs transition-colors">OMG</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1.5 rounded text-xs transition-colors">AI</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1.5 rounded text-xs transition-colors">
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- 价格信息和快捷操作 -->
    <section class="mb-6">
      <div class="bg-dark-light rounded-xl p-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-3">
              <h2 class="text-xl font-bold">Bitcoin (BTC)</h2>
              <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">BTC/USDT</span>
            </div>
            <div class="mt-2 flex flex-wrap items-baseline gap-4">
              <div class="text-2xl font-bold">$42,856.32</div>
              <div class="text-success flex items-center">
                <i class="fa fa-arrow-up mr-1"></i>
                <span>+2.36%</span>
              </div>
              <div class="text-gray-400 text-sm">≈ ¥298,452.15</div>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
            <div>
              <div class="text-gray-400 text-xs">24h高</div>
              <div class="text-white text-sm font-medium">$44,218.56</div>
            </div>
            <div>
              <div class="text-gray-400 text-xs">24h低</div>
              <div class="text-white text-sm font-medium">$41,982.31</div>
            </div>
            <div>
              <div class="text-gray-400 text-xs">24h成交量</div>
              <div class="text-white text-sm font-medium">$28.4B</div>
            </div>
            <div>
              <div class="text-gray-400 text-xs">市值</div>
              <div class="text-white text-sm font-medium">$823.6B</div>
            </div>
          </div>

          <div class="flex gap-2 w-full md:w-auto">
            <button class="flex-1 md:flex-none md:px-4 bg-success hover:bg-success/90 text-white py-2 rounded-lg transition-colors text-sm">
              <i class="fa fa-plus mr-1"></i> 买入
            </button>
            <button class="flex-1 md:flex-none md:px-4 bg-danger hover:bg-danger/90 text-white py-2 rounded-lg transition-colors text-sm">
              <i class="fa fa-minus mr-1"></i> 卖出
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- K线图表和交易区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- K线图表区域 - 占据2/3宽度 -->
      <div class="lg:col-span-2 space-y-6">
        <!-- K线图表 -->
        <div class="bg-dark-light rounded-xl p-4 card-hover">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div class="flex flex-wrap gap-2">
              <button class="bg-primary text-white px-3 py-1 rounded text-xs">分时</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1 rounded text-xs transition-colors">15分</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1 rounded text-xs transition-colors">1小时</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1 rounded text-xs transition-colors">4小时</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1 rounded text-xs transition-colors">1天</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1 rounded text-xs transition-colors">1周</button>
            </div>

            <div class="flex gap-2">
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 p-1.5 rounded text-xs transition-colors" title="画线工具">
                <i class="fa fa-pencil"></i>
              </button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 p-1.5 rounded text-xs transition-colors" title="指标">
                <i class="fa fa-line-chart"></i>
              </button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 p-1.5 rounded text-xs transition-colors" title="全屏">
                <i class="fa fa-expand"></i>
              </button>
            </div>
          </div>

          <!-- K线图容器 -->
          <div class="h-[400px] w-full">
            <div id="tradingview-chart" class="w-full h-full"></div>
          </div>
        </div>

        <!-- 最近成交记录 -->
        <div class="bg-dark-light rounded-xl p-4 card-hover">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold">最近成交</h3>
            <button class="text-primary text-sm hover:underline">查看全部</button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
              <tr class="text-gray-400 border-b border-gray-700">
                <th class="py-2 text-left">价格(USDT)</th>
                <th class="py-2 text-right">数量(BTC)</th>
                <th class="py-2 text-right">总额(USDT)</th>
                <th class="py-2 text-right">时间</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b border-gray-800 hover:bg-dark-lighter/30 transition-colors">
                <td class="py-2.5 text-left text-success">$42,856.32</td>
                <td class="py-2.5 text-right">0.0245</td>
                <td class="py-2.5 text-right">$1,050.00</td>
                <td class="py-2.5 text-right text-gray-500">14:32:45</td>
              </tr>
              <tr class="border-b border-gray-800 hover:bg-dark-lighter/30 transition-colors">
                <td class="py-2.5 text-left text-danger">$42,841.56</td>
                <td class="py-2.5 text-right">0.1020</td>
                <td class="py-2.5 text-right">$4,369.84</td>
                <td class="py-2.5 text-right text-gray-500">14:32:18</td>
              </tr>
              <tr class="border-b border-gray-800 hover:bg-dark-lighter/30 transition-colors">
                <td class="py-2.5 text-left text-success">$42,838.21</td>
                <td class="py-2.5 text-right">0.0512</td>
                <td class="py-2.5 text-right">$2,193.31</td>
                <td class="py-2.5 text-right text-gray-500">14:31:52</td>
              </tr>
              <tr class="border-b border-gray-800 hover:bg-dark-lighter/30 transition-colors">
                <td class="py-2.5 text-left text-success">$42,835.78</td>
                <td class="py-2.5 text-right">0.0087</td>
                <td class="py-2.5 text-right">$372.67</td>
                <td class="py-2.5 text-right text-gray-500">14:31:25</td>
              </tr>
              <tr class="hover:bg-dark-lighter/30 transition-colors">
                <td class="py-2.5 text-left text-danger">$42,829.45</td>
                <td class="py-2.5 text-right">0.2451</td>
                <td class="py-2.5 text-right">$10,497.50</td>
                <td class="py-2.5 text-right text-gray-500">14:30:48</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 交易表单和订单簿 - 占据1/3宽度 -->
      <div class="space-y-6">
        <!-- 买入表单 -->
        <div class="bg-dark-light rounded-xl p-4 card-hover">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-success">买入 BTC</h3>
            <div class="flex gap-1">
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-2 py-1 rounded text-xs transition-colors">25%</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-2 py-1 rounded text-xs transition-colors">50%</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-2 py-1 rounded text-xs transition-colors">75%</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-2 py-1 rounded text-xs transition-colors">100%</button>
            </div>
          </div>

          <div class="space-y-3">
            <div>
              <label class="block text-gray-400 text-xs mb-1">价格 (USDT)</label>
              <input type="text" value="42,856.32" class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-success">
            </div>

            <div>
              <label class="block text-gray-400 text-xs mb-1">数量 (BTC)</label>
              <input type="text" placeholder="0.00" class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-success">
            </div>

            <div>
              <label class="block text-gray-400 text-xs mb-1">总额 (USDT)</label>
              <input type="text" placeholder="0.00" class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-success">
            </div>

            <div class="text-xs text-gray-400 mt-1">
              <p>可用 USDT: 12,548.25</p>
            </div>

            <button class="w-full bg-success hover:bg-success/90 text-white py-3 rounded-lg transition-colors font-medium">
              买入 BTC
            </button>
          </div>
        </div>

        <!-- 卖出表单 -->
        <div class="bg-dark-light rounded-xl p-4 card-hover">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-danger">卖出 BTC</h3>
            <div class="flex gap-1">
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-400 px-2 py-1 rounded text-xs transition-colors">25%</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-400 px-2 py-1 rounded text-xs transition-colors">50%</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-400 px-2 py-1 rounded text-xs transition-colors">75%</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-400 px-2 py-1 rounded text-xs transition-colors">100%</button>
            </div>
          </div>

          <div class="space-y-3">
            <div>
              <label class="block text-gray-400 text-xs mb-1">价格 (USDT)</label>
              <input type="text" value="42,856.32" class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-danger">
            </div>

            <div>
              <label class="block text-gray-400 text-xs mb-1">数量 (BTC)</label>
              <input type="text" placeholder="0.00" class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-danger">
            </div>

            <div>
              <label class="block text-gray-400 text-xs mb-1">总额 (USDT)</label>
              <input type="text" placeholder="0.00" class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-danger">
            </div>

            <div class="text-xs text-gray-400 mt-1">
              <p>可用 BTC: 0.5241</p>
            </div>

            <button class="w-full bg-danger hover:bg-danger/90 text-white py-3 rounded-lg transition-colors font-medium">
              卖出 BTC
            </button>
          </div>
        </div>

        <!-- 订单簿 -->
        <div class="bg-dark-light rounded-xl p-4 card-hover">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold">订单簿</h3>
            <div class="flex items-center gap-2">
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-400 px-2 py-1 rounded text-xs transition-colors">0.1</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-400 px-2 py-1 rounded text-xs transition-colors">0.01</button>
              <button class="bg-primary text-white px-2 py-1 rounded text-xs">0.001</button>
              <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-400 p-1 rounded text-xs transition-colors" title="刷新">
                <i class="fa fa-refresh"></i>
              </button>
            </div>
          </div>
          <!-- 卖单 (asks) -->
          <div class="space-y-1 max-h-[200px] overflow-y-auto scrollbar-hide">
            <div class="grid grid-cols-3 gap-2 text-xs text-gray-400 pb-1 border-b border-gray-700">
              <div class="text-middle">价格(USDT)</div>
              <div class="text-middle">数量(BTC)</div>
              <div class="text-middle">总额(USDT)</div>
            </div>

            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-ask cursor-pointer">
              <div class="text-middle text-danger">$42,865.21</div>
              <div class="text-middle">0.3245</div>
              <div class="text-middle">$13,910.76</div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-ask cursor-pointer">
              <div class="text-middle text-danger">$42,860.54</div>
              <div class="text-middle">0.1521</div>
              <div class="text-middle">$6,519.19</div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-ask cursor-pointer">
              <div class="text-middle text-danger">$42,858.77</div>
              <div class="text-middle">0.0876</div>
              <div class="text-middle">$3,754.43</div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-ask cursor-pointer">
              <div class="text-middle text-danger">$42,856.32</div>
              <div class="text-middle">0.2154</div>
              <div class="text-middle">$9,231.25</div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-ask cursor-pointer">
              <div class="text-middle text-danger">$42,852.18</div>
              <div class="text-middle">0.4782</div>
              <div class="text-middle">$20,592.91</div>
            </div>
          </div>

          <!-- 买单 (bids) -->
          <div class="space-y-1 max-h-[200px] overflow-y-auto scrollbar-hide mt-2">
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-bid cursor-pointer">
              <div class="text-middle text-success">$42,849.75</div>
              <div class="text-middle">0.3562</div>
              <div class="text-middle">$15,262.18</div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-bid cursor-pointer">
              <div class="text-middle text-success">$42,845.32</div>
              <div class="text-middle">0.1875</div>
              <div class="text-middle">$8,033.50</div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-bid cursor-pointer">
              <div class="text-middle text-success">$42,841.56</div>
              <div class="text-middle">0.0982</div>
              <div class="text-middle">$4,207.04</div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-bid cursor-pointer">
              <div class="text-middle text-success">$42,838.21</div>
              <div class="text-middle">0.5214</div>
              <div class="text-middle">$22,335.84</div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-bid cursor-pointer">
              <div class="text-middle text-success">$42,832.75</div>
              <div class="text-middle">0.2458</div>
              <div class="text-middle">$10,528.39</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 我的订单 -->
    <section class="mt-6 mb-12">
      <div class="bg-dark-light rounded-xl p-4 card-hover">
        <div class="flex flex-wrap justify-between items-center mb-6 gap-4">
          <h2 class="text-xl font-bold">我的订单</h2>

          <div class="flex border border-gray-700 rounded-lg overflow-hidden">
            <button class="bg-primary text-white px-4 py-2 text-sm">当前订单</button>
            <button class="bg-transparent hover:bg-dark-lighter text-gray-400 px-4 py-2 text-sm transition-colors">历史订单</button>
            <button class="bg-transparent hover:bg-dark-lighter text-gray-400 px-4 py-2 text-sm transition-colors">充值记录</button>
            <button class="bg-transparent hover:bg-dark-lighter text-gray-400 px-4 py-2 text-sm transition-colors">提现记录</button>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
            <tr class="text-gray-400 border-b border-gray-700">
              <th class="py-3 text-left">订单号</th>
              <th class="py-3 text-left">交易对</th>
              <th class="py-3 text-left">类型</th>
              <th class="py-3 text-right">价格(USDT)</th>
              <th class="py-3 text-right">数量(BTC)</th>
              <th class="py-3 text-right">总额(USDT)</th>
              <th class="py-3 text-right">状态</th>
              <th class="py-3 text-right">时间</th>
              <th class="py-3 text-right">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b border-gray-800 hover:bg-dark-lighter/30 transition-colors">
              <td class="py-3 text-left text-gray-400">8726458921</td>
              <td class="py-3 text-left">BTC/USDT</td>
              <td class="py-3 text-left">
                <span class="bg-success/10 text-success px-2 py-0.5 rounded-full text-xs">买入</span>
              </td>
              <td class="py-3 text-right">$42,750.00</td>
              <td class="py-3 text-right">0.0500</td>
              <td class="py-3 text-right">$2,137.50</td>
              <td class="py-3 text-right">
                <span class="bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded-full text-xs">部分成交</span>
              </td>
              <td class="py-3 text-right text-gray-400">2023-06-15 14:25:18</td>
              <td class="py-3 text-right">
                <button class="text-danger text-xs hover:underline">取消</button>
              </td>
            </tr>
            <tr class="border-b border-gray-800 hover:bg-dark-lighter/30 transition-colors">
              <td class="py-3 text-left text-gray-400">8726457193</td>
              <td class="py-3 text-left">BTC/USDT</td>
              <td class="py-3 text-left">
                <span class="bg-danger/10 text-danger px-2 py-0.5 rounded-full text-xs">卖出</span>
              </td>
              <td class="py-3 text-right">$43,200.00</td>
              <td class="py-3 text-right">0.1000</td>
              <td class="py-3 text-right">$4,320.00</td>
              <td class="py-3 text-right">
                <span class="bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full text-xs">未成交</span>
              </td>
              <td class="py-3 text-right text-gray-400">2023-06-15 13:48:32</td>
              <td class="py-3 text-right">
                <button class="text-danger text-xs hover:underline">取消</button>
              </td>
            </tr>
            <tr class="hover:bg-dark-lighter/30 transition-colors">
              <td class="py-3 text-left text-gray-400">8726451085</td>
              <td class="py-3 text-left">ETH/USDT</td>
              <td class="py-3 text-left">
                <span class="bg-danger/10 text-danger px-2 py-0.5 rounded-full text-xs">卖出</span>
              </td>
              <td class="py-3 text-right">$2,430.00</td>
              <td class="py-3 text-right">2.5000</td>
              <td class="py-3 text-right">$6,075.00</td>
              <td class="py-3 text-right">
                <span class="bg-success/10 text-success px-2 py-0.5 rounded-full text-xs">已成交</span>
              </td>
              <td class="py-3 text-right text-gray-400">2023-06-15 11:15:47</td>
              <td class="py-3 text-right">
                <button class="text-primary text-xs hover:underline">详情</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 flex justify-between items-center">
          <div class="text-sm text-gray-400">显示 1-3 条，共 12 条</div>
          <div class="flex items-center space-x-1">
            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-lighter text-gray-400 hover:bg-primary hover:text-white transition-colors disabled:opacity-50" disabled>
              <i class="fa fa-angle-left"></i>
            </button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white">1</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-lighter hover:bg-primary hover:text-white transition-colors">2</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-lighter hover:bg-primary hover:text-white transition-colors">3</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-lighter text-gray-400 hover:bg-primary hover:text-white transition-colors">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup>

import Header from "@/components/agency/Header.vue";
const cdbc = 'cbdc';
import {ref, onMounted, watch, reactive} from 'vue';
// 图表实例引用
let chartInstance = null;
// 订单簿数据（示例数据，实际应通过API获取）
const orderBookAsks = ref([
  { quantity: '0.5', price: 60000 },
  { quantity: '1.2', price: 60001 },
  { quantity: '0.8', price: 60002 },
]);

const orderBookBids = ref([
  { quantity: '2.1', price: 59999 },
  { quantity: '1.5', price: 59998 },
  { quantity: '0.9', price: 59997 },
]);

// 交易表单数据
const buyForm = reactive({
  price: '',
  amount: '',
  total: ''
});

const sellForm = reactive({
  price: '',
  amount: '',
  total: ''
});

// 初始化TradingView图表
const initChart = () => {
  if (typeof window.TradingView !== 'undefined') {
    chartInstance = new window.TradingView.widget({
      width: '100%',
      height: '100%',
      symbol: 'BITSTAMP:BTCUSD',
      interval: 'D',
      timezone: 'Asia/Shanghai',
      theme: 'dark',
      style: '1',
      locale: 'zh_CN',
      toolbar_bg: '#1F2937',
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: 'tradingview-chart'
    });
  } else {
    const chartContainer = document.getElementById('tradingview-chart');
    if (chartContainer) {
      chartContainer.innerHTML = `
        <div class="w-full h-full flex items-center justify-center text-gray-400">
          <div class="text-center">
            <i class="fa fa-line-chart text-4xl mb-2"></i>
            <p>K线图表加载失败</p>
          </div>
        </div>
      `;
    }
  }
};

// 处理订单簿点击事件
const handleOrderBookClick = (type, price) => {
  const cleanPrice = price.replace('$', '');
  if (type === 'ask') {
    buyForm.price = cleanPrice;
  } else {
    sellForm.price = cleanPrice;
  }
};

// 处理百分比按钮点击
const handlePercentClick = (percent, type) => {
  const form = type === 'buy' ? buyForm : sellForm;
  const availableBalance = type === 'buy'
      ? 10000  // 示例：可用USDT余额（实际应从API获取）
      : 2.5;   // 示例：可用BTC余额（实际应从API获取）

  const price = parseFloat(form.price);
  if (isNaN(price) || price <= 0) return;

  const total = availableBalance * (percent / 100);
  form.amount = (type === 'buy' ? total / price : availableBalance * (percent / 100)).toFixed(6);
  form.total = total.toFixed(2);
};

// 输入框联动逻辑
const syncInputs = (form) => {
  // 监听价格变化
  watch(() => form.price, (newPrice) => {
    if (newPrice && !isNaN(newPrice)) {
      form.total = (parseFloat(newPrice) * parseFloat(form.amount || 0)).toFixed(2);
    }
  });

  // 监听数量变化
  watch(() => form.amount, (newAmount) => {
    if (newAmount && !isNaN(newAmount)) {
      form.total = (parseFloat(form.price || 0) * parseFloat(newAmount)).toFixed(2);
    }
  });

  // 监听总额变化
  watch(() => form.total, (newTotal) => {
    if (newTotal && !isNaN(newTotal)) {
      form.amount = (parseFloat(newTotal) / parseFloat(form.price || 0)).toFixed(6);
    }
  });
};

// 初始化输入框联动
syncInputs(buyForm);
syncInputs(sellForm);

// 生命周期钩子：组件挂载后初始化图表
onMounted(() => {
  initChart();
});

</script>


<style scoped>

</style>