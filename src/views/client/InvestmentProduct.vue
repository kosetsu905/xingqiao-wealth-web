<template>

  <!-- Header -->
  <Header/>

  <div class="main bg-white text-black font-sans">
    <!-- 头部 -->
    <div class="ml-0 md:ml-16 p-4 md:p-6 bg-white border-b border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 class="text-xl md:text-2xl font-semibold flex items-center">
            全球投资产品详情
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
            <i class="absolute left-3 top-3 text-gray-500" data-fa-i2svg=""><svg class="svg-inline--fa fa-magnifying-glass w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas"
                                                                                 data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                                                 data-fa-i2svg=""><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></i>
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
    <div id="main-content" class="ml-0 md:ml-16 px-4 md:px-6 pb-6 bg-white text-black flex flex-col">
      <!-- 产品基本信息 -->
      <div id="product-header" class="py-4 md:py-6 border-b border-gray-200">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div class="flex items-center">
            <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
              <span class="text-lg md:text-xl font-bold text-blue-800">{{ productInfo.initial }}</span>
            </div>
            <div>
              <h2 class="text-xl md:text-2xl font-bold">{{ productInfo.name }}</h2>
              <div class="flex flex-wrap items-center mt-1 gap-2">
                <span class="text-gray-600 text-sm mr-2">{{ productInfo.code }}</span>
                <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs mr-2">{{ productInfo.market }}</span>
                <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{{ productInfo.industry }}</span>
                <button class="ml-2 text-gray-500 hover:text-blue-500">
                  <i data-fa-i2svg=""><svg class="svg-inline--fa fa-star w-4 h-4" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"></path></svg></i>
                </button>
                <button class="text-gray-500 hover:text-blue-500">
                  <i data-fa-i2svg=""><svg class="svg-inline--fa fa-share-nodes w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-nodes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"></path></svg></i>
                </button>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-2xl md:text-3xl font-bold">¥{{ currentPrice }}</div>
            <div class="flex flex-wrap items-center justify-end mt-1 gap-2">
              <span :class="priceChangeClass">{{ priceChangeText }}</span>
              <span :class="percentChangeClass">{{ percentChangeText }}</span>
              <span class="text-gray-500 text-xs md:text-sm ml-2 md:ml-4">更新于 {{ updateTime }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 价格图表和交易区域 -->
      <div id="chart-trading-section" class="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
        <!-- 价格图表区域 -->
        <div id="price-chart-area" class="lg:col-span-3 bg-gray-50 rounded-lg p-4 md:p-6">
          <!-- 图表控制器 -->
          <div class="flex flex-wrap justify-between items-center gap-2 mb-4 md:mb-6">
            <div class="flex flex-wrap gap-1 md:gap-2">
              <button
                  v-for="period in chartPeriods"
                  :key="period.label"
                  :class="[
                  'px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm',
                  period.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                ]"
                  @click="changeChartPeriod(period)"
              >
                {{ period.label }}
              </button>
            </div>
            <div class="flex gap-1 md:gap-2">
              <button class="p-1.5 md:p-2 bg-gray-200 hover:bg-gray-300 rounded text-sm">
                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-chart-line w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></i>
              </button>
              <button class="p-1.5 md:p-2 bg-gray-200 hover:bg-gray-300 rounded text-sm">
                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-chart-bar w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-bar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></i>
              </button>
              <button class="p-1.5 md:p-2 bg-gray-200 hover:bg-gray-300 rounded text-sm">
                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-chart-candlestick w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-candlestick" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g class="missing"><path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path><circle fill="currentColor" cx="256" cy="364" r="28"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate></circle><path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate></path><path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate></path></g></svg></i>
              </button>
            </div>
          </div>

          <!-- 主要价格图表 -->
          <div id="main-price-chart" class="h-[300px] md:h-[400px]" ref="priceChartContainer"></div>

          <!-- 交易量图表 -->
          <div id="volume-chart" class="h-[80px] md:h-[100px] mt-4" ref="volumeChartContainer"></div>
        </div>

        <!-- 交易区域 -->
        <div id="trading-area" class="lg:col-span-1">
          <div class="bg-gray-50 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">快速交易</h3>
            <div class="mb-3 md:mb-4">
              <label class="block text-gray-700 text-sm mb-1 md:mb-2">交易类型</label>
              <div class="flex gap-2">
                <button
                    :class="[
                    'w-1/2 rounded py-1.5 md:py-2 text-center text-sm md:text-base',
                    tradeType === 'buy'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  ]"
                    @click="tradeType = 'buy'"
                >
                  买入
                </button>
                <button
                    :class="[
                    'w-1/2 rounded py-1.5 md:py-2 text-center text-sm md:text-base',
                    tradeType === 'sell'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  ]"
                    @click="tradeType = 'sell'"
                >
                  卖出
                </button>
              </div>
            </div>
            <div class="mb-3 md:mb-4">
              <label class="block text-gray-700 text-sm mb-1 md:mb-2">价格 ({{ productInfo.currency }})</label>
              <div class="relative">
                <input
                    type="text"
                    :value="currentPrice"
                    class="w-full bg-white border border-gray-300 rounded px-3 py-1.5 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                <div class="absolute right-0 top-0 h-full flex items-center pr-3">
                  <span class="text-gray-500 text-sm">¥</span>
                </div>
              </div>
            </div>
            <div class="mb-3 md:mb-4">
              <label class="block text-gray-700 text-sm mb-1 md:mb-2">数量 (股)</label>
              <input
                  type="number"
                  v-model="tradeQuantity"
                  class="w-full bg-white border border-gray-300 rounded px-3 py-1.5 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
            </div>
            <div class="mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-1 md:mb-2">预估总额</label>
              <div class="bg-white border border-gray-300 rounded px-3 py-1.5 md:py-2 text-base md:text-lg font-semibold">
                ¥{{ (currentPrice * tradeQuantity).toFixed(2) }}
              </div>
            </div>
            <button
                :class="[
                'w-full rounded-lg py-2 md:py-3 font-medium text-sm md:text-base',
                tradeType === 'buy'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              ]"
            >
              {{ tradeType === 'buy' ? '确认买入' : '确认卖出' }}
            </button>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">账户信息</h3>
            <div class="space-y-2 md:space-y-3">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">可用资金</span>
                <span class="">¥{{ accountInfo.availableFunds }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">持仓市值</span>
                <span class="">¥{{ accountInfo.positionValue }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">总资产</span>
                <span class="">¥{{ accountInfo.totalAssets }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 产品详细信息标签页 -->
      <div id="product-details-tabs" class="mt-6 md:mt-8">
        <div class="flex border-b border-gray-200">
          <button
              v-for="(tab, index) in detailTabs"
              :key="index"
              :class="[
              'px-4 py-2 md:px-6 md:py-3 font-medium text-sm md:text-base',
              tab.active
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-black'
            ]"
              @click="switchTab(index)"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- 基本信息内容 -->
      <div id="basic-info-content" class="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <!-- 左侧信息 -->
        <div class="lg:col-span-2 space-y-4 md:space-y-6">
          <!-- 公司概览 -->
          <div id="company-overview" class="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">公司概览</h3>
            <p class="text-gray-700 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
              {{ companyOverview.description }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
              <div v-for="(info, index) in companyOverview.details" :key="index">
                <h4 class="text-gray-600 text-xs md:text-sm mb-1">{{ info.label }}</h4>
                <p class="text-sm md:text-base" v-if="info.type !== 'link'">{{ info.value }}</p>
                <span
                    v-else
                    class="text-blue-600 hover:underline cursor-pointer text-sm md:text-base"
                    @click="openLink(info.value)"
                >
                  {{ info.value }}
                </span>
              </div>
            </div>
          </div>

          <!-- 主要财务指标 -->
          <div id="financial-indicators" class="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">主要财务指标</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div v-for="(indicator, index) in financialIndicators" :key="index">
                <h4 class="text-gray-600 text-xs md:text-sm mb-1">{{ indicator.label }}</h4>
                <p
                    :class="[
                    'font-semibold text-sm md:text-base',
                    indicator.change ? (indicator.change > 0 ? 'text-green-600' : 'text-red-600') : ''
                  ]"
                >
                  {{ indicator.value }}
                  <span v-if="indicator.change" :class="indicator.change > 0 ? 'text-green-600' : 'text-red-600'">
                    ({{ indicator.change > 0 ? '+' : '' }}{{ indicator.change }}%)
                  </span>
                </p>
              </div>
            </div>
          </div>

          <!-- 股价历史表现 -->
          <div id="price-history" class="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">股价历史表现</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
              <div v-for="(performance, index) in pricePerformance" :key="index">
                <h4 class="text-gray-600 text-xs md:text-sm mb-1">{{ performance.label }}</h4>
                <p
                    :class="[
                    'font-semibold text-sm md:text-base',
                    performance.change ? (performance.change > 0 ? 'text-green-600' : 'text-red-600') : ''
                  ]"
                >
                  {{ performance.value }}
                  <span v-if="performance.change" :class="performance.change > 0 ? 'text-green-600' : 'text-red-600'">
                    ({{ performance.change > 0 ? '+' : '' }}{{ performance.change }}%)
                  </span>
                </p>
              </div>
            </div>
            <div id="year-performance-chart" class="h-[150px] md:h-[200px]" ref="performanceChartContainer"></div>
          </div>
        </div>

        <!-- 右侧信息 -->
        <div class="lg:col-span-1 space-y-4 md:space-y-6">
          <!-- 交易数据 -->
          <div id="trading-data" class="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">今日交易数据</h3>
            <div class="space-y-2 md:space-y-3">
              <div class="flex justify-between text-sm" v-for="(data, index) in tradingData" :key="index">
                <span class="text-gray-600">{{ data.label }}</span>
                <span :class="data.change ? (data.change > 0 ? 'text-green-600' : 'text-red-600') : ''">
                  {{ data.value }}
                  <span v-if="data.change" :class="data.change > 0 ? 'text-green-600' : 'text-red-600'">
                    ({{ data.change > 0 ? '+' : '' }}{{ data.change }}%)
                  </span>
                </span>
              </div>
            </div>
          </div>

          <!-- 主要股东 -->
          <div id="major-shareholders" class="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">主要股东</h3>
            <div class="space-y-3 md:space-y-4">
              <div v-for="(shareholder, index) in majorShareholders" :key="index">
                <div class="flex justify-between mb-1">
                  <span class="text-sm md:text-base">{{ shareholder.name }}</span>
                  <span class="text-sm md:text-base">{{ shareholder.percentage }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                      class="bg-blue-600 h-2 rounded-full"
                      :style="{ width: shareholder.percentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 分析师评级 -->
          <div id="analyst-ratings" class="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">分析师评级</h3>
            <div class="flex items-center mb-3 md:mb-4">
              <div class="text-xl md:text-2xl font-bold text-green-600 mr-3 md:mr-4">{{ analystRatings.rating }}</div>
              <div>
                <div class="flex items-center">
                  <i
                      v-for="n in 5"
                      :key="n"
                      :class="[
                      'text-yellow-500',
                      n <= analystRatings.stars ? 'fas' : 'far'
                    ]"
                      data-fa-i2svg=""
                  >
                    <svg
                        v-if="n <= analystRatings.stars"
                        class="svg-inline--fa fa-star w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                    >
                      <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                    </svg>
                    <svg
                        v-else
                        class="svg-inline--fa fa-star w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                    >
                      <path fill="currentColor" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"></path>
                    </svg>
                  </i>
                  <span class="ml-1 md:ml-2 text-sm md:text-base">{{ analystRatings.score }}/5</span>
                </div>
                <div class="text-xs md:text-sm text-gray-600 mt-1">基于{{ analystRatings.analystCount }}位分析师评级</div>
              </div>
            </div>
            <div class="space-y-2">
              <div v-for="(rating, index) in analystRatings.details" :key="index">
                <div class="flex justify-between mb-1">
                  <span class="text-xs md:text-sm">{{ rating.label }}</span>
                  <span class="text-xs md:text-sm">{{ rating.count }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                      class="h-2 rounded-full"
                      :class="getRatingBarColor(rating.label)"
                      :style="{ width: (rating.count / analystRatings.analystCount * 100) + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            <div class="mt-3 md:mt-4 text-sm">
              <span class="text-gray-600">目标价：</span>
              <span class="font-semibold">¥{{ analystRatings.targetPrice }}</span>
              <span
                  :class="[
                  'ml-2',
                  analystRatings.upside > 0 ? 'text-green-600' : 'text-red-600'
                ]"
              >
                {{ analystRatings.upside > 0 ? '+' : '' }}{{ analystRatings.upside }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { useCurrentDate } from '@/composables/composable.js'
import * as Highcharts from 'highcharts'
import Header from "@/components/client/Header.vue";
const { currentDate } = useCurrentDate()

// 产品基本信息
const productInfo = ref({
  initial: '腾',
  name: '腾讯控股',
  code: '0700.HK',
  market: '港股',
  industry: '科技行业',
  currency: 'HKD'
})

// 价格信息
const currentPrice = ref(342.60)
const priceChange = ref(6.80)
const percentChange = ref(2.03)
const updateTime = ref('15:30:24')

// 计算价格变化显示文本和样式
const priceChangeText = computed(() => {
  return (priceChange.value > 0 ? '+' : '') + '¥' + Math.abs(priceChange.value).toFixed(2)
})

const percentChangeText = computed(() => {
  return (percentChange.value > 0 ? '+' : '') + Math.abs(percentChange.value).toFixed(2) + '%'
})

const priceChangeClass = computed(() => {
  return priceChange.value >= 0 ? 'text-green-600 text-base md:text-lg' : 'text-red-600 text-base md:text-lg'
})

const percentChangeClass = computed(() => {
  return percentChange.value >= 0 ? 'text-green-600 text-base md:text-lg' : 'text-red-600 text-base md:text-lg'
})

// 图表周期
const chartPeriods = ref([
  { label: '1日', active: true },
  { label: '5日', active: false },
  { label: '1月', active: false },
  { label: '3月', active: false },
  { label: '6月', active: false },
  { label: '1年', active: false },
  { label: '5年', active: false },
  { label: '全部', active: false }
])

const changeChartPeriod = (period) => {
  chartPeriods.value.forEach(p => p.active = false)
  period.active = true
}

// 交易信息
const tradeType = ref('buy')
const tradeQuantity = ref(100)

// 账户信息
const accountInfo = ref({
  availableFunds: '156,432.88',
  positionValue: '243,567.12',
  totalAssets: '400,000.00'
})

// 详情标签页
const detailTabs = ref([
  { label: '基本信息', active: true },
  { label: '财务数据', active: false },
  { label: '公司公告', active: false },
  { label: '研究报告', active: false },
  { label: '行业对比', active: false },
  { label: '市场评论', active: false }
])

const switchTab = (index) => {
  detailTabs.value.forEach((tab, i) => {
    tab.active = i === index
  })
}

// 公司概览
const companyOverview = ref({
  description: '腾讯控股有限公司是中国领先的互联网增值服务提供商，主要在中国经营三项核心业务：增值服务、网络广告、金融科技及企业服务。成立于1998年，总部位于中国深圳。腾讯的使命是"通过互联网服务提升人类生活品质"。腾讯的社交平台微信和QQ连接超过10亿中国用户，并通过投资建立了一个开放生态系统，将最佳伙伴带入中国市场。腾讯于2004年在香港联交所主板上市（股票代号：00700）。',
  details: [
    { label: '行业', value: '互联网服务' },
    { label: '成立时间', value: '1998年11月' },
    { label: '上市时间', value: '2004年6月16日' },
    { label: '员工数量', value: '约112,771人' },
    { label: '总部', value: '中国深圳' },
    { label: '官方网站', value: 'www.tencent.com', type: 'link' }
  ]
})

const openLink = (url) => {
  window.open('https://' + url, '_blank')
}

// 财务指标
const financialIndicators = ref([
  { label: '市值', value: '3.28万亿港元' },
  { label: '市盈率(TTM)', value: '17.82' },
  { label: '市净率', value: '3.45' },
  { label: '股息率', value: '0.48%' },
  { label: '每股收益', value: '19.23港元' },
  { label: '每股净资产', value: '99.35港元' },
  { label: '总营收(TTM)', value: '5,685.54亿元' },
  { label: '净利润(TTM)', value: '1,843.21亿元' }
])

// 股价历史表现
const pricePerformance = ref([
  { label: '52周最高价', value: '412.60港元' },
  { label: '52周最低价', value: '284.20港元' },
  { label: '今年以来涨跌幅', value: '-8.42%', change: -8.42 },
  { label: '近一个月涨跌幅', value: '+5.26%', change: 5.26 }
])

// 交易数据
const tradingData = ref([
  { label: '开盘价', value: '¥337.80' },
  { label: '最高价', value: '¥344.20' },
  { label: '最低价', value: '¥336.40' },
  { label: '收盘价', value: '¥342.60' },
  { label: '成交量', value: '1,243.5万股' },
  { label: '成交额', value: '42.38亿港元' },
  { label: '振幅', value: '2.31%' }
])

// 主要股东
const majorShareholders = ref([
  { name: '马化腾', percentage: 8.6 },
  { name: 'MIH TC Holdings Limited', percentage: 30.9 },
  { name: '其他机构投资者', percentage: 42.5 },
  { name: '散户投资者', percentage: 18.0 }
])

// 分析师评级
const analystRatings = ref({
  rating: '买入',
  score: 4.5,
  stars: 4.5,
  analystCount: 32,
  targetPrice: 396.50,
  upside: 15.7,
  details: [
    { label: '强烈买入', count: 18 },
    { label: '买入', count: 10 },
    { label: '持有', count: 4 },
    { label: '卖出', count: 0 },
    { label: '强烈卖出', count: 0 }
  ]
})

// 获取评级条颜色
const getRatingBarColor = (label) => {
  switch (label) {
    case '强烈买入':
      return 'bg-green-600'
    case '买入':
      return 'bg-green-500'
    case '持有':
      return 'bg-yellow-500'
    case '卖出':
      return 'bg-red-500'
    case '强烈卖出':
      return 'bg-red-600'
    default:
      return 'bg-gray-400'
  }
}

// 图表容器引用
const priceChartContainer = ref(null)
const volumeChartContainer = ref(null)
const performanceChartContainer = ref(null)

// 初始化图表
const initCharts = () => {
  // 价格图表
  if (priceChartContainer.value) {
    const priceChart = new Highcharts.Chart({
      chart: {
        renderTo: priceChartContainer.value,
        type: 'line',
        height: 300
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['9:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [{
        name: '价格',
        data: [337, 338, 339, 340, 341, 342, 341, 343, 342, 343, 342.6],
        color: '#10b981'
      }],
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    })
  }

  // 交易量图表
  if (volumeChartContainer.value) {
    const volumeChart = new Highcharts.Chart({
      chart: {
        renderTo: volumeChartContainer.value,
        type: 'column',
        height: 100
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['9:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [{
        name: '交易量',
        data: [20, 35, 42, 38, 25, 45, 50, 60, 55, 48, 42],
        color: '#3b82f6'
      }],
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    })
  }

  // 年度表现图表
  if (performanceChartContainer.value) {
    const performanceChart = new Highcharts.Chart({
      chart: {
        renderTo: performanceChartContainer.value,
        type: 'area',
        height: 200
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [{
        name: '股价',
        data: [320, 330, 340, 335, 345, 350, 348, 342.6],
        color: '#10B981',
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, 'rgba(16, 185, 129, 0.2)'],
            [1, 'rgba(16, 185, 129, 0)']
          ]
        }
      }],
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    })
  }
}

onMounted(() => {
  initCharts()
})
</script>

<style scoped>
.main {
  font-family: 'Inter', sans-serif !important;
}
</style>
