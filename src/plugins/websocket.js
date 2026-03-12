/**
 * WebSocket行情数据通信模块
 * 用于处理前端与后端之间的实时行情数据传输
 */

class TradeWebSocket {
    constructor(options = {}) {
        // 使用相对路径，通过Vite代理转发
        this.url = options.url || import.meta.env.VITE_WEBSOCKET_URL || '/ws/stock';
        this.reconnectInterval = options.reconnectInterval || 3000;
        this.maxReconnectAttempts = options.maxReconnectAttempts || 5;
        this.heartbeatInterval = options.heartbeatInterval || 30000;

        this.ws = null;
        this.reconnectAttempts = 0;
        this.isConnected = false;
        this.isConnecting = false;
        this.heartbeatTimer = null;
        this.reconnectTimer = null;

        // 回调函数
        this.onOpenCallbacks = [];
        this.onMessageCallbacks = [];
        this.onCloseCallbacks = [];
        this.onErrorCallbacks = [];
        this.onReconnectCallbacks = [];
    }

    /**
     * 连接到WebSocket服务器
     */
    connect() {
        if (this.isConnecting || this.isConnected) {
            return;
        }

        this.isConnecting = true;

        try {
            // X-Client-Type的值
            const clientType = 'client';
            // 构建连接URL，如果有认证信息则添加查询参数
            let connectUrl = this.url+"/"+this.authInfo.userId+'?client-type='+clientType+'&token='+this.authInfo.access_token;

            this.ws = new WebSocket(connectUrl.toString());

            this.ws.onopen = (event) => {
                this.isConnecting = false;
                this.isConnected = true;
                this.reconnectAttempts = 0;
                this.startHeartbeat();
                console.log('WebSocket连接已建立:', connectUrl);
                console.log('WebSocket子协议:', this.ws.protocol);
                this.onOpenCallbacks.forEach(callback => callback(event));
            };

            this.ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    this.onMessageCallbacks.forEach(callback => callback(data));
                } catch (e) {
                    console.error('解析WebSocket消息失败:', e);
                    this.onMessageCallbacks.forEach(callback => callback(event.data));
                }
            };

            this.ws.onerror = (event) => {
                this.isConnecting = false;
                this.isConnected = false;
                console.error('WebSocket连接错误:', event);

                this.onErrorCallbacks.forEach(callback => callback(event));
            };

            this.ws.onclose = (event) => {
                this.isConnecting = false;
                this.isConnected = false;
                this.stopHeartbeat();
                console.log('WebSocket连接已关闭:', event);

                this.onCloseCallbacks.forEach(callback => callback(event));

                // 尝试重连
                this.handleReconnect();
            };
        } catch (error) {
            this.isConnecting = false;
            console.error('创建WebSocket连接失败:', error);
            this.handleReconnect();
        }
    }

    /**
     * 处理重连逻辑
     */
    handleReconnect() {
        if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            console.error('达到最大重连次数，停止重连');
            return;
        }

        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
        }

        this.reconnectTimer = setTimeout(() => {
            this.reconnectAttempts++;
            console.log(`尝试重连 (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);

            this.onReconnectCallbacks.forEach(callback => callback(this.reconnectAttempts));
            this.connect();
        }, this.reconnectInterval);
    }

    /**
     * 开始心跳检测
     */
    startHeartbeat() {
        this.stopHeartbeat();

        this.heartbeatTimer = setInterval(() => {
            if (this.isConnected) {
                this.send({ action: 'ping' });
            }
        }, this.heartbeatInterval);
    }

    /**
     * 停止心跳检测
     */
    stopHeartbeat() {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    }

    /**
     * 发送消息到服务器
     * @param {Object} data - 要发送的数据
     */
    send(data) {
        if (!this.isConnected) {
            console.warn('WebSocket未连接，无法发送消息');
            return false;
        }
        try {
            const message = typeof data === 'string' ? data : JSON.stringify(data);
            this.ws.send(message);
            return true;
        } catch (error) {
            console.error('发送WebSocket消息失败:', error);
            return false;
        }
    }

    /**
     * 关闭WebSocket连接
     */
    close() {
        this.stopHeartbeat();

        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }

        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }

        this.isConnected = false;
        this.isConnecting = false;
        this.reconnectAttempts = 0;
    }

    /**
     * 添加连接打开回调
     */
    onOpen(callback) {
        if (typeof callback === 'function') {
            this.onOpenCallbacks.push(callback);
        }
    }

    /**
     * 添加消息接收回调
     */
    onMessage(callback) {
        if (typeof callback === 'function') {
            this.onMessageCallbacks.push(callback);
        }
    }
    
    /**
     * 移除消息接收回调
     */
    removeMessageHandler(callback) {
        if (typeof callback === 'function') {
            const index = this.onMessageCallbacks.indexOf(callback);
            if (index > -1) {
                this.onMessageCallbacks.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    /**
     * 添加连接关闭回调
     */
    onClose(callback) {
        if (typeof callback === 'function') {
            this.onCloseCallbacks.push(callback);
        }
    }

    /**
     * 添加错误回调
     */
    onError(callback) {
        if (typeof callback === 'function') {
            this.onErrorCallbacks.push(callback);
        }
    }

    /**
     * 添加重连回调
     */
    onReconnect(callback) {
        if (typeof callback === 'function') {
            this.onReconnectCallbacks.push(callback);
        }
    }


    /**
     * 获取连接状态详情
     */
    getStatus() {
        return {
            isConnected: this.isConnected,
            isConnecting: this.isConnecting,
            reconnectAttempts: this.reconnectAttempts,
            maxReconnectAttempts: this.maxReconnectAttempts
        };
    }

    /**
     * 设置认证信息
     * @param {string} access_token - 用户访问令牌
     * @param {string} userId - 用户ID
     * @returns {boolean} - 设置是否成功
     */
    setAuthInfo(access_token, userId) {
        if (!access_token || !userId) {
            console.error('无效的认证信息：token和userId不能为空');
            return false;
        }
        
        // 存储认证信息
        this.authInfo = {
            access_token,
            userId
        };
        
        console.log('WebSocket认证信息已设置');
        return true;
    }
}

// 创建默认实例
const tradeWebSocket = new TradeWebSocket();

export default tradeWebSocket;
