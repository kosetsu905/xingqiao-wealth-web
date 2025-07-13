<template>
  <!-- 顶部导航栏 -->
  <Header/>
  <div class="risk-assessment">
    <!-- 测试引导页 -->
    <div v-if="currentStep === 0" class="welcome-section">
      <div class="flex items-center justify-start mb-4">
        <button @click="router.go(-1)"
                class="text-gray-600 hover:text-primary transition-colors mr-2">
          <i class="fa-solid fa-arrow-left text-lg"></i>
        </button>
        <h2>投资者风险承受能力测试</h2>
      </div>
      <div class="disclaimer-box">
        <h3>重要提示：</h3>
        <ul>
          <li>请认真阅读问卷内容，确认填写内容真实有效</li>
          <li>本问卷将评估您的风险承受能力等级，作为投资匹配参考</li>
          <li>测试结果不构成投资建议，投资风险需自行承担</li>
          <li>问卷共10题，每题选项对应不同分值(2-10分)</li>
        </ul>
      </div>
      <button @click="startAssessment" class="start-btn">开始测试</button>
    </div>

    <!-- 题目展示区 -->
    <div v-else-if="currentStep <= questions.length" class="question-section">
      <div class="progress-bar">
        <div :style="{ width: progressPercentage + '%' }"></div>
      </div>

      <div class="question-content">
        <h3>题目 {{ currentStep }} <span v-if="currentQuestion.required" class="required">*</span></h3>
        <p>{{ currentQuestion.text }}</p>

        <div class="options">
          <div
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              class="option"
              :class="{ selected: currentAnswer === index }"
              @click="selectOption(index)"
          >
            {{ option.label }}. {{ option.text }}
          </div>
        </div>
      </div>

      <div class="navigation">
        <button v-if="currentStep > 1" @click="prevQuestion" class="nav-btn">上一题</button>
        <button
            @click="nextQuestion"
            class="nav-btn primary"
            :disabled="currentAnswer === null"
        >
          {{ currentStep === questions.length ? '完成测试' : '下一题' }}
        </button>
      </div>
    </div>

    <!-- 结果展示页 -->
    <div v-else class="result-section">
      <h2>您的风险承受能力评估结果</h2>

      <div class="risk-profile">
        <div class="risk-level-card">
          <span class="level-tag">{{ riskLevel }}</span>
          <div class="score-display">
            综合得分：<strong>{{ totalScore }}分</strong>（满分100分）
          </div>
        </div>

        <div class="risk-description">
          <h3>风险画像</h3>
          <p>{{ riskDescription }}</p>
        </div>
      </div>

      <div class="recommendation">
        <h3>适配投资类型</h3>
        <ul>
          <li v-for="(product, index) in recommendedProducts" :key="index">
            {{ product }}
          </li>
        </ul>
      </div>

      <div class="actions">
        <button @click="restartAssessment" class="action-btn">重新测试</button>
        <button @click="downloadReport" class="action-btn primary">下载报告</button>
        <button @click="toIndex" class="action-btn primary">返回首页</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Header from "@/components/client/Header.vue";
const router = useRouter()

