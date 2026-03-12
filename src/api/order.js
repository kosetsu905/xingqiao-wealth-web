// src/api/order.js
import request from '@/utils/request'


// 获取股票数据
export function getStockData(symbol, interval) {
    return request({
        url: `/order/stock/data/${symbol}?interval=${interval}`,
        method: 'get'
    })
}

// 获取公司OverView
export function getCompanyOverview(symbol) {
    return request({
        url: `/order/stock/overview/${symbol}`,
        method: 'get'
    })
}

// 获取news
export function getNews(symbol) {
    return request({
        url: `/order/stock/news/${symbol}`,
        method: 'get'
    })
}

/**
     * 获取单个市场行情(指数)
     * 例子： /market/data/I:DJI
     */
export function getMarketData(stockCode) {
    return request({
        url: `/order/market/data/${stockCode}`,
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

// 获取账户信息
export function getAccountInfo() {
    return request({
        url: '/order/client/account/my/info',
        headers: {
            isToken: true
        },
        method: 'get'
    })
}

export function getStockQuote(data) {
    return request({
        url: '/order/quote/getStockQuote',
        method: 'post',
        data: data,
    })
}

/**
 * 获取股票当前行情
 * @param {Object} data 请求参数
 * @returns {Promise} 股票当前行情响应
 */
export function getStockCurrentQuote(data) {
    return request({
        url: '/order/quote/getStockCurrentQuote',
        method: 'post',
        data: data,
    })
}

/**
 * 获取富途基础行情
 * @param {string} code 股票代码
 * @param {string} market 市场代码（字符串格式：US、HK、SH、SZ等）
 * @returns {Promise} 基础行情响应
 */
export async function getFtBasicQot(code, market) {
    try {
        // 将前端市场代码转换为后端要求的数字格式
        let marketCode;
        switch (market) {
            case 'US':
                marketCode = '2'; // 美股
                break;
            case 'HK':
                marketCode = '1'; // 港股
                break;
            case 'SH':
            case 'SZ':
                marketCode = '3'; // A股
                break;
            default:
                marketCode = '2'; // 默认为美股
        }
        
        // 首先调用订阅接口
        const subscribeParams = {
            code: code,
            market: marketCode
        };
        console.log('调用订阅接口参数:', subscribeParams);
        const subscribeResult = await request({
            url: '/order/ftapi/quote/subscribeQot',
            headers: {
                isToken: true
            },
            method: 'get',
            params: subscribeParams
        });
        console.log('订阅接口返回结果:', subscribeResult);
        
        // 然后调用获取基础行情接口
        const queryParams = {
            code: code,
            market: marketCode
        };
        console.log('调用获取基础行情接口参数:', queryParams);
        const qotResult = await request({
            url: '/order/ftapi/quote/GetBasicQot',
            headers: {
                isToken: true
            },
            method: 'get',
            params: queryParams
        });
        console.log('获取基础行情接口返回结果:', qotResult);
        return qotResult;
    } catch (error) {
        console.error('获取富途基础行情失败:', error);
        throw error;
    }
}


export function getStockQuoteChartList(data) {
    return request({
        url: '/order/quote/getStockQuoteChartList',
        method: 'post',
        data: data,
    })
}

/**
 * 查询交易详情
 * @param {number} tradeId 交易ID
 * @returns {Promise} 交易详情响应
 */
export function getTradeDetail(tradeId) {
    return request({
        url: '/order/api/trade/detail',
        headers: {
            isToken: true
        },
        method: 'get',
        params: {
            tradeId: tradeId
        }
    })
}

/**
 * 创建交易订单
 * @param {Object} tradeRequest 交易请求参数
 * @returns {Promise} 交易结果响应
 */
export function createTrade(tradeRequest) {
    return request({
        url: '/order/api/trade/create',
        headers: {
            isToken: true
        },
        method: 'post',
        data: tradeRequest
    })
}

/**
 * 取消交易订单
 * @param {number} tradeId 交易ID
 * @returns {Promise} 取消结果响应
 */
export function cancelTrade(tradeId) {
    return request({
        url: '/order/api/trade/cancel',
        headers: {
            isToken: true
        },
        method: 'post',
        params: {
            tradeId: tradeId
        }
    })
}


