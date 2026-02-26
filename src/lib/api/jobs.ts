import { apiClient } from './client';
import { Job, PaginatedResponse } from '@/types';
import { CreateJobInput } from '@/schemas/job.schema';

export const jobsAPI = {
  // Customer endpoints
  async getMyJobs(status?: string): Promise<Job[]> {
    const params = status ? { status } : {};
    return apiClient.get<Job[]>('/jobs/my-jobs', { params });
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

  async completeJob(id: string): Promise<Job> {
    return apiClient.post<Job>(`/jobs/${id}/complete`);
  },

  // Provider endpoints
  async getFeed(params: {
    cursor?: string;
    limit?: number;
    category?: string;
    budget_range?: string;
    urgency?: string;
  }): Promise<PaginatedResponse<Job>> {
    return apiClient.get<PaginatedResponse<Job>>('/jobs/feed', { params });
  },

  async getRecommendedJobs(): Promise<Job[]> {
    return apiClient.get<Job[]>('/jobs/recommended');
  },
};
