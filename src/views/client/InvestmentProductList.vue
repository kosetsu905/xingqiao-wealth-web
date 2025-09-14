<template>
  <!-- Header -->
  <Header/>

  <div class="main bg-white text-black font-sans">
    <div class="ml-0 md:ml-16 p-4 md:p-6 bg-white border-b border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="flex items-center">
          <button class="mr-4 p-2 rounded-lg hover:bg-gray-100">
            <i class="text-gray-600" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-arrow-left w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
              </svg>
            </i>
          </button>
          <div>
            <h1 class="text-xl md:text-2xl font-semibold flex items-center">
              全球投资产品列表
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
      <!-- 筛选器 -->
      <div id="filters" class="py-4 mb-4 md:mb-6 flex flex-wrap items-center gap-2 md:gap-4">
        <div class="flex items-center">
          <span class="text-gray-700 mr-2 text-sm">产品类型:</span>
          <select class="bg-white border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
            <option>全部</option>
            <option>股票</option>
            <option>债券</option>
            <option>ETF</option>
            <option>基金</option>
          </select>
        </div>
        <div class="flex items-center">
          <span class="text-gray-700 mr-2 text-sm">地区:</span>
          <select class="bg-white border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
            <option>全球</option>
            <option>中国</option>
            <option>美国</option>
            <option>欧洲</option>
            <option>亚太</option>
          </select>
        </div>
        <div class="flex items-center">
          <span class="text-gray-700 mr-2 text-sm">行业:</span>
          <select class="bg-white border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
            <option>全部</option>
            <option>科技</option>
            <option>金融</option>
            <option>医疗</option>
            <option>消费</option>
            <option>能源</option>
          </select>
        </div>
        <div class="flex items-center">
          <span class="text-gray-700 mr-2 text-sm">排序:</span>
          <select class="bg-white border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
            <option>默认</option>
            <option>涨幅最高</option>
            <option>跌幅最高</option>
            <option>价格从高到低</option>
            <option>价格从低到高</option>
          </select>
        </div>
        <div class="ml-auto flex items-center gap-1 md:gap-2">
          <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-2 py-1 md:px-3 md:py-2 flex items-center text-sm">
            <i class="mr-1 md:mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-filter w-3 h-3 md:w-4 md:h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"></path></svg></i>
            <span class="hidden md:inline">高级筛选</span>
          </button>
          <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-2 py-1 md:px-3 md:py-2">
            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-table-cells w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table-cells" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z"></path></svg></i>
          </button>
          <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-2 py-1 md:px-3 md:py-2">
            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-list w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"></path></svg></i>
          </button>
        </div>
      </div>

      <!-- 标签页导航 -->
      <div id="tabs" class="mb-4 md:mb-6 border-b border-gray-200">
        <div class="flex">
          <button class="py-2 px-3 md:py-3 md:px-6 text-blue-600 border-b-2 border-blue-600 font-medium text-sm md:text-base">
            全部产品
          </button>
          <button class="py-2 px-3 md:py-3 md:px-6 text-gray-600 hover:text-black text-sm md:text-base">
            股票
          </button>
          <button class="py-2 px-3 md:py-3 md:px-6 text-gray-600 hover:text-black text-sm md:text-base">
            债券
          </button>
          <button class="py-2 px-3 md:py-3 md:px-6 text-gray-600 hover:text-black text-sm md:text-base">
            ETF
          </button>
          <button class="py-2 px-3 md:py-3 md:px-6 text-gray-600 hover:text-black text-sm md:text-base">
            基金
          </button>
          <button class="py-2 px-3 md:py-3 md:px-6 text-gray-600 hover:text-black text-sm md:text-base">
            自选列表
          </button>
        </div>
      </div>

      <!-- 产品列表 -->
      <div id="product-list" class="overflow-x-auto">
        <!-- 表头 -->
        <div class="bg-gray-50 rounded-t-lg px-4 py-3 grid grid-cols-12 text-xs md:text-sm font-medium text-gray-700 min-w-[900px]">
          <div class="col-span-1 flex items-center">
            <input type="checkbox" class="mr-2">
            #
          </div>
          <div class="col-span-3">产品名称</div>
          <div class="col-span-1 text-right">最新价</div>
          <div class="col-span-1 text-right">涨跌额</div>
          <div class="col-span-1 text-right">涨跌幅</div>
          <div class="col-span-1 text-right">开盘价</div>
          <div class="col-span-1 text-right">最高价</div>
          <div class="col-span-1 text-right">最低价</div>
          <div class="col-span-1 text-right">成交量</div>
          <div class="col-span-1 text-right">操作</div>
        </div>

        <!-- 股票列表 -->
        <div id="stocks-list" class="bg-white rounded-b-lg divide-y divide-gray-200 border border-gray-200 min-w-[900px]">
          <!-- 动态渲染产品列表 -->
          <div v-for="(product, index) in products" :key="product.id" class="px-4 py-3 grid grid-cols-12 items-center hover:bg-gray-50">
            <div class="col-span-1 flex items-center">
              <input type="checkbox" class="mr-2">
              <span class="text-gray-500 text-sm">{{ index + 1 }}</span>
            </div>
            <div class="col-span-3 flex items-center">
              <div class="w-8 h-8 rounded-full flex items-center justify-center mr-2" :class="product.iconBgClass">
                <span v-if="product.iconText" class="text-xs font-bold" :class="product.iconTextClass">{{ product.iconText }}</span>
                <i v-else-if="product.iconClass" class="text-xs" :class="product.iconClass"></i>
              </div>
              <div>
                <div class="font-medium text-sm">{{ product.name }}</div>
                <div class="text-xs text-gray-500">{{ product.code }} | {{ product.type }} | {{ product.industry }}</div>
              </div>
            </div>
            <div class="col-span-1 text-right text-sm" :class="product.priceClass">{{ product.price }}</div>
            <div class="col-span-1 text-right text-sm" :class="product.changeClass">{{ product.change }}</div>
            <div class="col-span-1 text-right">
              <span class="px-2 py-0.5 rounded text-xs" :class="product.changePercentClass">{{ product.changePercent }}</span>
            </div>
            <div class="col-span-1 text-right text-sm text-gray-600">{{ product.open }}</div>
            <div class="col-span-1 text-right text-sm text-gray-600">{{ product.high }}</div>
            <div class="col-span-1 text-right text-sm text-gray-600">{{ product.low }}</div>
            <div class="col-span-1 text-right text-sm text-gray-600">{{ product.volume }}</div>
            <div class="col-span-1 text-right flex justify-end">
              <!-- 购买按钮 -->
              <span class="icon-[material-symbols--shopping-cart-outline-rounded] text-blue-800"></span>
              <!-- 卖出按钮 -->
              <span class="icon-[material-symbols--sell-sharp] text-red-500"></span>
            </div>
          </div>
        </div>

        <!-- 分页 -->
        <div id="pagination" class="mt-4 md:mt-6 flex flex-col md:flex-row justify-between items-center gap-4 pb-20">
          <div class="text-gray-600 text-sm">
            显示 1-10 项，共 248 项
          </div>
          <div class="flex items-center space-x-1 md:space-x-2">
            <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-2 py-1 md:px-3 md:py-2 text-gray-600">
              <i data-fa-i2svg=""><svg class="svg-inline--fa fa-chevron-left w-3 h-3 md:w-4 md:h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg></i>
            </button>
            <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">1</button>
            <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">2</button>
            <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">3</button>
            <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">4</button>
            <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">5</button>
            <button class="bg-gray-100 hover:bg-gray-200 rounded-lg px-2 py-1 md:px-3 md:py-2 text-gray-600">
              <i data-fa-i2svg=""><svg class="svg-inline--fa fa-chevron-right w-3 h-3 md:w-4 md:h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></i>
            </button>
          </div>
          <div class="flex items-center">
            <span class="text-gray-700 mr-2 text-sm">每页显示:</span>
            <select class="bg-white border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 批量操作栏 -->
      <div id="batch-actions" class="fixed bottom-0 left-0 md:left-16 right-0 bg-white border-t border-gray-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2">
          <span class="text-gray-600 mr-4 text-sm">全选</span>
          <span class="text-black text-sm">已选择 0 项</span>
        </div>
        <div class="flex items-center space-x-2">
          <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-3 py-2 flex items-center text-sm">
            <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-cart-shopping w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
            <span class="">批量买入</span>
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-2 flex items-center text-sm">
            <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-bookmark w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg></i>
            <span class="">添加到自选</span>
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-2 flex items-center text-sm">
            <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-download w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></i>
            <span class="">导出数据</span>
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-2 flex items-center text-sm">
            <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-chart-line w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></i>
            <span class="">对比分析</span>
          </button>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useCurrentDate } from '@/composables/composable.js'
