import { apiClient } from './client';
import { Quote } from '@/types';

export const quotesAPI = {
  // Provider: submit a quote on a specific job (prices in AUD cents)
  async submitQuote(jobId: string, data: {
    quote_type: 'fixed' | 'estimate_range' | 'hourly' | 'call_for_quote';
    price_fixed?: number;
    price_min?: number;
    price_max?: number;
    hourly_rate?: number;
    is_gst_included?: boolean;
    scope_notes?: string;
    inclusions?: string;
    exclusions?: string;
    timeline_days?: number;
    warranty_months?: number;
  }): Promise<Quote> {
    return apiClient.post<Quote>(`/jobs/${jobId}/quotes`, data);
  },

  // Provider: list own quotes
  async getMyQuotes(status?: string): Promise<Quote[]> {
    const params = status ? { status } : {};
    return apiClient.get<Quote[]>('/quotes/my-quotes', { params });
  },

  async getQuoteById(id: string): Promise<Quote> {
    return apiClient.get<Quote>(`/quotes/${id}`);
  },

  // Provider: withdraw a quote
  async withdrawQuote(jobId: string, quoteId: string): Promise<void> {
    return apiClient.delete<void>(`/jobs/${jobId}/quotes/${quoteId}`);
  },

  // Provider: accept the job after their quote was awarded
  async acceptJob(jobId: string): Promise<void> {
    return apiClient.post<void>(`/jobs/${jobId}/accept`);
  },

  // Customer: list all quotes for a job
  async getQuotesForJob(jobId: string): Promise<Quote[]> {
    return apiClient.get<Quote[]>(`/jobs/${jobId}/quotes`);
  },

  // Customer: shortlist or reject a specific quote
  async quoteAction(jobId: string, quoteId: string, action: 'shortlisted' | 'rejected'): Promise<Quote> {
    return apiClient.patch<Quote>(`/jobs/${jobId}/quotes/${quoteId}`, { action });
  },
};
