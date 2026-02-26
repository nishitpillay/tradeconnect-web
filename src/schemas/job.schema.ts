import { z } from 'zod';

export const CreateJobSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters').max(100),
  description: z.string().min(50, 'Description must be at least 50 characters').max(2000),
  category: z.string().min(1, 'Category is required'),
  budget_range: z.enum(['$200-$500', '$500-$1000', '$1000-$2000', '$2000+']),
  urgency: z.enum(['flexible', 'within_week', 'within_days', 'urgent']),
  preferred_date: z.string().nullable(),
  exact_address: z.string().min(10, 'Full address is required'),
  location: z.object({
    type: z.literal('Point'),
    coordinates: z.tuple([z.number(), z.number()]),
  }),
}).refine((data) => {
  if (data.preferred_date) {
    const date = new Date(data.preferred_date);
    return date > new Date();
  }
  return true;
}, {
  message: 'Preferred date must be in the future',
  path: ['preferred_date'],
});

export const UpdateJobStatusSchema = z.object({
  status: z.enum(['draft', 'open', 'in_progress', 'completed', 'cancelled']),
});

export type CreateJobInput = z.infer<typeof CreateJobSchema>;
export type UpdateJobStatusInput = z.infer<typeof UpdateJobStatusSchema>;
