// src/services/finnhub.js
import axios from 'axios'
import { POPULAR_STOCK_SYMBOLS } from '@/composables/constants'

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1'
const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY

const api = axios.create({
    baseURL: FINNHUB_BASE_URL,
    params: {
        token: FINNHUB_API_KEY
    }
})

export const finnhubService = {


    // 获取股票新闻
    async getNews(symbols) {
        try {
            const range = this.getDateRange(5)
            const cleanSymbols = (symbols || [])
                .map(s => s?.trim().toUpperCase())
                .filter(Boolean)

            const maxArticles = 6

            // 按符号获取公司新闻
            if (cleanSymbols.length > 0) {
                const perSymbolArticles = await Promise.all(
                    cleanSymbols.map(async (sym) => {
                        try {
                            const response = await api.get('/company-news', {
                                params: {
                                    symbol: sym,
                                    from: range.from,
                                    to: range.to
                                }
                            })
                            return { sym, articles: response.data || [] }
                        } catch (e) {
                            console.error('Error fetching company news for', sym, e)
                            return { sym, articles: [] }
                        }
                    })
                )

                // 实现轮询选择逻辑
                const collected = []
                // 从每个股票中轮流选择文章，确保多样性
                let index = 0
                let hasMore = true

                while (collected.length < maxArticles && hasMore) {
                    hasMore = false
                    for (const { articles } of perSymbolArticles) {
                        if (index < articles.length) {
                            collected.push(articles[index])
                            hasMore = true
                            if (collected.length >= maxArticles) break
                        }
                    }
                    index++
                }

                return collected.slice(0, maxArticles)
            }

            // 获取一般市场新闻
            const response = await api.get('/news', {
                params: { category: 'general' }
            })

            const formattedArticles = response.data?.map((article) => ({
                id: article.id,
                headline: article.headline,
                summary: article.summary,
                url: article.url,
                image: article.image,
                source: article.source,
                datetime: new Date(article.datetime * 1000).toLocaleString(),
                symbols: article.related?.split(',') || []
            })) || []

            // 去重处理
            const seen = new Set()
            const uniqueArticles = formattedArticles.filter((article) => {
                if (seen.has(article.headline)) {
                    return false
                }
                seen.add(article.headline)
                return true
            })

            return uniqueArticles.slice(0, maxArticles)
        } catch (err) {
            console.error('getNews error:', err)
            throw new Error('Failed to fetch news')
        }
    },

    // 搜索股票
    async searchStocks(query) {
        try {
            const trimmed = query?.trim() || ''
            let results = []

            if (!trimmed) {
                // 获取热门股票
                const top = POPULAR_STOCK_SYMBOLS.slice(0, 10)
                const profiles = await Promise.all(
                    top.map(async (sym) => {
                        try {
                            const response = await api.get('/stock/profile2', {
                                params: { symbol: sym ,token: FINNHUB_API_KEY }
                            })
                            return { sym, profile: response.data }
                        } catch (e) {
                            console.error('Error fetching profile2 for', sym, e)
                            return { sym, profile: null }
                        }
                    })
                )

                // 处理结果
                results = profiles
                    .filter(p => p.profile)
                    .map(p => ({
                        symbol: p.profile.ticker,
                        name: p.profile.name,
                        exchange: p.profile.exchange,
                        type: 'Common Stock',
                        isInWatchlist: false
                    }))
            } else {
                const response = await api.get('/search', {
                    params: { q: trimmed,token: FINNHUB_API_KEY }
                })
                results = response.data?.result || []
            }

            // 映射结果格式
            const mapped = results
                .map(r => {
                    const upper = r.symbol?.toUpperCase() || r.sym
                    const name = r.description || r.name || r.profile?.name || ''
                    const exchange = r.exchange || r.profile?.exchange || ''
                    const type = r.type || 'Common Stock'

                    return {
                        symbol: upper,
                        name,
                        exchange,
                        type,
                        isInWatchlist: false
                    }
                })
                .slice(0, 15)

            return mapped
        } catch (err) {
            console.error('Error in stock search:', err)
            return []
        }
    },

    // 辅助方法：获取日期范围
    getDateRange(days) {
        const to = new Date()
        const from = new Date()
        from.setDate(to.getDate() - days)

        return {
            from: from.toISOString().split('T')[0],
            to: to.toISOString().split('T')[0]
        }
    }
}
