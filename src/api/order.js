// src/api/order.js
import request from '@/utils/request'


// 获取股票数据
export function getStockData(symbol, interval) {
    return request({
        url: `/coin/stock/data/${symbol}?interval=${interval}`,
        method: 'get'
    })
}

// 获取可用资金
export function getAvailableFunds() {
    return request({
        url: '/order/client/account/my/available-balance',
        headers: {
            isToken: true
        },
        method: 'get'
    })
}

// 获取总资产
export function getTotalAssets() {
    return request({
        url: '/order/client/account/my/total-balance',
        headers: {
            isToken: true
        },
        method: 'get'
    })
}

// 获取今日盈亏
export function getTodayProfit() {
    return request({
        url: '/order/order/trade/today-profit-loss',
        headers: {
            isToken: true
        },
        method: 'get'
    })
}
export function getStockQuoteChartList(data) {
    return request({
        url: '/order/quote/getStockQuoteChartList',
        method: 'post',
        data: data,
    })
}


