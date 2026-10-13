import { useQuery } from "@tanstack/react-query";

import type {
  ReturnPerformancePoint,
  ReturnReason,
  ReturnedProduct,
  SummaryMetric,
} from "@/types/common.types";

import { overviewService } from "../services/overview.service";

const reasonLabels: Record<string, string> = {
  customer_changed_mind: "Customer Changed Mind",
  not_as_described: "Not as Described",
  product_defect: "Product Defect",
  size_mismatch: "Size Mismatch",
  wrong_item: "Wrong Item",
};

const reasonColors: Record<string, string> = {
  customer_changed_mind: "#f4e5d4",
  not_as_described: "#d8d8d8",
  product_defect: "#161c36",
  size_mismatch: "#ef5d22",
  wrong_item: "#f4926b",
};

export function useOverview() {
  return useQuery({
    queryKey: ["overview"],
    queryFn: overviewService.getOverview,
    select: (data) => {
      const summary: SummaryMetric[] = [
        {
          label: "Total Returns",
          value: data.summary.total_returns.toLocaleString(),
        },
        {
          label: "Return Rate (%)",
          value: `${data.summary.return_rate}%`,
        },
        {
          label: "Approved Returns",
          value: data.summary.approved_returns.toLocaleString(),
        },
        {
          label: "Rejected Returns",
          value: data.summary.rejected_returns.toLocaleString(),
        },
        {
          label: "Pending Returns",
          value: data.summary.pending_returns.toLocaleString(),
        },
      ];

      const performance: ReturnPerformancePoint[] =
        data.performance.chart_data.map((point) => ({
          date: point.date,
          returns: point.total,
          previousReturns: 0,
        }));

      const reasons: ReturnReason[] = data.reasons.map((reason) => ({
        label: reasonLabels[reason.reason] ?? reason.reason,
        percentage: reason.percentage,
        color: reasonColors[reason.reason] ?? "#d8d8d8",
      }));

      const products: ReturnedProduct[] = data.top_products.map((product) => ({
        name: product.product_name,
        returns: product.number_of_returns,
        rate: product.return_rate,
        trend: product.trend,
        imageUrl: product.product_image,
      }));

      return {
        summary,
        performance,
        reasons,
        products,
        comparison: data.performance.comparison,
        timePeriod: data.performance.time_period,
        productDetails: data.top_products,
      };
    },
  });
}
