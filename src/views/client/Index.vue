<template>
  <!-- Header -->
  <Header/>

  <div class="main bg-white shadow-sm border-b border-gray-200">

    <div  class="ml-0 md:ml-16 p-4 md:p-6 bg-white border-b border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 class="text-xl md:text-2xl font-semibold flex items-center">
            您好，{{ userName }}
            <i class="text-blue-500 ml-1 text-base md:text-lg inline-flex items-center" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-circle-check w-4 h-4 md:w-5 md:h-5" aria-hidden="true" focusable="false"
                   data-prefix="fas"
                   data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
              </svg>
            </i>
          </h1>
          <p class="text-gray-600 text-sm">
            {{ currentDate }}
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
          <div class="relative w-full md:w-64">
            <input type="text" placeholder="搜索股票、债券、基金..."
                   class="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <i class="absolute left-3 top-3 text-gray-500" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-magnifying-glass w-4 h-4" aria-hidden="true" focusable="false"
                   data-prefix="fas"
                   data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
              </svg>
            </i>
          </div>
          <button
              class="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 flex items-center w-full md:w-auto justify-center">
            <i class="mr-2" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-plus w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas"
                   data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
              </svg>
            </i>
            <span class="">搜索</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 主内容区 -->
    <div id="main-content" class="ml-0 md:ml-16 px-4 md:px-6 pb-6 bg-white text-black flex flex-col md:flex-row">
      <!-- 左侧内容 -->
      <div id="left-content" class="w-full md:w-2/3 pr-0 md:pr-6">
        <!-- 市场状态卡片 -->
        <div id="market-status" class="bg-gray-50 rounded-lg p-4 md:p-6 mb-6 md:mb-8 mt-4 md:mt-6">
          <div class="flex flex-wrap mb-3 md:mb-4">
            <div class="bg-green-100 text-green-800 rounded-full px-3 py-1 md:px-4 md:py-1 flex items-center text-sm">
              <span class="">今日市场走势看涨</span>
              <i class="ml-1 md:ml-2" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-arrow-trend-up w-4 h-4" aria-hidden="true" focusable="false"
                     data-prefix="fas"
                     data-icon="arrow-trend-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                     data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"></path>
                </svg>
              </i>
            </div>
          </div>
          <div class="mt-6 md:mt-10">
            <p class="text-gray-600 text-sm mb-2">今日市场要点</p>
            <h2 class="text-lg md:text-xl font-bold mb-2">{{ marketStatus.headline }}
            </h2>
          </div>
        </div>
        <!-- 全球市场概览 -->
        <div class="flex justify-between items-center mb-4">
          <h3 id="global-markets" class="text-lg md:text-xl font-semibold mb-4">全球市场</h3>
          <span class="text-blue-600 text-sm flex items-center cursor-pointer" @click="goToGlobalMarkets">
            查看全部
            <i class="ml-1 text-xs" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-chevron-right w-3 h-3" aria-hidden="true" focusable="false"
                   data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512" data-fa-i2svg="">
                <path fill="currentColor"
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
              </svg>
            </i>
          </span>
        </div>

        <div class="bg-gray-50 rounded-lg overflow-hidden mb-6 md:mb-8">
          <div class="grid grid-cols-5 text-xs md:text-sm">
            <div class="p-3 md:p-4 font-medium">名称</div>
            <div class="p-3 md:p-4 text-right">代码</div>
            <div class="p-3 md:p-4 text-right">最新价</div>
            <div class="p-3 md:p-4 text-right">涨跌额</div>
            <div class="p-3 md:p-4 text-right">涨跌幅</div>
          </div>
          <div class="text-xs md:text-sm">
            <template v-if="marketsLoading">
              <div class="grid grid-cols-5 animate-pulse">
                <div class="p-3 md:p-4 border-b border-gray-200 font-medium bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right text-gray-500 bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
              </div>
              <!-- 重复显示几行骨架屏 -->
              <div class="grid grid-cols-5 animate-pulse">
                <div class="p-3 md:p-4 border-b border-gray-200 font-medium bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right text-gray-500 bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
              </div>
              <div class="grid grid-cols-5 animate-pulse">
                <div class="p-3 md:p-4 border-b border-gray-200 font-medium bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right text-gray-500 bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
                <div class="p-3 md:p-4 border-b border-gray-200 text-right bg-gray-200 rounded"></div>
              </div>
            </template>
            <template v-else>
              <template v-for="(market, index) in globalMarkets" :key="index">
                <div class="grid grid-cols-5 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                     @click="goToInvestmentProduct(market.stockCode)">
                  <div class="p-3 md:p-4 border-b border-gray-200 font-medium">{{ market.stockName }}</div>
                  <div class="p-3 md:p-4 border-b border-gray-200 text-right text-gray-500">{{ market.stockCode }}</div>
                  <div class="p-3 md:p-4 border-b border-gray-200 text-right">{{ market.currentPrice }}</div>
                  <div class="p-3 md:p-4 border-b border-gray-200 text-right" :class="market.changeClass">
                    {{ market.priceChange }}
                  </div>
                  <div class="p-3 md:p-4 border-b border-gray-200 text-right" :class="market.bgClass">
                    {{ market.priceChangePercent }}
                  </div>
                </div>
              </template>
              <template v-if="globalMarkets.length === 0">
                <div class="p-6 text-center text-gray-500">
                  暂无市场数据
                </div>
              </template>
            </template>
          </div>
        </div>



        <!-- 热门股票 -->
        <div id="hot-stocks" class="mb-6 md:mb-8">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg md:text-xl font-semibold">热门股票</h3>
            <span class="text-blue-600 text-sm flex items-center cursor-pointer">
              查看全部
              <i class="ml-1 text-xs" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-chevron-right w-3 h-3" aria-hidden="true" focusable="false"
                     data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512" data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                </svg>
              </i>
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div v-for="(stock, index) in stockData" :key="index" class="bg-gray-50 rounded-lg p-3 md:p-4">
              <div class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center mr-2" :class="stock.bgColor">
                    <span class="text-xs font-bold" :class="stock.textColor">{{ stock.initial }}</span>
                  </div>
                  <div>
                    <div class="font-medium text-sm md:text-base">{{ stock.name }}</div>
                    <div class="text-xs text-gray-500">{{ stock.code }}</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-medium text-sm md:text-base">${{ stock.price }}</div>
                  <div class="text-xs md:text-sm" :class="stock.changeColor">+{{ stock.change }} ({{
                      stock.percent
                    }})
                  </div>
                </div>
              </div>
              <div class="h-20 md:h-24 w-full mt-2">
                <canvas :ref="el => { if (el) chartRefs[index] = el }" width="300" height="80"></canvas>
              </div>
            </div>
          </div>
        </div>

        <!-- 热门债券 -->
        <!-- 热门债券 -->
        <div id="hot-bonds" class="mb-6 md:mb-8">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg md:text-xl font-semibold">热门债券</h3>
            <span class="text-blue-600 text-sm flex items-center cursor-pointer">
              查看全部
              <i class="ml-1 text-xs" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-chevron-right w-3 h-3" aria-hidden="true" focusable="false"
                     data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512" data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                </svg>
              </i>
            </span>
          </div>
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <table class="w-full text-xs md:text-sm">
              <thead>
              <tr class="bg-gray-100">
                <th class="text-left p-3 md:p-4 font-medium text-gray-600">债券名称</th>
                <th class="text-right p-3 md:p-4 font-medium text-gray-600">收益率</th>
                <th class="text-right p-3 md:p-4 font-medium text-gray-600">价格</th>
                <th class="text-right p-3 md:p-4 font-medium text-gray-600">变动</th>
              </tr>
              </thead>
              <tbody>
              <template v-for="(bond, index) in bondData" :key="index">
                <tr class="border-b border-gray-200" :class="{ 'last:border-b-0': index === bondData.length - 1 }">
                  <td class="p-3 md:p-4">{{ bond.name }}</td>
                  <td class="p-3 md:p-4 text-right">{{ bond.yield }}</td>
                  <td class="p-3 md:p-4 text-right">{{ bond.price }}</td>
                  <td class="p-3 md:p-4 text-right" :class="bond.changeClass">{{ bond.change }}</td>
                </tr>
              </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 右侧内容 -->
      <div id="right-content" class="w-full md:w-1/3">
        <!-- 行业表现 -->
        <div id="sector-performance" class="mb-6 md:mb-8 mt-4 md:mt-6">
          <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">行业表现</h3>
          <div class="space-y-2 md:space-y-3">
            <template v-for="(sector, index) in sectorPerformance" :key="index">
              <div class="flex justify-between text-xs md:text-sm pb-2 border-b border-gray-200">
                <span class="">{{ sector.name }}</span>
                <span :class="sector.changeClass">{{ sector.change }}</span>
              </div>
            </template>
          </div>
        </div>

        <!-- 热门ETF -->
        <div id="hot-etfs" class="mb-6 md:mb-8">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-base md:text-lg font-semibold">热门ETF</h3>
            <span class="text-blue-600 text-sm flex items-center cursor-pointer">
              查看全部
              <i class="ml-1 text-xs" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-chevron-right w-3 h-3" aria-hidden="true" focusable="false"
                     data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512" data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                </svg>
              </i>
            </span>
          </div>
          <div class="bg-gray-50 rounded-lg p-3 md:p-4 space-y-3 md:space-y-4">
            <template v-for="(etf, index) in etfData" :key="index">
              <div class="flex justify-between items-center">
                <div>
                  <div class="font-medium text-sm md:text-base">{{ etf.name }}</div>
                  <div class="text-xs text-gray-500">{{ etf.code }}</div>
                </div>
                <div class="text-right">
                  <div class="font-medium text-sm md:text-base">{{ etf.price }}</div>
                  <div class="text-xs md:text-sm" :class="etf.changeClass">{{ etf.change }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>


        <!-- 热门基金 -->
        <div id="hot-funds" class="mb-6 md:mb-8">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-base md:text-lg font-semibold">热门基金</h3>
            <span class="text-blue-600 text-sm flex items-center cursor-pointer">
              查看全部
              <i class="ml-1 text-xs" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-chevron-right w-3 h-3" aria-hidden="true" focusable="false"
                     data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512" data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                </svg>
              </i>
            </span>
          </div>
          <div class="bg-gray-50 rounded-lg p-3 md:p-4 space-y-3 md:space-y-4">
            <template v-for="(fund, index) in fundData" :key="index">
              <div class="flex justify-between items-center">
                <div>
                  <div class="font-medium text-sm md:text-base">{{ fund.name }}</div>
                  <div class="text-xs text-gray-500">{{ fund.code }}</div>
                </div>
                <div class="text-right">
                  <div class="font-medium text-sm md:text-base">{{ fund.price }}</div>
                  <div class="text-xs md:text-sm" :class="fund.changeClass">{{ fund.change }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- 交易入口 -->
        <div id="trade-entry" class="bg-gray-50 rounded-lg p-4 md:p-6">
          <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">快速交易</h3>
          <div class="space-y-3 md:space-y-4">
            <button
                @click="goToTrade()"
                class="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-2 md:py-3 flex items-center justify-center">
              <i class="mr-2" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-money-bill-transfer w-4 h-4" aria-hidden="true" focusable="false"
                     data-prefix="fas" data-icon="money-bill-transfer" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 512" data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"></path>
                </svg>
              </i>
              <span class="text-white">买入</span>
            </button>
            <button
                @click="goToTrade()"
                class="w-full bg-gray-200 hover:bg-gray-300 rounded-lg py-2 md:py-3 flex items-center justify-center">
              <i class="mr-2" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-arrow-right-arrow-left w-4 h-4" aria-hidden="true" focusable="false"
                     data-prefix="fas" data-icon="arrow-right-arrow-left" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512" data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"></path>
                </svg>
              </i>
              <span class="">卖出</span>
            </button>
            <button
                class="w-full bg-gray-200 hover:bg-gray-300 rounded-lg py-2 md:py-3 flex items-center justify-center">
              <i class="mr-2" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-clock-rotate-left w-4 h-4" aria-hidden="true" focusable="false"
                     data-prefix="fas"
                     data-icon="clock-rotate-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                     data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"></path>
                </svg>
              </i>
              <span class="">查看持仓</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import Header from '@/components/client/Header.vue'
import {useRouter} from 'vue-router'
import {onMounted, onUnmounted, reactive, ref} from 'vue'
import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js'
import {useCurrentDate} from '@/composables/Composable.js'
import tradeWebSocket from "@/plugins/websocket.js";

const userName = ref('')

const {currentDate} = useCurrentDate()



// 注册 Chart.js 组件
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend)

const router = useRouter()

// 市场状态数据
const marketStatus = ref({
  headline: '全球市场整体呈现上涨趋势，科技股领涨'
})

// 全球市场数据
const globalMarkets = ref([])
const marketsLoading = ref(true)

// 热门股票数据
const stockData = reactive([
  {
    name: '阿里巴巴',
    code: 'BABA',
    price: '74.64',
    change: '+0.62',
    percent: '+0.84%',
    color: 'green',
    chartData: [73.50, 73.75, 74.20, 74.10, 74.64],
    timeData: ['09:30', '10:30', '11:30', '13:30', '14:30'],
    initial: '阿',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600'
  },
  {
    name: '腾讯控股',
    code: '0700.HK',
    price: '342.60',
    change: '¥6.80',
    percent: '+2.03%',
    initial: '腾',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    changeColor: 'text-green-600',
    isPositive: true,
    data: [330, 332, 331, 333, 335, 334, 336, 338, 340, 342],
    labels: ['09:30', '09:35', '09:40', '09:45', '09:50', '09:55', '10:00', '10:05', '10:10', '10:15']
  },
  {
    name: '苹果公司',
    code: 'AAPL.NASDAQ',
    price: '182.31',
    change: '$1.55',
    percent: '-0.84%',
    initial: '',
    icon: 'apple',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800',
    changeColor: 'text-red-600',
    isPositive: false,
    data: [185, 184, 183.5, 184, 183, 182.5, 182, 181.5, 181, 180.5],
    labels: ['09:30', '09:35', '09:40', '09:45', '09:50', '09:55', '10:00', '10:05', '10:10', '10:15']
  },
  {
    name: '微软公司',
    code: 'MSFT.NASDAQ',
    price: '492500',
    change: '$23.80',
    percent: '+1.35%',
    initial: '茅',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
    changeColor: 'text-green-600',
    isPositive: true,
    data: [492000, 492100, 492050, 492200, 492300, 492250, 492400, 492450, 492550, 492500],
    labels: ['09:30', '09:35', '09:40', '09:45', '09:50', '09:55', '10:00', '10:05', '10:10', '10:15']
  }
])


// 热门债券数据
const bondData = ref([
  {name: '美国5年期国债', yield: '4.75%', price: '100.32', change: '+0.18%', changeClass: 'text-green-600'},
  {name: '美国10年期国债', yield: '4.18%', price: '93.74', change: '-0.44%', changeClass: 'text-red-600'},
  {name: '德国10年期国债', yield: '2.46%', price: '96.85', change: '+0.22%', changeClass: 'text-green-600'},
  {name: '日本10年期国债', yield: '0.65%', price: '99.43', change: '-0.11%', changeClass: 'text-red-600'},
  {name: '苹果公司债', yield: '3.45%', price: '101.25', change: '+0.32%', changeClass: 'text-green-600'}
])


// 行业表现数据
const sectorPerformance = ref([
  {name: '所有行业', change: '+1.24%', changeClass: 'text-green-600'},
  {name: '科技', change: '+2.31%', changeClass: 'text-green-600'},
  {name: '金融', change: '+1.76%', changeClass: 'text-green-600'},
  {name: '医疗健康', change: '+1.53%', changeClass: 'text-green-600'},
  {name: '消费品', change: '+0.92%', changeClass: 'text-green-600'},
  {name: '能源', change: '-0.65%', changeClass: 'text-red-600'},
  {name: '工业', change: '+0.87%', changeClass: 'text-green-600'}
])

// 热门ETF数据
const etfData = ref([
  {name: '道琼斯500ETF', code: 'QQQ.DAJ', price: '$1314.27', change: '+1.43%', changeClass: 'text-green-600'},
  {name: 'SPDR标普500ETF', code: 'SPY.NYSE', price: '$451.89', change: '+1.62%', changeClass: 'text-green-600'},
  {name: '纳斯达克100ETF', code: 'QQQ.NASDAQ', price: '$451.24', change: '+0.87%', changeClass: 'text-green-600'},
  {name: '数字货币ETF', code: 'IBIT. Ishare', price: '$392.16', change: '+1.25%', changeClass: 'text-green-600'}
])

// 热门基金数据
const fundData = ref([
  {name: '黑石全球精选基金', code: '005827', price: '$1.4563', change: '+1.28%', changeClass: 'text-green-600'},
  {name: '富国科技创新基金', code: '008345', price: '$1.9287', change: '+2.16%', changeClass: 'text-green-600'},
  {name: '富兰克林技术基金', code: '160505', price: '$2.5641', change: '+1.45%', changeClass: 'text-green-600'},
  {name: '安联500ETF联接', code: '002903', price: '$1.8421', change: '+1.57%', changeClass: 'text-green-600'}
])

// 图表引用数组
const chartRefs = ref([])

// 是否已订阅全球市场数据的标志
const isSubscribed = ref(false)

// 处理WebSocket消息的回调函数
const handleWebSocketMessage = (data) => {
  try {
    const messageData = typeof data === 'string' ? JSON.parse(data) : data;
    // 检查是否为全球市场行情数据
    if (messageData.type === 'global_indices' && Array.isArray(messageData.stockQuotes)) {
      console.log('stockQuotes消息:', Array.isArray(messageData.stockQuotes))
      // 转换数据格式为前端需要的结构
      const formattedData = messageData.stockQuotes.map(quote => {
        // 处理价格、涨跌幅等数据
        const currentPrice = quote.currentPrice ? quote.currentPrice.toString() : '0';
        const priceChange = quote.priceChange ? quote.priceChange.toString() : '0';
        const priceChangePercent = quote.priceChangePercent ? quote.priceChangePercent.toString() : '0%';
        
        // 确定涨跌颜色类
        const isPositive = priceChange.startsWith('+') || parseFloat(priceChange) > 0;
        const changeClass = isPositive ? 'text-green-600' : 'text-red-600';
        
        // 格式化涨跌幅百分比显示
        const percent = priceChangePercent.includes('%') ? priceChangePercent : `${priceChangePercent}%`;

        return {
          stockName:  quote.stockName || '未知产品',
          stockCode: quote.stockCode,
          currentPrice: currentPrice,
          priceChange: priceChange,
          priceChangePercent: percent,
          changeClass: changeClass,
          bgClass: changeClass
        };
      });

      // 更新全球市场数据
      globalMarkets.value = formattedData;
      marketsLoading.value = false;

      console.log('成功更新全球市场数据:', formattedData.length, '条');
    }
  } catch (error) {
    console.error('处理WebSocket消息失败:', error);
  }
};



// 初始化WebSocket连接
const initWebSocket = () => {
  try {
    // 从localStorage获取用户信息和token
    const userId = localStorage.getItem('userId') || '';
    const accessToken = localStorage.getItem('access_token') || '';
    
    if (!userId || !accessToken) {
      console.warn('缺少用户ID或访问令牌，无法建立WebSocket连接');
      return;
    }
    
    // 设置认证信息
    tradeWebSocket.setAuthInfo(accessToken, userId);
    
    // 注册消息回调
    tradeWebSocket.onMessage(handleWebSocketMessage);
    
    // 检查WebSocket是否已经连接
    if (!tradeWebSocket.isConnected) {
      // 注册连接成功回调
      tradeWebSocket.onOpen(() => {
        console.log('WebSocket连接成功');
        // 订阅全球市场行情
        subscribeGlobalIndices(userId);
      });
      
      // 注册连接错误回调
      tradeWebSocket.onError((error) => {
        console.error('WebSocket连接错误:', error);
      });
      
      // 连接WebSocket
      tradeWebSocket.connect();
    } else {
      // WebSocket已经连接，直接订阅
      console.log('WebSocket已连接，直接订阅数据');
      subscribeGlobalIndices(userId);
    }
    
  } catch (error) {
    console.error('初始化WebSocket失败:', error);
  }
};


const queryGlobalStocks  =[
  {
    "productCode": "indices",
    "marketCode": "SH",
    "stockCode": "000001"
  },
  {
    "productCode": "indices",
    "marketCode": "SZ",
    "stockCode": "399001"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "IBOV"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "DJI"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "HSI"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "N225"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "INX"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "COMP"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "DAX"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "UKX"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "PX1"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "SENSEX"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "ME00000000"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "IBXX"
  },
  {
    "productCode": "indices",
    "marketCode": "US",
    "stockCode": "IBRA"
  }
]

// 订阅全球市场行情数据
const subscribeGlobalIndices = (userId) => {
  console.log('开始订阅全球市场行情数据');
  if (!isSubscribed.value) {
    try {
      // 发送订阅全球市场行情的请求
      const params = {
        userId: userId,
        action: 'subscribe',
        dataType: 'global_indices',
        params: queryGlobalStocks
      };
      tradeWebSocket.send(params);
      isSubscribed.value = true;
      console.log('已订阅全球市场行情数据');
    } catch (error) {
      console.error('订阅全球市场行情失败:', error);
    }
  }
};

// 备用数据获取方法，当WebSocket连接失败时使用
const fallbackDataFetch = () => {
  console.log('请求后端获取市场数据');
  try {
    // mock数据
    globalMarkets.value = getGlobalMarketsData();
    marketsLoading.value = false;
  } catch (error) {
    console.error('备用数据获取失败:', error);
    marketsLoading.value = false;
  }
};


// 获取全球市场数据（静态数据，mock数据）
function getGlobalMarketsData() {
  return [
    {
      stockName: '道琼斯工业平均指数',
      stockCode: '^DJI',
      currentPrice: '36,247.87',
      priceChange: '+184.74',
      priceChangePercent: '+0.51%',
      changeClass: 'text-green-600',
      bgClass: 'text-green-600'
    },
    {
      stockName: '标普500指数',
      stockCode: '^GSPC',
      currentPrice: '4,719.55',
      priceChange: '+21.37',
      priceChangePercent: '+0.46%',
      changeClass: 'text-green-600',
      bgClass: 'text-green-600'
    },
    {
      stockName: '纳斯达克综合指数',
      stockCode: '^IXIC',
      currentPrice: '14,813.92',
      priceChange: '+118.08',
      priceChangePercent: '+0.80%',
      changeClass: 'text-green-600',
      bgClass: 'text-green-600'
    },
    {
      stockName: '日经225指数',
      stockCode: '^N225',
      currentPrice: '32,568.71',
      priceChange: '-318.47',
      priceChangePercent: '-0.97%',
      changeClass: 'text-red-600',
      bgClass: 'text-red-600'
    },
    {
      stockName: '恒生指数',
      stockCode: '^HSI',
      currentPrice: '19,517.04',
      priceChange: '+45.89',
      priceChangePercent: '+0.24%',
      changeClass: 'text-green-600',
      bgClass: 'text-green-600'
    },
    {
      stockName: 'BITCOIN',
      stockCode: 'BTC-USD',
      currentPrice: '42,356.72',
      priceChange: '-1,234.56',
      priceChangePercent: '-2.83%',
      changeClass: 'text-red-600',
      bgClass: 'text-red-600'
    },
    {
      stockName: 'ETHER',
      stockCode: 'ETH-USD',
      currentPrice: '2,145.89',
      priceChange: '+56.78',
      priceChangePercent: '+2.71%',
      changeClass: 'text-green-600',
      bgClass: 'text-green-600'
    },
    {
      stockName: 'SOLANA',
      stockCode: 'SOL-USD',
      currentPrice: '107.32',
      priceChange: '+2.45',
      priceChangePercent: '+2.33%',
      changeClass: 'text-green-600',
      bgClass: 'text-green-600'
    }
  ]
}

// 创建图表的函数
const createChart = (canvasRef, data, isPositive = true, labels = null) => {
  if (!canvasRef) return

  // 修复：处理可能的undefined数据
  if (!data || typeof data !== 'object') {
    console.warn('无效的图表数据:', data);
    return;
  }

  const ctx = canvasRef.getContext('2d')

  // 销毁已存在的图表实例（如果有的话）
  if (canvasRef.chart) {
    canvasRef.chart.destroy()
  }

  // 如果没有提供标签，则生成默认标签或使用数组长度生成
  const chartData = Array.isArray(data) ? data : [];
  const chartLabels = labels || (Array.isArray(labels) ? labels : 
    Array.from({length: chartData.length}, (_, i) => `09:${30 + i}`));
  
  // 创建新的图表实例
  canvasRef.chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [{
        data: chartData,  // 使用chartData替代直接使用data
        borderColor: isPositive ? '#10B981' : '#EF4444',
        backgroundColor: isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleFont: {
            size: 12
          },
          bodyFont: {
            size: 12
          },
          callbacks: {
            title: (tooltipItems) => {
              return `时间: ${tooltipItems[0].label}`
            },
            label: (context) => {
              return `价格: $${context.parsed.y.toLocaleString()}`
            }
          }
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  })
}

// 在组件挂载时初始化
onMounted(() => {
  // 为每个股票创建图表
  stockData.forEach((stock, index) => {
    // 修复：处理不同的数据结构
    const chartData = stock.data || stock.chartData || [];
    const chartLabels = stock.labels || stock.timeData || null;
    const isPositive = stock.isPositive !== undefined ? stock.isPositive : true;
    
    createChart(chartRefs.value[index], chartData, isPositive, chartLabels);
  });
  
  // 设置账号名
  userName.value = localStorage.getItem('userName') || '用户'

  //初始化全球行情数据，请求后端
  fallbackDataFetch();
  // 初始化WebSocket连接，订阅股票行情数据
  initWebSocket();
});

// 在组件卸载时取消订阅
onUnmounted(() => {
  try {
    // 仅在已订阅的情况下取消订阅
    if (isSubscribed.value && tradeWebSocket.isConnected) {
      // 发送取消订阅消息
      const unsubscribeMessage = {
        action: 'unsubscribe',
        dataType: 'global_indices'
      };
      tradeWebSocket.send(JSON.stringify(unsubscribeMessage));
      isSubscribed.value = false;
      console.log('已取消订阅全球市场行情数据');
    }
    // 不再关闭WebSocket连接，因为登录时已经建立并可能被其他组件使用
    // 仅移除当前组件的消息处理器
    tradeWebSocket.removeMessageHandler(handleWebSocketMessage);
  } catch (error) {
    console.error('取消订阅或清理WebSocket处理器失败:', error);
  }
});

// 跳转到全球市场页面
const goToGlobalMarkets = () => {
  router.push({
    path: '/client/investmentProductList'
  })
}

// 跳转到投资产品详情页
const goToInvestmentProduct = (code) => {
  console.log('跳转到投资产品详情页')
  router.push({
    path: '/client/investmentProduct',
    query: {
      code: code
    }
  })
}

// 跳转到交易中心
const goToTrade = () => {
  console.log('跳转到交易中心')
  router.push({
    path: '/client/transaction'
  })
}
</script>


<style scoped>


.main {
  font-family: 'Inter', sans-serif !important;
}
</style>
