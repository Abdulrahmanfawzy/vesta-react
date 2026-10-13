export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface OverviewSummaryResponse {
  total_returns: number;
  return_rate: number;
  approved_returns: number;
  rejected_returns: number;
  pending_returns: number;
}

export interface OverviewPerformancePointResponse {
  date: string;
  total: number;
}

export interface OverviewPerformanceResponse {
  time_period: {
    from: string;
    to: string;
  };
  chart_data: OverviewPerformancePointResponse[];
  comparison: {
    previous_period_total: number;
    percentage_change: number;
    trend: "up" | "down" | "stable" | string;
  };
}

export interface OverviewReasonResponse {
  reason: string;
  count: number;
  percentage: number;
}

export interface OverviewProductResponse {
  product_id: number;
  product_name: string;
  product_image: string;
  total_quantity_returned: number;
  number_of_returns: number;
  rank: number;
  return_rate: number;
  trend: number[];
}

export interface OverviewApiData {
  summary: OverviewSummaryResponse;
  performance: OverviewPerformanceResponse;
  reasons: OverviewReasonResponse[];
  top_products: OverviewProductResponse[];
}

export type OverviewApiResponse = ApiResponse<OverviewApiData>;
