import { z } from 'zod';

export const SubmitQuoteSchema = z.object({
  job_id: z.string().uuid(),
  quote_type: z.enum(['fixed', 'hourly', 'quote_range']),
  amount: z.number().positive('Amount must be positive'),
  hourly_rate: z.number().positive().optional(),
  estimated_hours: z.number().positive().optional(),
  estimated_days: z.number().int().positive('Estimated days must be at least 1'),
  notes: z.string().max(1000, 'Notes must be less than 1000 characters'),
}).refine((data) => {
  if (data.quote_type === 'hourly') {
    return data.hourly_rate && data.estimated_hours;
  }
  return true;
}, {
  message: 'Hourly rate and estimated hours required for hourly quotes',
  path: ['hourly_rate'],
});

export const UpdateQuoteStatusSchema = z.object({
  status: z.enum(['pending', 'accepted', 'rejected']),
});

export type SubmitQuoteInput = z.infer<typeof SubmitQuoteSchema>;
export type UpdateQuoteStatusInput = z.infer<typeof UpdateQuoteStatusSchema>;
