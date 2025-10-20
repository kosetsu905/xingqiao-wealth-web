// src/services/tradingViewService.js

export const initTradingViewWidget = (containerId, options = {}) => {
    return new Promise((resolve) => {
        if (window.TradingView) {
            const widget = new window.TradingView.widget({
                width: options.width || document.getElementById(containerId).parentElement.clientWidth,
                height: options.height || document.getElementById(containerId).parentElement.clientHeight,
                autosize: false,
                symbol: "NASDAQ:AAPL",
                interval: "D",
                timezone: "Etc/UTC",
                theme: "dark",
                style: "1",
                locale: "en",
                toolbar_bg: "#f1f3f6",
                enable_publishing: false,
                allow_symbol_change: true,
                container_id: containerId,
                ...options
            });
            resolve(widget);
        } else {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/tv.js';
            script.onload = () => {
                const widget = new window.TradingView.widget({
                    width: options.width || document.getElementById(containerId).parentElement.clientWidth,
                    height: options.height || document.getElementById(containerId).parentElement.clientHeight,
                    autosize: false,
                    symbol: "NASDAQ:AAPL",
                    interval: "D",
                    timezone: "Etc/UTC",
                    theme: "dark",
                    style: "1",
                    locale: "en",
                    toolbar_bg: "#f1f3f6",
                    enable_publishing: false,
                    allow_symbol_change: true,
                    container_id: containerId,
                    ...options
                });
                resolve(widget);
            };
            document.head.appendChild(script);
        }
    });
};

export const resizeTradingViewWidget = (widget, width, height) => {
    if (widget) {
        widget.applyOptions({ width, height });
    }
};