import Header from '@/components/client/Header.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const { currentDate } = useCurrentDate()

// Mock数据
const products = ref([
  {
    id: 1,
    name: '阿里巴巴',
    code: 'BABA.NYSE',
    type: '股票',
    industry: '科技',
    price: '$92.76',
    change: '+$2.45',
    changePercent: '+2.71%',
    open: '$90.31',
    high: '$93.12',
    low: '$90.08',
    volume: '14.2M',
    iconText: '阿',
    iconBgClass: 'bg-blue-100',
    iconTextClass: 'text-blue-800',
    priceClass: 'text-black',
    changeClass: 'text-green-600',
    changePercentClass: 'bg-green-100 text-green-800'
  },
  {
    id: 2,
    name: '腾讯控股',
    code: '0700.HK',
    type: '股票',
    industry: '科技',
    price: '$342.60',
    change: '+$6.80',
    changePercent: '+2.03%',
    open: '$335.80',
    high: '$344.20',
    low: '$335.40',
    volume: '10.5M',
    iconText: '腾',
    iconBgClass: 'bg-green-100',
    iconTextClass: 'text-green-800',
    priceClass: 'text-black',
    changeClass: 'text-green-600',
    changePercentClass: 'bg-green-100 text-green-800'
  },
  {
    id: 3,
    name: '苹果公司',
    code: 'AAPL.NASDAQ',
    type: '股票',
    industry: '科技',
    price: '$182.31',
    change: '-$1.55',
    changePercent: '-0.84%',
    open: '$183.86',
    high: '$184.95',
    low: '$181.73',
    volume: '58.7M',
    iconClass: 'fab fa-apple text-red-800 text-sm',
    iconBgClass: 'bg-red-100',
    priceClass: 'text-black',
    changeClass: 'text-red-600',
    changePercentClass: 'bg-red-100 text-red-800'
  },
  {
    id: 4,
    name: '微软公司',
    code: 'MSFT.NASDAQ',
    type: '股票',
    industry: '消费品',
    price: '$1,792.00',
    change: '+¥23.80',
    changePercent: '+1.35%',
    open: '$1,768.20',
    high: '$1,798.00',
    low: '$1,765.00',
    volume: '2.4M',
    iconText: '茅',
    iconBgClass: 'bg-blue-50',
    iconTextClass: 'text-blue-800',
    priceClass: 'text-black',
    changeClass: 'text-green-600',
    changePercentClass: 'bg-green-100 text-green-800'
  },
  {
    id: 5,
    name: '道琼斯300ETF',
    code: '510330.SH',
    type: 'ETF',
    industry: '指数',
    price: '$334.27',
    change: '+¥0.06',
    changePercent: '+1.43%',
    open: '$4.21',
    high: '$4.29',
    low: '$4.20',
    volume: '89.6M',
    iconText: 'ETF',
    iconBgClass: 'bg-purple-100',
    iconTextClass: 'text-purple-800',
    priceClass: 'text-black',
    changeClass: 'text-green-600',
    changePercentClass: 'bg-green-100 text-green-800'
  },
  {
    id: 6,
    name: '纳斯达克100ETF',
    code: 'QQQ.NYSE',
    type: 'ETF',
    industry: '指数',
    price: '$451.24',
    change: '+$3.89',
    changePercent: '+0.87%',
    open: '$447.35',
    high: '$452.01',
    low: '$446.92',
    volume: '76.2M',
    iconText: 'ETF',
    iconBgClass: 'bg-purple-100',
    iconTextClass: 'text-purple-800',
    priceClass: 'text-black',
    changeClass: 'text-green-600',
    changePercentClass: 'bg-green-100 text-green-800'
  },
  {
    id: 7,
    name: '美国5年期国债',
    code: 'CNBOND10Y',
    type: '债券',
    industry: '国债',
    price: '100.32',
    change: '+0.18',
    changePercent: '+0.18%',
    open: '100.14',
    high: '100.35',
    low: '100.12',
    volume: '--',
    iconClass: 'fas fa-landmark text-yellow-800 text-xs',
    iconBgClass: 'bg-yellow-100',
    priceClass: 'text-black',
    changeClass: 'text-green-600',
    changePercentClass: 'bg-green-100 text-green-800'
  },
  {
    id: 8,
    name: '美国10年期国债',
    code: 'USBOND10Y',
    type: '债券',
    industry: '国债',
    price: '93.74',
    change: '-0.41',
    changePercent: '-0.44%',
    open: '94.15',
    high: '94.18',
    low: '93.68',
    volume: '--',
    iconClass: 'fas fa-landmark text-yellow-800 text-xs',
    iconBgClass: 'bg-yellow-100',
    priceClass: 'text-black',
    changeClass: 'text-red-600',
    changePercentClass: 'bg-red-100 text-red-800'
  },
  {
    id: 9,
    name: '黑石全球精选基金',
    code: '005827',
    type: '基金',
    industry: '股票型',
    price: '$1.4563',
    change: '+¥0.0184',
    changePercent: '+1.28%',
    open: '--',
    high: '--',
    low: '--',
    volume: '12.5M',
    iconClass: 'fas fa-sack-dollar text-indigo-800 text-xs',
    iconBgClass: 'bg-indigo-100',
    priceClass: 'text-black',
    changeClass: 'text-green-600',
    changePercentClass: 'bg-green-100 text-green-800'
  },
  {
    id: 10,
    name: '富国科技创新基金',
    code: '008345',
    type: '基金',
    industry: '股票型',
    price: '¥1.9287',
    change: '+¥0.0408',
    changePercent: '+2.16%',
    open: '--',
    high: '--',
    low: '--',
    volume: '8.7M',
    iconClass: 'fas fa-sack-dollar text-indigo-800 text-xs',
    iconBgClass: 'bg-indigo-100',
    priceClass: 'text-black',
    changeClass: 'text-green-600',
    changePercentClass: 'bg-green-100 text-green-800'
  }
])
</script>

<style scoped>
.main {
  font-family: 'Inter', sans-serif !important;
}
</style>
