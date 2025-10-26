<template>
  <!-- Header -->
  <Header/>

  <div class="main bg-card text-dark-900 font-sans">
    <!-- 主内容区 -->
    <div class="ml-0 md:ml-16 p-4 md:p-6 bg-card border-b border-border">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="flex items-center">
          <button @click="goBack" class="mr-2 md:mr-4 p-2 rounded-lg hover:bg-light-2">
            <i class="text-dark-600" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-arrow-left w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas"
                   data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
              </svg>
            </i>
          </button>
          <div>
            <h1 class="text-xl md:text-2xl font-semibold flex items-center">
              资金管理
              <i class="text-primary ml-1 text-base md:text-lg inline-flex items-center" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-circle-check w-4 h-4 md:w-5 md:h-5" aria-hidden="true" focusable="false"
                     data-prefix="fas"
                     data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </i>
            </h1>
            <p class="text-dark-500 text-sm">
              {{ currentDate }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 账户余额概览 -->
    <div class="ml-0 md:ml-16 p-4 md:p-6 bg-light-1">
      <div class="bg-card rounded-xl p-4 md:p-6 mb-6">
        <h2 class="text-lg font-semibold mb-4 text-dark-800">账户余额</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-light-1 rounded-lg p-4">
            <p class="text-dark-500 text-sm mb-2">可用资金</p>
            <p class="text-xl md:text-2xl font-bold text-dark-900">{{ formatCurrency(availableBalance) }}</p>
          </div>
          <div class="bg-light-1 rounded-lg p-4">
            <p class="text-dark-500 text-sm mb-2">冻结资金</p>
            <p class="text-xl md:text-2xl font-bold text-dark-900">{{ formatCurrency(frozenBalance) }}</p>
          </div>
          <div class="bg-light-1 rounded-lg p-4">
            <p class="text-dark-500 text-sm mb-2">总资产</p>
            <p class="text-xl md:text-2xl font-bold text-dark-900">{{ formatCurrency(totalBalance) }}</p>
          </div>
        </div>
      </div>

      <!-- 出入金操作 -->
      <div class="bg-card rounded-xl p-4 md:p-6 mb-6">
        <div class="flex border-b border-border mb-4">
          <button
            :class="{ 'text-primary border-b-2 border-primary': activeTab === 'deposit', 'text-dark-500': activeTab !== 'deposit' }"
            class="py-2 px-4 font-medium text-sm md:text-base mr-6"
            @click="activeTab = 'deposit'"
          >
            资金存入
          </button>
          <button
            :class="{ 'text-primary border-b-2 border-primary': activeTab === 'withdraw', 'text-dark-500': activeTab !== 'withdraw' }"
            class="py-2 px-4 font-medium text-sm md:text-base mr-6"
            @click="activeTab = 'withdraw'"
          >
            资金取出
          </button>
          <button
            :class="{ 'text-primary border-b-2 border-primary': activeTab === 'history', 'text-dark-500': activeTab !== 'history' }"
            class="py-2 px-4 font-medium text-sm md:text-base"
            @click="activeTab = 'history'"
          >
            交易历史
          </button>
        </div>

        <!-- 存入表单 -->
        <div v-if="activeTab === 'deposit'" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-dark-500 mb-1 text-sm">存入金额</label>
              <input
                type="number"
                v-model="depositAmount"
                class="w-full bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700"
                placeholder="请输入存入金额"
                min="100"
                step="0.01"
              >
            </div>
            <div>
              <label class="block text-dark-500 mb-1 text-sm">到账方式</label>
              <select
                v-model="depositMethod"
                class="w-full bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700"
              >
                <option value="instant">即时到账</option>
                <option value="normal">普通到账</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-dark-500 mb-1 text-sm">支付方式</label>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div
                  v-for="method in paymentMethods"
                  :key="method.id"
                  :class="{ 'border-primary bg-primary/5': selectedPayment === method.id, 'border-border': selectedPayment !== method.id }"
                  class="border rounded-lg p-3 cursor-pointer flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors"
                  @click="selectedPayment = method.id"
              >
                <div class="text-2xl mb-1">
                  <i v-if="method.iconClass" :class="method.iconClass"></i>
                  <div v-else class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <i class="fas fa-credit-card text-gray-500"></i>
                  </div>
                </div>
                <span class="text-sm text-dark-700">{{ method.name }}</span>
              </div>
            </div>
          </div>


          <div v-if="selectedPayment === 'bank'">
            <label class="block text-dark-500 mb-1 text-sm">选择银行</label>
            <select
              v-model="selectedBank"
              class="w-full bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700"
            >
              <option value="">请选择银行</option>
              <option v-for="bank in banks" :key="bank.code" :value="bank.code">{{ bank.name }}</option>
            </select>
          </div>

          <div v-if="selectedPayment === 'bank' && selectedBank">
            <label class="block text-dark-500 mb-1 text-sm">银行卡号</label>
            <input
              type="text"
              v-model="bankAccount"
              class="w-full bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700"
              placeholder="请输入银行卡号"
            >
          </div>

          <div v-if="selectedPayment === 'bank' && selectedBank">
            <label class="block text-dark-500 mb-1 text-sm">持卡人姓名</label>
            <input
              type="text"
              v-model="accountName"
              class="w-full bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700"
              placeholder="请输入持卡人姓名"
            >
          </div>

          <div class="mt-6">
            <button
              class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
              @click="handleDeposit"
              :disabled="!canDeposit"
            >
              确认存入
            </button>
          </div>
        </div>

        <!-- 取出表单 -->
        <div v-if="activeTab === 'withdraw'" class="space-y-4">
          <div class="bg-light-1 rounded-lg p-4 mb-4">
            <p class="text-dark-500 text-sm mb-1">可用余额</p>
            <p class="text-xl font-bold text-dark-900">{{ formatCurrency(availableBalance) }}</p>
            <p class="text-xs text-dark-500 mt-1">单笔限额：1,000 - 500,000 元</p>
          </div>

          <div>
            <label class="block text-dark-500 mb-1 text-sm">取出金额</label>
            <input
              type="number"
              v-model="withdrawAmount"
              class="w-full bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700"
              placeholder="请输入取出金额"
              min="1000"
              max="500000"
              step="0.01"
            >
          </div>

          <div>
            <label class="block text-dark-500 mb-1 text-sm">选择提现银行卡</label>
            <select
              v-model="selectedWithdrawBank"
              class="w-full bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700"
            >
              <option value="">请选择银行卡</option>
              <option v-for="card in userBanks" :key="card.id" :value="card.id">
                {{ card.bankName }} - **** **** **** {{ card.lastFour }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-dark-500 mb-1 text-sm">提现密码</label>
            <input
              type="password"
              v-model="withdrawPassword"
              class="w-full bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700"
              placeholder="请输入提现密码"
            >
          </div>

          <div class="mt-6">
            <button
              class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
              @click="handleWithdraw"
              :disabled="!canWithdraw"
            >
              确认取出
            </button>
          </div>
        </div>

        <!-- 交易历史 -->
        <div v-if="activeTab === 'history'">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
            <div class="flex gap-2">
              <button
                :class="{ 'bg-primary-light text-primary': historyFilter === 'all', 'bg-light-2 text-dark-700': historyFilter !== 'all' }"
                class="px-3 py-1 rounded-lg text-sm"
                @click="historyFilter = 'all'"
              >
                全部
              </button>
              <button
                :class="{ 'bg-primary-light text-primary': historyFilter === 'deposit', 'bg-light-2 text-dark-700': historyFilter !== 'deposit' }"
                class="px-3 py-1 rounded-lg text-sm"
                @click="historyFilter = 'deposit'"
              >
                存入
              </button>
              <button
                :class="{ 'bg-primary-light text-primary': historyFilter === 'withdraw', 'bg-light-2 text-dark-700': historyFilter !== 'withdraw' }"
                class="px-3 py-1 rounded-lg text-sm"
                @click="historyFilter = 'withdraw'"
              >
                取出
              </button>
            </div>
            <div class="relative">
              <input
                type="date"
                v-model="historyDate"
                class="bg-card border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-dark-700 text-sm"
              >
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-light-1">
                  <th class="p-3 text-left text-dark-600">交易时间</th>
                  <th class="p-3 text-left text-dark-600">交易类型</th>
                  <th class="p-3 text-right text-dark-600">金额</th>
                  <th class="p-3 text-left text-dark-600">交易状态</th>
                  <th class="p-3 text-left text-dark-600">备注</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="record in filteredHistory" :key="record.id" class="border-b border-border/50 hover:bg-light-1">
                  <td class="p-3 text-dark-700">{{ formatDate(record.time) }}</td>
                  <td class="p-3">
                    <span :class="record.type === 'deposit' ? 'bg-success-light text-success' : 'bg-danger-light text-danger'" class="px-2 py-1 rounded-full text-xs">
                      {{ record.type === 'deposit' ? '资金存入' : '资金取出' }}
                    </span>
                  </td>
                  <td class="p-3 text-right font-medium" :class="record.type === 'deposit' ? 'text-success' : 'text-danger'">
                    {{ record.type === 'deposit' ? '+' : '-' }}{{ formatCurrency(record.amount) }}
                  </td>
                  <td class="p-3">
                    <span :class="getStatusClass(record.status)" class="px-2 py-1 rounded-full text-xs">
                      {{ getStatusText(record.status) }}
                    </span>
                  </td>
                  <td class="p-3 text-dark-500 text-xs">{{ record.remark }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 分页 -->
          <div class="mt-4 flex justify-between items-center">
            <div class="text-dark-500 text-sm">
              显示 {{ (currentPage - 1) * pageSize + 1 }} - {{ Math.min(currentPage * pageSize, filteredHistory.length) }} 条，共 {{ filteredHistory.length }} 条
            </div>
            <div class="flex items-center gap-1">
              <button
                class="px-3 py-1 border border-border rounded-lg text-sm"
                :class="{ 'bg-light-2 text-dark-400 cursor-not-allowed': currentPage === 1, 'text-dark-700 hover:bg-light-1': currentPage > 1 }"
                :disabled="currentPage === 1"
                @click="currentPage--"
              >
                上一页
              </button>
              <button
                v-for="page in totalPages"
                :key="page"
                class="px-3 py-1 rounded-lg text-sm"
                :class="{ 'bg-primary text-white': currentPage === page, 'border border-border text-dark-700 hover:bg-light-1': currentPage !== page }"
                @click="currentPage = page"
              >
                {{ page }}
              </button>
              <button
                class="px-3 py-1 border border-border rounded-lg text-sm"
                :class="{ 'bg-light-2 text-dark-400 cursor-not-allowed': currentPage === totalPages, 'text-dark-700 hover:bg-light-1': currentPage < totalPages }"
                :disabled="currentPage === totalPages"
                @click="currentPage++"
              >
                下一页
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { goBack, useCurrentDate } from '@/composables/Composable.js'
import Header from '@/components/client/Header.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { currentDate } = useCurrentDate()

// 标签页状态
const activeTab = ref('deposit')

// 账户余额
const availableBalance = ref(58245.67)
const frozenBalance = ref(12000.00)
const totalBalance = computed(() => availableBalance.value + frozenBalance.value)

// 存入表单数据
const depositAmount = ref('')
const depositMethod = ref('instant')
const selectedPayment = ref('alipay')
const selectedBank = ref('')
const bankAccount = ref('')
const accountName = ref('')

// 取出表单数据
const withdrawAmount = ref('')
const selectedWithdrawBank = ref('')
const withdrawPassword = ref('')

// 交易历史
const historyFilter = ref('all')
const historyDate = ref('')
const currentPage = ref(1)
const pageSize = ref(10)

// 支付方式
// 支付方式
const paymentMethods = ref([
  {
    id: 'alipay',
    name: '支付宝',
    iconClass: 'fab fa-alipay text-blue-500'
  },
  {
    id: 'wechat',
    name: '微信支付',
    iconClass: 'fab fa-weixin text-green-500'
  },
  {
    id: 'bank',
    name: '银行卡',
    iconClass: 'fas fa-credit-card text-gray-500'
  },
  {
    id: 'unionpay',
    name: '银联云闪付',
    iconClass: 'fas fa-wallet text-purple-500'
  }
])


// 银行列表
const banks = ref([
  { code: 'ICBC', name: '工商银行' },
  { code: 'ABC', name: '农业银行' },
  { code: 'BOC', name: '中国银行' },
  { code: 'CCB', name: '建设银行' },
  { code: 'CMB', name: '招商银行' },
  { code: 'SPDB', name: '浦发银行' },
  { code: 'CMBC', name: '民生银行' },
  { code: 'CITIC', name: '中信银行' }
])

// 用户银行卡列表
const userBanks = ref([
  { id: 1, bankName: '工商银行', lastFour: '8888' },
  { id: 2, bankName: '招商银行', lastFour: '6666' }
])

// 模拟交易历史数据
const transactionHistory = ref([
  {
    id: 1,
    time: '2024-01-15 10:30:25',
    type: 'deposit',
    amount: 5000.00,
    status: 'success',
    remark: '支付宝充值'
  },
  {
    id: 2,
    time: '2024-01-14 15:45:12',
    type: 'withdraw',
    amount: 2000.00,
    status: 'success',
    remark: '提现到工商银行'
  },
  {
    id: 3,
    time: '2024-01-13 09:20:38',
    type: 'deposit',
    amount: 10000.00,
    status: 'success',
    remark: '银行卡转账'
  },
  {
    id: 4,
    time: '2024-01-12 14:10:55',
    type: 'withdraw',
    amount: 3000.00,
    status: 'processing',
    remark: '提现到招商银行'
  },
  {
    id: 5,
    time: '2024-01-11 11:05:42',
    type: 'deposit',
    amount: 1500.00,
    status: 'success',
    remark: '微信支付充值'
  }
])




// 计算属性
const canDeposit = computed(() => {
  return depositAmount.value && parseFloat(depositAmount.value) >= 100 &&
         selectedPayment.value &&
         (!selectedPayment.value === 'bank' || (selectedBank.value && bankAccount.value && accountName.value))
})

const canWithdraw = computed(() => {
  return withdrawAmount.value && parseFloat(withdrawAmount.value) >= 1000 &&
         parseFloat(withdrawAmount.value) <= availableBalance.value &&
         selectedWithdrawBank.value && withdrawPassword.value
})

const filteredHistory = computed(() => {
  let filtered = transactionHistory.value

  // 按类型筛选
  if (historyFilter.value !== 'all') {
    filtered = filtered.filter(item => item.type === historyFilter.value)
  }

  // 按日期筛选
  if (historyDate.value) {
    filtered = filtered.filter(item => item.time.startsWith(historyDate.value))
  }

  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredHistory.value.length / pageSize.value)
})

const paginatedHistory = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredHistory.value.slice(start, end)
})

