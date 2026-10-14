// types
export interface SummaryMetric {
  label: string;
  value: string;
}

export interface ReturnReason {
  label: string;
  percentage: number;
  color: string;
}

export interface ReturnPerformancePoint {
  date: string;
  returns: number;
  previousReturns: number;
}

export interface ReturnedProduct {
  name: string;
  returns: number;
  rate: number;
  trend: number[]; 
  imageUrl: string | null;
}

export interface QuickAction {
  label: string;
  description: string;
  action:
    | 'view-returns'
    | 'export-report'
    | 'view-details'
    | 'manage-requests';
}