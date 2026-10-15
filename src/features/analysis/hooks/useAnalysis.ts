
import { useQueries } from "@tanstack/react-query";

import type {
  ReturnPerformancePoint,
  ReturnReason,
  ReturnedProduct,
} from "@/types/common.types";

import { analysisService } from "../services/analysis.service";

import type {
  AnalysisPeriodParams,
} from "../types/analysis.types";

const DEFAULT_PERIOD: AnalysisPeriodParams = {
  period: "custom",
  from_date: "2026-09-01",
  to_date: "2026-09-30",
};

const reasonColors: Record<string, string> = {
  customer_changed_mind: "#d8d8d8",
  not_as_described: "#f4e5d4",
  product_defect: "#161c36",
  size_mismatch: "#ef8061",
  wrong_item: "#f4a04d",
  new_customers: "#d8d8d8",
  returning_customers: "#ef8061",
  loyal_customers: "#161c36",
};

export function useAnalysis(
  params: AnalysisPeriodParams = DEFAULT_PERIOD,
) {
  const results = useQueries({
    queries: [
      {
        queryKey: ["analysis", "returns-over-time", params],
        queryFn: () => analysisService.getReturnsOverTime(params),
      },
      {
        queryKey: ["analysis", "returns-by-reason", params],
        queryFn: () => analysisService.getReturnsByReason(params),
      },
      {
        queryKey: ["analysis", "returns-by-product", params],
        queryFn: () => analysisService.getReturnsByProduct(params),
      },
      {
        queryKey: ["analysis", "returns-by-customer", params],
        queryFn: () => analysisService.getReturnsByCustomer(params),
      },
      {
        queryKey: ["analysis", "financial-impact", params],
        queryFn: () => analysisService.getFinancialImpact(params),
      },
      {
        queryKey: ["analysis", "return-funnel", params],
        queryFn: () => analysisService.getReturnFunnel(params),
      },
    ],
  });

  const [
    overTime,
    byReason,
    byProduct,
    byCustomer,
    financial,
    funnel,
  ] = results;

  const isPending = results.some((result) => result.isPending);
  const isError = results.some((result) => result.isError);
  const isFetching = results.some((result) => result.isFetching);

  const error = results.find((result) => result.error)?.error;

  const refetch = () =>
    Promise.all(results.map((result) => result.refetch()));

  const performance: ReturnPerformancePoint[] = (
    overTime.data?.timeline ?? []
  ).map((point) => ({
    date: point.date,
    returns: point.current_count,
    previousReturns: point.previous_count,
  }));

  const reasons: ReturnReason[] = (
    byReason.data ?? []
  ).map((item) => ({
    label: item.label,
    percentage: item.percentage,
    color: reasonColors[item.key] ?? "#d8d8d8",
  }));

  const customers: ReturnReason[] = (
    byCustomer.data?.segments ?? []
  ).map((item) => ({
    label: item.label,
    percentage: item.percentage,
    color: reasonColors[item.key] ?? "#d8d8d8",
  }));

  const products: ReturnedProduct[] = (
    byProduct.data ?? []
  ).map((item) => ({
    name: item.product_name,
    returns: item.number_of_returns,
    rate: item.return_rate,
    trend: item.trend ?? [],
    imageUrl:
      item.product_image_url ??
      item.product_image ??
      null,
  }));

  const financialData = financial.data;

  const financialTimeline = (
    financialData?.timeline ?? []
  ).map((point) => ({
    date: point.date,
    impact: point.amount,
  }));

  const funnelStages = (
    funnel.data?.stages ?? []
  ).map((stage) => ({
    label: stage.stage,
    value: stage.count,
    percentage: `${stage.conversion_rate}%`,
  }));

  return {
    isPending,
    isError,
    error,
    isFetching,
    refetch,

    performance,
    reasons,
    customers,
    products,

    overTimeSummary: overTime.data,
    financialData,
    financialTimeline,
    funnelStages,

    hasData: results.some(
      (result) => result.data !== undefined,
    ),
  };
}