// src/api/order.js
import request from '@/utils/request'


// 获取股票数据
export function getStockData(symbol, interval) {
    return request({
        url: `/coin/stock/data/${symbol}?interval=${interval}`,
        method: 'get'
    })
}


