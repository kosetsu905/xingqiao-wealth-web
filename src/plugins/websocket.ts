import {onUnmounted } from 'vue'

export class OKXWebSocketClient {
  private socket: WebSocket | null = null
  private reconnectTimeout: number | null = null
  private url: string
  private topics: string[] = []
  private messageHandler: (data: any) => void
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5
  private reconnectDelay = 1000 // 初始重连延迟(ms)

  constructor(url: string, messageHandler: (data: any) => void) {
    this.url = url
    this.messageHandler = messageHandler
  }

  connect() {
    if (this.socket?.readyState === WebSocket.OPEN) {
      return
    }

    this.socket = new WebSocket(this.url)

    this.socket.onopen = () => {
      console.log('WebSocket connection opened')
      this.reconnectAttempts = 0
      this.subscribeToTopics()
    }

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        this.messageHandler(data)
      } catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error)
      this.handleReconnect()
    }

    this.socket.onclose = () => {
      console.log('WebSocket connection closed')
      this.handleReconnect()
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout)
      this.reconnectTimeout = null
    }
  }

  subscribeToTopic(topic: string) {
    if (!this.topics.includes(topic)) {
      this.topics.push(topic)
    }
    this.sendSubscribeMessage(topic)
  }

  unsubscribeFromTopic(topic: string) {
    this.topics = this.topics.filter(t => t !== topic)
    this.sendUnsubscribeMessage(topic)
  }

  private subscribeToTopics() {
    this.topics.forEach(topic => {
      this.sendSubscribeMessage(topic)
    })
  }

  private sendSubscribeMessage(topic: string) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({
        op: 'subscribe',
        args: [{
          channel: 'tickers',
          instId: topic
        }]
      })
      this.socket.send(message)
    }
  }

  private sendUnsubscribeMessage(topic: string) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({
        op: 'unsubscribe',
        args: [{
          channel: 'tickers',
          instId: topic
        }]
      })
      this.socket.send(message)
    }
  }

  private handleReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnect attempts reached, stopping')
      return
    }

    this.reconnectAttempts++
    const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1)
    console.log(`Reconnecting attempt ${this.reconnectAttempts} after ${delay}ms`)

    this.reconnectTimeout = setTimeout(() => {
      this.connect()
    }, delay) as unknown as number
  }
}

export function useOKXWebSocket(url: string, messageHandler: (data: any) => void) {
  const client = new OKXWebSocketClient(url, messageHandler)

  onUnmounted(() => {
    client.disconnect()
  })

  return client
}