const questions = ref([
  {
    id: 1,
    required: true,
    text: "您目前的个人及家庭财务状况属于以下哪一种：",
    options: [
      { label: "A", text: "有较大数额未到期负债", score: 2 },
      { label: "B", text: "收入和支出相抵", score: 4 },
      { label: "C", text: "有一定积蓄", score: 6 },
      { label: "D", text: "有较为丰厚的积蓄并有一定的投资", score: 8 },
      { label: "E", text: "比较富裕且有相当的投资", score: 10 }
    ]
  },
  {
    id: 2,
    required: true,
    text: "您个人目前已经或者准备投资的基金金额占您或者家庭所拥有总资产的比重是多少：",
    options: [
      { label: "A", text: "80-100%", score: 2 },
      { label: "B", text: "50-80%", score: 4 },
      { label: "C", text: "20-50%", score: 6 },
      { label: "D", text: "10-20%", score: 8 },
      { label: "E", text: "0-10%", score: 10 }
    ]
  },
  {
    id: 3,
    required: true,
    text: "您的年收入是多少：",
    options: [
      { label: "A", text: "20 万元以下", score: 2 },
      { label: "B", text: "20 万元至50 万元", score: 4 },
      { label: "C", text: "50万元至150 万元", score: 6 },
      { label: "D", text: "150 万元至500 万元", score: 8 },
      { label: "E", text: "500 万元以上", score: 10 }
    ]
  },
  {
    id: 4,
    required: true,
    text: "您的投资经验可描述为：",
    options: [
      { label: "A", text: "除银行储蓄外，基本没有其他投资经验", score: 2 },
      { label: "B", text: "购买过银行理财产品", score: 4 },
      { label: "C", text: "购买过债券、保险等理财产品", score: 6 },
      { label: "D", text: "参与过股票、基金等产品的交易", score: 8 },
      { label: "E", text: "参与过权证、期货、期权等产品的交易", score: 10 }
    ]
  },
  {
    id: 5,
    required: true,
    text: "您是否有过基金专户、券商理财计划、信托计划等产品的投资经历，如有投资时间是多长：",
    options: [
      { label: "A", text: "没有", score: 2 },
      { label: "B", text: "有，但是少于1 年", score: 4 },
      { label: "C", text: "有，在1－3 年之间", score: 6 },
      { label: "D", text: "有，在3－5 年之间", score: 8 },
      { label: "E", text: "有，长于5 年", score: 10 }
    ]
  },
  {
    id: 6,
    required: true,
    text: "您计划中的投资期限是多长：",
    options: [
      { label: "A", text: "少于1年", score: 2 },
      { label: "B", text: "1-2年", score: 4 },
      { label: "C", text: "2-3 年", score: 6 },
      { label: "D", text: "3-5 年", score: 8 },
      { label: "E", text: "5 年以上", score: 10 }
    ]
  },
  {
    id: 7,
    required: true,
    text: "您投资基金专户、券商理财计划、信托计划等产品主要用于什么目的：",
    options: [
      { label: "A", text: "平时生活保障，赚点补贴家用", score: 2 },
      { label: "B", text: "养老", score: 4 },
      { label: "C", text: "子女教育", score: 6 },
      { label: "D", text: "资产增值", score: 8 },
      { label: "E", text: "家庭富裕", score: 10 }
    ]
  },
  {
    id: 8,
    required: true,
    text: "以下哪项描述最符合您的投资态度：",
    options: [
      { label: "A", text: "厌恶风险，不希望本金损失，希望获得稳定回报", score: 2 },
      { label: "B", text: "保守投资，不希望本金损失，愿意承担一定幅度的收益波动", score: 4 },
      { label: "C", text: "寻求一定的资金收益和成长性，在深思熟虑后愿意承担一定的风险", score: 6 },
      { label: "D", text: "寻求资金的较高收益和成长性，愿意为此承担有限本金损失", score: 8 },
      { label: "E", text: "希望赚取高回报，愿意为此承担较大本金损失", score: 10 }
    ]
  },
  {
    id: 9,
    required: true,
    text: "以下几种投资模式，您更偏好哪种模式：",
    options: [
      { label: "A", text: "收益只有5%，但不亏损", score: 2 },
      { label: "B", text: "收益15%，但可能亏损5%", score: 4 },
      { label: "C", text: "收益是30%，但可能亏损15%", score: 6 },
      { label: "D", text: "收益50%，但可能亏损30%", score: 8 },
      { label: "E", text: "收益100%，但可能亏损60%", score: 10 }
    ]
  },
  {
    id: 10,
    required: true,
    text: "您认为自己能承受的最大投资损失是多少：",
    options: [
      { label: "A", text: "10%以内", score: 2 },
      { label: "B", text: "10%－20%", score: 4 },
      { label: "C", text: "20%－30%", score: 6 },
      { label: "D", text: "30%－50%", score: 8 },
      { label: "E", text: "超过50%", score: 10 }
    ]
  }
])

// 用户状态管理
const currentStep = ref(0)
const currentAnswer = ref(null)
const answers = reactive([])
const totalScore = ref(0)

// 计算进度百分比
const progressPercentage = computed(() => {
  if (currentStep.value === 0) return 0
  return (currentStep.value / questions.value.length) * 100
})

// 当前问题
const currentQuestion = computed(() => {
  return questions.value[currentStep.value - 1]
})

// 开始测试
function startAssessment() {
  currentStep.value = 1
  answers.splice(0)
  totalScore.value = 0
  currentAnswer.value = null
}

// 选择答案
function selectOption(index) {
  currentAnswer.value = index
}

// 下一题
function nextQuestion() {
  if (currentAnswer.value === null) return

  // 保存答案
  answers.push({
    questionId: currentQuestion.value.id,
    optionIndex: currentAnswer.value,
    score: currentQuestion.value.options[currentAnswer.value].score
  })

  // 更新总分
  totalScore.value += currentQuestion.value.options[currentAnswer.value].score

  // 重置选择
  currentAnswer.value = null

  // 前进或结束
  if (currentStep.value < questions.value.length) {
    currentStep.value++
  } else {
    currentStep.value++ // 进入结果页
  }
}

// 上一题
function prevQuestion() {
  if (currentStep.value > 1) {
    // 移除上一题答案
    const lastAnswer = answers.pop()
    if (lastAnswer) {
      totalScore.value -= lastAnswer.score
    }

    currentStep.value--
    currentAnswer.value = null
  }
}

// 风险等级评估[1](@ref)
const riskLevel = computed(() => {
  if (totalScore.value <= 40) return "保守型"
  if (totalScore.value <= 60) return "谨慎型"
  if (totalScore.value <= 80) return "稳健型"
  if (totalScore.value <= 90) return "进取型"
  return "激进型"
})

