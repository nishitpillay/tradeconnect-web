import { JobStatus, QuoteStatus } from '@/types';
import { Badge } from './Badge';

interface StatusPillProps {
  status: JobStatus | QuoteStatus;
}

const jobStatusConfig: Record<JobStatus, { label: string; variant: 'default' | 'success' | 'warning' | 'danger' | 'info' }> = {
  draft: { label: 'Draft', variant: 'default' },
  open: { label: 'Open', variant: 'info' },
  in_progress: { label: 'In Progress', variant: 'warning' },
  completed: { label: 'Completed', variant: 'success' },
  cancelled: { label: 'Cancelled', variant: 'danger' },
};

const quoteStatusConfig: Record<QuoteStatus, { label: string; variant: 'default' | 'success' | 'warning' | 'danger' | 'info' }> = {
  pending: { label: 'Pending', variant: 'warning' },
  accepted: { label: 'Accepted', variant: 'success' },
  rejected: { label: 'Rejected', variant: 'danger' },
};

export function StatusPill({ status }: StatusPillProps) {
  const config = jobStatusConfig[status as JobStatus] || quoteStatusConfig[status as QuoteStatus];

  if (!config) return null;

  return <Badge variant={config.variant}>{config.label}</Badge>;
}
