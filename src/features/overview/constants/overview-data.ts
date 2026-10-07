import type {
  QuickAction,
  ReturnPerformancePoint,
  ReturnReason,
  ReturnedProduct,
  SummaryMetric,
} from '@/types/common.types';

export const returnSummary: SummaryMetric[] = [
  { label: 'Total Returns', value: '1,248' },
  { label: 'Return Rate (%)', value: '8.45%' },
  { label: 'Approved Returns', value: '1,102' },
  { label: 'Rejected Returns', value: '96' },
  { label: 'Pending Returns', value: '50' },
];

export const returnReasons: ReturnReason[] = [
  { label: 'Product Defect', percentage: 42, color: '#161c36' },
  { label: 'Wrong Size', percentage: 23, color: '#ef5d22' },
  { label: 'Wrong Product', percentage: 15, color: '#f4926b' },
  { label: 'Customer Changed Mind', percentage: 11, color: '#f4e5d4' },
  { label: 'Other', percentage: 9, color: '#d8d8d8' },
];

export const returnPerformance: ReturnPerformancePoint[] = [
  { date: 'Mon', returns: 18, previousReturns: 14 },
  { date: 'Tue', returns: 20, previousReturns: 17 },
  { date: 'Wed', returns: 19, previousReturns: 16 },
  { date: 'Thu', returns: 31, previousReturns: 23 },
  { date: 'Fri', returns: 38, previousReturns: 29 },
  { date: 'Sat', returns: 35, previousReturns: 31 },
  { date: 'Sun', returns: 42, previousReturns: 34 },
  { date: 'Mon', returns: 40, previousReturns: 32 },
  { date: 'Tue', returns: 49, previousReturns: 37 },
  { date: 'Wed', returns: 55, previousReturns: 42 },
];

export const returnedProducts: ReturnedProduct[] = [
  {
    name: 'T-Shirt',
    returns: 150,
    rate: 12,
    trend: [4, 6, 5, 9, 7, 12, 10, 15, 13],
  },
  {
    name: 'Jeans',
    returns: 120,
    rate: 9,
    trend: [5, 4, 8, 7, 11, 9, 12, 10, 14],
  },
  {
    name: 'Hoodie',
    returns: 90,
    rate: 7,
    trend: [9, 7, 8, 5, 6, 3, 5, 2, 4],
  },
];

export const quickActions: QuickAction[] = [
  {
    label: 'View All Returns',
    description: 'Browse return records',
    action: 'view-returns',
  },
  {
    label: 'Export Report',
    description: 'Export a returns report',
    action: 'export-report',
  },
  {
    label: 'View Return Details',
    description: 'Inspect return information',
    action: 'view-details',
  },
  {
    label: 'Manage Return Requests',
    description: 'Review return requests',
    action: 'manage-requests',
  },
];