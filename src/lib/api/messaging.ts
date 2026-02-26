import { apiClient } from './client';
import { Conversation, Message, PaginatedResponse } from '@/types';

export const messagingAPI = {
  async getConversations(): Promise<Conversation[]> {
    return apiClient.get<Conversation[]>('/conversations');
  },

  async getConversationById(id: string): Promise<Conversation> {
    return apiClient.get<Conversation>(`/conversations/${id}`);
  },

  async getMessages(conversationId: string, cursor?: string, limit?: number): Promise<PaginatedResponse<Message>> {
    const params = { cursor, limit };
    return apiClient.get<PaginatedResponse<Message>>(`/conversations/${conversationId}/messages`, { params });
  },

  async sendMessage(conversationId: string, content: string): Promise<Message> {
    return apiClient.post<Message>(`/conversations/${conversationId}/messages`, { content });
  },

  async markAsRead(conversationId: string): Promise<void> {
    return apiClient.post<void>(`/conversations/${conversationId}/read`);
  },
};
