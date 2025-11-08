<script setup>
import { defineProps } from "vue";

// 接收从父组件传来的行情数据对象
const props = defineProps({
  stockInfo: {
    type: Object,
    required: true
  }
});
</script>

<template>
<!-- 行情信息栏 -->
    <div
        id="stock-info"
        style="padding: 10px; background: #fff; border-bottom: 1px solid #ddd"
    >
      <div style="font-size: 18px; font-weight: bold">
        {{ stockInfo.symbol }} {{ stockInfo.name }}
      </div>
      <div style="color: gray; font-size: 12px">
        {{ stockInfo.lastUpdated }}
      </div>
      <div style="margin-top: 5px; font-size: 20px; font-weight: bold">
        <span :style="{ color: stockInfo.lastPriceUp ? 'green' : 'red' }">
          {{ stockInfo.lastPrice }}
          {{ stockInfo.lastPriceUp ? "↑" : "↓" }}
        </span>
      </div>
      <div style="margin-top: 5px; font-size: 14px">
        <span :style="{ color: stockInfo.change >= 0 ? 'green' : 'red' }">{{
            stockInfo.change
          }}</span>
        <span :style="{ color: stockInfo.change >= 0 ? 'green' : 'red' }"
        >({{ stockInfo.changePercent }}%)</span
        >
      </div>
      <div style="margin-top: 5px; font-size: 12px">
        <span :style="{ color: stockInfo.highUp ? 'green' : 'red' }"
        >High {{ stockInfo.high }}</span
        >
        &nbsp;&nbsp;
        <span :style="{ color: stockInfo.lowUp ? 'green' : 'red' }"
        >Low {{ stockInfo.low }}</span
        >
        &nbsp;&nbsp; Volume {{ (stockInfo.volume / 1e6).toFixed(2) }}M
      </div>
      <div style="margin-top: 5px; font-size: 12px; color: gray">
        Pre-Mkt
        <span :style="{ color: stockInfo.preMarketPriceUp ? 'green' : 'red' }">
          {{ stockInfo.preMarketPrice }} </span
        >&nbsp;&nbsp;
        <span
            :style="{ color: stockInfo.preMarketChange >= 0 ? 'green' : 'red' }"
        >
          {{ stockInfo.preMarketChange }} </span
        >&nbsp;&nbsp;
        <span
            :style="{ color: stockInfo.preMarketChange >= 0 ? 'green' : 'red' }"
        >
          ({{ stockInfo.preMarketChangePercent }}%)
        </span>
        &nbsp;&nbsp; {{ stockInfo.lastUpdated }} &nbsp;&nbsp; High
        <span style="color: green">{{ stockInfo.preMarketHigh }}</span> Turnover
        {{ (stockInfo.preMarketTurnover / 1e6).toFixed(2) }}M &nbsp;&nbsp; Low
        <span style="color: red">{{ stockInfo.preMarketLow }}</span> Volume
        {{ (stockInfo.preMarketVolume / 1e6).toFixed(2) }}M
      </div>
    </div>
</template>