// 风险描述
const riskDescription = computed(() => {
  const descriptions = {
    "保守型": "您对投资风险高度敏感，首要目标是保障本金安全。适合低波动、保本型投资产品，建议避免任何可能导致本金损失的金融工具。",
    "谨慎型": "您能接受轻微波动以获取稳定收益，但不希望本金受损。建议配置以固定收益类资产为主的投资组合，严格控制高风险资产比例。",
    "稳健型": "您寻求风险与收益的平衡，能接受10%-20%的短期波动。适合多元化投资组合，可适度配置权益类资产并辅以风险对冲策略。",
    "进取型": "您愿意承担较高风险以获取超额收益，能接受20%-40%的短期波动。适合配置成长型资产，如股票、私募股权等，并采用动态调整策略。",
    "激进型": "您主动追求高风险高回报，能承受40%以上的波动。适合前沿科技、杠杆衍生品等高风险高成长性资产，但需建立严格止损机制。"
  }
  return descriptions[riskLevel.value]
})

// 推荐投资类型[4](@ref)
const recommendedProducts = computed(() => {
  const products = {
    "保守型": ["货币基金", "银行结构性存款", "国债逆回购", "保本型理财产品"],
    "谨慎型": ["债券型基金", "信托计划", "高等级信用债", "固收+策略产品"],
    "稳健型": ["平衡型基金", "REITs", "指数增强产品", "混合型理财产品"],
    "进取型": ["股票型基金", "私募股权", "大宗商品", "量化对冲产品"],
    "激进型": ["杠杆ETF", "加密货币信托", "VC早期投资", "金融衍生品"]
  }
  return products[riskLevel.value]
})

// 重新测试
function restartAssessment() {
  currentStep.value = 0
  currentAnswer.value = null
  answers.splice(0)
  totalScore.value = 0
}

// 返回首页
function toIndex() {
  router.push({
    path: '/client/index'
  })
}

// 下载报告
function downloadReport() {
  // 实际项目中此处生成PDF报告
  const reportContent = `
    投资者风险承受能力评估报告
    =============================
    
    评估日期：${new Date().toLocaleDateString()}
    综合得分：${totalScore.value}/100
    风险等级：${riskLevel.value}
    
    风险画像：
    ${riskDescription.value}
    
    适配投资类型：
    ${recommendedProducts.value.join('\n    ')}
    
    免责声明：
    本报告依据您填写的问卷生成，仅供参考使用。
    投资有风险，决策需谨慎。
  `

  const blob = new Blob([reportContent], { type: 'text/plain' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `风险测评报告_${new Date().getTime()}.txt`
  link.click()
}
</script>

<style scoped>
.risk-assessment {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
  line-height: 1.6;
}

.welcome-section {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
}

.disclaimer-box {
  background-color: #fff8e1;
  border-left: 4px solid #ffc107;
  padding: 15px;
  margin: 25px 0;
  text-align: left;
}

.disclaimer-box h3 {
  color: #d32f2f;
  margin-top: 0;
}

.disclaimer-box ul {
  padding-left: 20px;
}

.disclaimer-box li {
  margin-bottom: 8px;
}

.start-btn {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.start-btn:hover {
  background-color: #0b7dda;
}

.progress-bar {
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
}

.progress-bar div {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.3s ease;
}

.question-section {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.question-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  display: flex;
  align-items: center;
}

.required {
  color: #f44336;
  margin-left: 5px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 25px 0;
}

.option {
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.option:hover {
  background-color: #f5f5f5;
}

.option.selected {
  border-color: #2196f3;
  background-color: #e3f2fd;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.nav-btn {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  min-width: 100px;
}

.nav-btn:hover:not(:disabled) {
  background-color: #e0e0e0;
}

.nav-btn.primary {
  background-color: #2196f3;
  color: white;
  border-color: #0b7dda;
}

.nav-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.result-section {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.risk-profile {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin: 25px 0;
}

.risk-level-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.level-tag {
  background-color: #4caf50;
  color: white;
  padding: 6px 16px; /* 减小内边距 */
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px; /* 减小字号 */
  white-space: nowrap; /* 防止文字换行 */
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  flex-direction: row; /* 默认横向排列 */
  flex-wrap: wrap; /* 允许换行 */

  @media (max-width: 640px) { /* 移动端适配 */
    flex-direction: column; /* 纵向排列 */
    gap: 0.75rem;
    padding: 0 1rem;
  }
}

.action-btn {
  padding: 0.75rem 1.5rem; /* 减小内边距 */
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 2px solid #e0e0e0;
  background-color: white;
  color: #333;
  font-size: 14px; /* 统一字号 */
  flex: 1; /* 等宽按钮 */
  min-width: 120px; /* 最小宽度 */
  text-align: center;

  @media (max-width: 640px) {
    width: 100%; /* 移动端占满宽度 */
    min-width: auto;
  }

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
  }

  &.primary {
    background-color: #2196f3;
    border-color: #2196f3;
    color: white;

    &:hover {
      background-color: #0b7dda;
      border-color: #0b7dda;
    }
  }
}
</style>