import { apiClient } from './client';
import { Quote } from '@/types';
import { SubmitQuoteInput } from '@/schemas/quote.schema';

export const quotesAPI = {
  // Provider endpoints
  async submitQuote(data: SubmitQuoteInput): Promise<Quote> {
    return apiClient.post<Quote>('/quotes', data);
  },

  async getMyQuotes(status?: string): Promise<Quote[]> {
    const params = status ? { status } : {};
    return apiClient.get<Quote[]>('/quotes/my-quotes', { params });
  },

  async getQuoteById(id: string): Promise<Quote> {
    return apiClient.get<Quote>(`/quotes/${id}`);
  },

  async withdrawQuote(id: string): Promise<void> {
    return apiClient.delete<void>(`/quotes/${id}`);
  },

  // Customer endpoints
  async getQuotesForJob(jobId: string): Promise<Quote[]> {
    return apiClient.get<Quote[]>(`/jobs/${jobId}/quotes`);
  },

  async acceptQuote(id: string): Promise<Quote> {
    return apiClient.post<Quote>(`/quotes/${id}/accept`);
  },

  async rejectQuote(id: string): Promise<Quote> {
    return apiClient.post<Quote>(`/quotes/${id}/reject`);
  },
};
