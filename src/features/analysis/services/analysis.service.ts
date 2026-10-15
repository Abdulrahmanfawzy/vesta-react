
import apiClient from "@/lib/axios";

import type {
  ApiResponse,
  AnalysisPeriodParams,
  FinancialImpactData,
  ReturnFunnelData,
  ReturnedProductApiItem,
  ReturnReasonItem,
  ReturnsByCustomerData,
  ReturnsOverTimeData,
} from "../types/analysis.types";

async function getData<T>(
  path: string,
  params: AnalysisPeriodParams,
): Promise<T> {
  const response = await apiClient.get<ApiResponse<T>>(path, {
    params,
  });

  if (!response.data.success) {
    throw new Error(
      response.data.message || `Failed to load analytics: ${path}`,
    );
  }

  return response.data.data;
}

export const analysisService = {
  getReturnsOverTime: (params: AnalysisPeriodParams) =>
    getData<ReturnsOverTimeData>(
      "analytics/returns-over-time",
      params,
    ),

  getReturnsByReason: (params: AnalysisPeriodParams) =>
    getData<ReturnReasonItem[]>(
      "analytics/returns-by-reason",
      params,
    ),

  getReturnsByProduct: (params: AnalysisPeriodParams) =>
    getData<ReturnedProductApiItem[]>(
      "analytics/returns-by-product",
      params,
    ),

  getReturnsByCustomer: (params: AnalysisPeriodParams) =>
    getData<ReturnsByCustomerData>(
      "analytics/returns-by-customer",
      params,
    ),

  getFinancialImpact: (params: AnalysisPeriodParams) =>
    getData<FinancialImpactData>(
      "analytics/financial-impact",
      params,
    ),

  getReturnFunnel: (params: AnalysisPeriodParams) =>
    getData<ReturnFunnelData>(
      "analytics/return-funnel",
      params,
    ),
};
