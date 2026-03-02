import { apiClient } from './client';
import { Job } from '@/types';
import { CreateJobInput } from '@/schemas/job.schema';

export const jobsAPI = {
  // Customer endpoints
  async getMyJobs(status?: string): Promise<{ jobs: Job[]; nextCursor: string | null }> {
    const params = status ? { status } : {};
    return apiClient.get<{ jobs: Job[]; nextCursor: string | null }>('/jobs', { params });
  },

  async createJob(data: CreateJobInput): Promise<Job> {
    return apiClient.post<Job>('/jobs', data);
  },

  async getJobById(id: string): Promise<Job> {
    return apiClient.get<Job>(`/jobs/${id}`);
  },

  async updateJob(id: string, data: Partial<CreateJobInput>): Promise<Job> {
    return apiClient.patch<Job>(`/jobs/${id}`, data);
  },

  async deleteJob(id: string): Promise<void> {
    return apiClient.delete<void>(`/jobs/${id}`);
  },

  async publishJob(id: string): Promise<Job> {
    return apiClient.post<Job>(`/jobs/${id}/publish`);
  },

  async cancelJob(id: string): Promise<Job> {
    return apiClient.post<Job>(`/jobs/${id}/cancel`);
  },

  async awardJob(id: string, quoteId: string): Promise<Job> {
    return apiClient.post<Job>(`/jobs/${id}/award`, { quote_id: quoteId });
  },

  async completeJob(id: string): Promise<Job> {
    return apiClient.post<Job>(`/jobs/${id}/complete`);
  },

  // Provider endpoints
  async getFeed(params: {
    cursor?: string;
    limit?: number;
    category_id?: string;
    state?: string;
    radius_km?: number;
    urgency?: string;
    budget_min?: number;
    budget_max?: number;
    sort?: 'recommended' | 'newest' | 'budget_high' | 'budget_low' | 'distance';
  }): Promise<{ jobs: Job[]; nextCursor: string | null }> {
    return apiClient.get<{ jobs: Job[]; nextCursor: string | null }>('/jobs/feed', { params });
  },

};