// 方法
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2
  }).format(amount)
}

const formatDate = (dateString) => {
  return dateString
}

const getStatusClass = (status) => {
  switch (status) {
    case 'success':
      return 'bg-success-light text-success'
    case 'processing':
      return 'bg-warning-light text-warning'
    case 'failed':
      return 'bg-danger-light text-danger'
    default:
      return 'bg-dark-1 text-dark-600'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'success':
      return '成功'
    case 'processing':
      return '处理中'
    case 'failed':
      return '失败'
    default:
      return '未知'
  }
}

const handleDeposit = () => {
  if (!canDeposit.value) return

  // 模拟存入操作
  console.log('存入金额:', depositAmount.value)
  console.log('到账方式:', depositMethod.value)
  console.log('支付方式:', selectedPayment.value)

  // 这里应该调用API进行实际的存入操作
  alert('存入申请已提交，请按照指引完成支付')

  // 重置表单
  depositAmount.value = ''
  selectedBank.value = ''
  bankAccount.value = ''
  accountName.value = ''
}

const handleWithdraw = () => {
  if (!canWithdraw.value) return

  // 模拟取出操作
  console.log('取出金额:', withdrawAmount.value)
  console.log('提现银行卡:', selectedWithdrawBank.value)

  // 这里应该调用API进行实际的取出操作
  alert('提现申请已提交，预计1-3个工作日到账')

  // 重置表单
  withdrawAmount.value = ''
  withdrawPassword.value = ''
}
</script>

<style scoped>
.main {
  min-height: calc(100vh - 64px);
}
</style>
