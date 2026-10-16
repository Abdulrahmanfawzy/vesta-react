
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface AnalysisPeriodParams {
  period: "custom";
  from_date: string;
  to_date: string;
}

export interface ReturnsOverTimePoint {
  date: string;
  current_count: number;
  previous_date: string;
  previous_count: number;
}

export interface ReturnsOverTimeData {
  total_returns: number;
  previous_returns: number;
  percentage_change: number;
  timeline: ReturnsOverTimePoint[];
}

export interface ReturnReasonItem {
  key: string;
  label: string;
  count: number;
  percentage: number;
  reason: string;
}

export interface ReturnedProductApiItem {
  product_id: number;
  product_name: string;
  product_image?: string | null;
  product_image_url?: string | null;
  number_of_returns: number;
  total_quantity_returned: number;
  delivered_units: number;
  return_rate: number;
  trend: number[];
  rank: number | null;
}

export interface CustomerSegment {
  key: string;
  label: string;
  count: number;
  percentage: number;
  segment: string;
}

export interface ReturnsByCustomerData {
  total_customers: number;
  segments: CustomerSegment[];
}

export interface FinancialTimelinePoint {
  date: string;
  amount: number;
}

export interface FinancialImpactData {
  currency: string;
  total_refunds: number;
  cost_of_returns: number;
  net_impact: number;
  return_rate: number;
  timeline: FinancialTimelinePoint[];
}

export interface ReturnFunnelStage {
  stage: string;
  count: number;
  conversion_rate: number;
  drop_off_rate: number;
}

export interface ReturnFunnelData {
  total_requests: number;
  stages: ReturnFunnelStage[];
}

