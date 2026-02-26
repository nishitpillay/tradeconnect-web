import { io, Socket } from 'socket.io-client';
import { Message } from '@/types';

class SocketClient {
  private socket: Socket | null = null;
  private listeners: Map<string, Set<Function>> = new Map();

  connect(accessToken: string) {
    if (this.socket?.connected) {
      return;
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace('/api', '') || 'http://localhost:3000';

    this.socket = io(baseURL, {
      auth: {
        token: accessToken,
      },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });

    this.socket.on('connect', () => {
      console.log('[Socket] Connected');
    });

    this.socket.on('disconnect', (reason) => {
      console.log('[Socket] Disconnected:', reason);
    });

    this.socket.on('connect_error', (error) => {
      console.error('[Socket] Connection error:', error);
    });

    // Set up message event forwarding
    this.socket.on('message:new', (message: Message) => {
      this.emit('message:new', message);
    });

    this.socket.on('message:read', (data: { conversation_id: string; user_id: string }) => {
      this.emit('message:read', data);
    });

    this.socket.on('typing:start', (data: { conversation_id: string; user_id: string }) => {
      this.emit('typing:start', data);
    });

    this.socket.on('typing:stop', (data: { conversation_id: string; user_id: string }) => {
      this.emit('typing:stop', data);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.listeners.clear();
    }
  }

  // Event emitters for backend
  sendMessage(conversationId: string, content: string) {
    if (!this.socket?.connected) {
      throw new Error('Socket not connected');
    }
    this.socket.emit('message:send', { conversation_id: conversationId, content });
  }

  startTyping(conversationId: string) {
    if (this.socket?.connected) {
      this.socket.emit('typing:start', { conversation_id: conversationId });
    }
  }

  stopTyping(conversationId: string) {
    if (this.socket?.connected) {
      this.socket.emit('typing:stop', { conversation_id: conversationId });
    }
  }

  joinConversation(conversationId: string) {
    if (this.socket?.connected) {
      this.socket.emit('conversation:join', { conversation_id: conversationId });
    }
  }

  leaveConversation(conversationId: string) {
    if (this.socket?.connected) {
      this.socket.emit('conversation:leave', { conversation_id: conversationId });
    }
  }

  // Custom event system for React components
  on(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);

    // Return cleanup function
    return () => {
      this.off(event, callback);
    };
  }

  off(event: string, callback: Function) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        this.listeners.delete(event);
      }
    }
  }

  private emit(event: string, data: any) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }

  get connected(): boolean {
    return this.socket?.connected || false;
  }
}

export const socketClient = new SocketClient();
