
<template>
  <!-- 顶部导航栏 -->
  <Header/>
  <main class="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
    <div class="max-w-7xl mx-auto">
      <!-- 页面标题 -->
      <div class="mb-6">
        <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800">账户管理</h1>
        <p class="text-gray-600 mt-1">管理您的银行账户和支付方式</p>
      </div>
      <!-- 银行账户管理 -->
      <div class="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h3 class="font-semibold text-gray-800 text-lg">我的银行账户</h3>
          <button id="add-bank-account" class="mt-3 md:mt-0 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <i class="fa fa-plus mr-1"></i> 添加银行账户
          </button>
        </div>
        <!-- 账户类型筛选 -->
        <div class="flex flex-wrap gap-2 mb-4">
          <button class="px-3 py-1.5 bg-primary text-white rounded-lg text-sm">全部</button>
          <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">国内银行卡</button>
          <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">境外银行卡</button>
        </div>
        <!-- 银行账户列表 -->
        <div id="bank-accounts-list" class="space-y-4">
          <div class="account-card hover-lift">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div class="flex items-center mb-3 md:mb-0">
                <img src="https://picsum.photos/id/1/40/40" alt="中国工商银行" class="w-10 h-10 rounded-md object-cover mr-3">
                <div>
                  <h4 class="font-medium text-gray-800">中国工商银行</h4>
                  <div class="flex items-center">
                    <p class="text-sm text-gray-600">储蓄卡 · 尾号6789</p>
                    <span class="ml-2 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">国内</span>
                  </div>
                </div>
              </div>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <i class="fa fa-pencil mr-1"></i> 编辑
                </button>
                <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <i class="fa fa-trash-o mr-1"></i> 删除
                </button>
                <button class="px-3 py-1 text-sm border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                  <i class="fa fa-exchange mr-1"></i> 设为默认
                </button>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
              <span class="text-gray-500">持卡人: 张先生</span>
              <span class="text-gray-500">绑定时间: 2025-03-15</span>
              <span class="text-green-600 bg-green-100 px-2 py-0.5 rounded text-xs">默认账户</span>
            </div>
          </div>

          <div class="account-card hover-lift">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div class="flex items-center mb-3 md:mb-0">
                <img src="https://picsum.photos/id/2/40/40" alt="招商银行" class="w-10 h-10 rounded-md object-cover mr-3">
                <div>
                  <h4 class="font-medium text-gray-800">招商银行</h4>
                  <div class="flex items-center">
                    <p class="text-sm text-gray-600">信用卡 · 尾号1234</p>
                    <span class="ml-2 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">国内</span>
                  </div>
                </div>
              </div>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <i class="fa fa-pencil mr-1"></i> 编辑
                </button>
                <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <i class="fa fa-trash-o mr-1"></i> 删除
                </button>
                <button class="px-3 py-1 text-sm border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                  <i class="fa fa-exchange mr-1"></i> 设为默认
                </button>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
              <span class="text-gray-500">持卡人: 张先生</span>
              <span class="text-gray-500">绑定时间: 2025-04-22</span>
              <span class="text-gray-500">还款日: 每月10日</span>
            </div>
          </div>

          <div class="account-card hover-lift">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div class="flex items-center mb-3 md:mb-0">
                <img src="https://picsum.photos/id/3/40/40" alt="花旗银行" class="w-10 h-10 rounded-md object-cover mr-3">
                <div>
                  <h4 class="font-medium text-gray-800">花旗银行 (美国)</h4>
                  <div class="flex items-center">
                    <p class="text-sm text-gray-600">储蓄卡 · 尾号7890</p>
                    <span class="ml-2 px-1.5 py-0.5 bg-red-100 text-red-700 rounded text-xs">境外</span>
                  </div>
                </div>
              </div>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <i class="fa fa-pencil mr-1"></i> 编辑
                </button>
                <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <i class="fa fa-trash-o mr-1"></i> 删除
                </button>
                <button class="px-3 py-1 text-sm border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                  <i class="fa fa-exchange mr-1"></i> 设为默认
                </button>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
              <span class="text-gray-500">持卡人: 张先生</span>
              <span class="text-gray-500">绑定时间: 2025-06-05</span>
              <span class="text-purple-600 bg-purple-100 px-2 py-0.5 rounded text-xs">跨境支付</span>
            </div>
          </div>

          <div class="account-card hover-lift">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div class="flex items-center mb-3 md:mb-0">
                <img src="https://picsum.photos/id/4/40/40" alt="汇丰银行" class="w-10 h-10 rounded-md object-cover mr-3">
                <div>
                  <h4 class="font-medium text-gray-800">汇丰银行 (香港)</h4>
                  <div class="flex items-center">
                    <p class="text-sm text-gray-600">信用卡 · 尾号4321</p>
                    <span class="ml-2 px-1.5 py-0.5 bg-red-100 text-red-700 rounded text-xs">境外</span>
                  </div>
                </div>
              </div>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <i class="fa fa-pencil mr-1"></i> 编辑
                </button>
                <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <i class="fa fa-trash-o mr-1"></i> 删除
                </button>
                <button class="px-3 py-1 text-sm border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                  <i class="fa fa-exchange mr-1"></i> 设为默认
                </button>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
              <span class="text-gray-500">持卡人: 张先生</span>
              <span class="text-gray-500">绑定时间: 2025-07-01</span>
              <span class="text-gray-500">还款日: 每月25日</span>
            </div>
          </div>
        </div>


        <!-- 添加银行账户表单 (默认隐藏) -->
        <div id="add-bank-account-form" class="hidden mt-6 pt-6 border-t border-gray-200">
          <h4 class="font-medium text-gray-800 mb-4">添加银行账户</h4>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">银行卡类型</label>
              <div class="grid grid-cols-2 gap-2">
                <label class="flex items-center justify-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="card-type" value="domestic" checked class="form-radio h-5 w-5 text-primary focus:ring-primary">
                  <span class="ml-2">国内银行卡</span>
                </label>
                <label class="flex items-center justify-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="card-type" value="overseas" class="form-radio h-5 w-5 text-primary focus:ring-primary">
                  <span class="ml-2">境外银行卡</span>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">开户银行</label>
              <select class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                <option value="">请选择银行</option>
                <option value="icbc">中国工商银行</option>
                <option value="cmb">招商银行</option>
                <option value="ccb">中国建设银行</option>
                <option value="abc">中国农业银行</option>
                <option value="boc">中国银行</option>
                <option value="comm">交通银行</option>
                <option value="citibank">花旗银行 (美国)</option>
                <option value="hsbc">汇丰银行 (香港)</option>
                <option value="other">其他境外银行</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">账户类型</label>
              <select class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                <option value="debit">储蓄卡</option>
                <option value="credit">信用卡</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">银行卡号</label>
              <input type="text" placeholder="请输入完整银行卡号" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
              <p class="text-xs text-gray-500 mt-1">国内银行卡16-19位，境外银行卡16-22位</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">持卡人姓名</label>
              <input type="text" placeholder="请输入持卡人姓名" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">币种</label>
              <select class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                <option value="cny">人民币 (CNY)</option>
                <option value="usd">美元 (USD)</option>
                <option value="eur">欧元 (EUR)</option>
                <option value="hkd">港币 (HKD)</option>
                <option value="gbp">英镑 (GBP)</option>
                <option value="jpy">日元 (JPY)</option>
              </select>
            </div>

            <div id="swift-code-field" class="hidden">
              <label class="block text-sm font-medium text-gray-700 mb-1">SWIFT代码</label>
              <input type="text" placeholder="请输入SWIFT代码(境外卡必填)" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
              <p class="text-xs text-gray-500 mt-1">国际银行识别码，通常为8-11位</p>
            </div>

            <div id="bank-address-field" class="hidden">
              <label class="block text-sm font-medium text-gray-700 mb-1">开户行地址</label>
              <input type="text" placeholder="请输入开户行地址(境外卡必填)" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">预留手机号</label>
              <input type="tel" placeholder="请输入银行预留手机号" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">验证码</label>
              <div class="flex space-x-2">
                <input type="text" placeholder="请输入验证码" class="flex-1 rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                <button class="px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors whitespace-nowrap">
                  获取验证码
                </button>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-primary focus:ring-primary">
              <span class="ml-2 text-sm text-gray-600">我已阅读并同意<a href="#" class="text-primary">《银行卡绑定协议》</a>和<a href="#" class="text-primary">《境外账户管理规定》</a></span>
            </label>
          </div>

          <div class="flex justify-end space-x-3 mt-6">
            <button id="cancel-add-bank" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              取消
            </button>
            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              添加账户
            </button>
          </div>
        </div>

      </div>

    </div>
  </main>
</template>


<script setup lang="ts">

import Header from "@/components/client/Header.vue";
</script>


<style scoped>

</style>