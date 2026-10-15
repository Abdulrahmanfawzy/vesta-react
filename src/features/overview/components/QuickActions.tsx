import { ClipboardList, Download, Eye, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { PATHS } from "@/app/routes/paths";
import type {
  ReturnPerformancePoint,
  ReturnReason,
  SummaryMetric,
} from "@/types/common.types";

import { quickActions } from "../constants/overview-data";
import type { OverviewProductResponse } from "../types/overview.types";

interface QuickActionsProps {
  reportData: {
    summary: SummaryMetric[];
    performance: ReturnPerformancePoint[];
    reasons: ReturnReason[];
    productDetails: OverviewProductResponse[];
  };
}

const actionIcons = {
  "view-returns": Eye,
  "export-report": Download,
  "view-details": FileText,
  "manage-requests": ClipboardList,
};

function exportOverviewReport(data: QuickActionsProps["reportData"]) {
  const workbook = XLSX.utils.book_new();

  const summarySheet = XLSX.utils.json_to_sheet(
    data.summary.map((metric) => ({
      Metric: metric.label,
      Value: metric.value,
    })),
  );

  const performanceSheet = XLSX.utils.json_to_sheet(
    data.performance.map((point) => ({
      Date: point.date,
      Returns: point.returns,
      PreviousReturns: point.previousReturns,
    })),
  );

  const reasonsSheet = XLSX.utils.json_to_sheet(
    data.reasons.map((reason) => ({
      Reason: reason.label,
      Percentage: reason.percentage,
    })),
  );

  const productsSheet = XLSX.utils.json_to_sheet(
    data.productDetails.map((product) => ({
      Product: product.product_name,
      NumberOfReturns: product.number_of_returns,
      TotalQuantityReturned: product.total_quantity_returned,
      ReturnRate: product.return_rate,
      Trend: product.trend.join(", "),
    })),
  );

  XLSX.utils.book_append_sheet(workbook, summarySheet, "Summary");
  XLSX.utils.book_append_sheet(workbook, performanceSheet, "Returns Over Time");
  XLSX.utils.book_append_sheet(workbook, reasonsSheet, "Return Reasons");
  XLSX.utils.book_append_sheet(
    workbook,
    productsSheet,
    "Top Returned Products",
  );

  const date = new Date().toISOString().slice(0, 10);

  XLSX.writeFile(workbook, `vesta-overview-report-${date}.xlsx`);
}

export function QuickActions({ reportData }: QuickActionsProps) {
  const navigate = useNavigate();

  const handleAction = (action: (typeof quickActions)[number]["action"]) => {
    switch (action) {
      case "view-returns":
        navigate(PATHS.returns);
        break;

      case "export-report":
        exportOverviewReport(reportData);
        break;

      case "view-details":
      case "manage-requests":
        break;
    }
  };

  return (
    <Card className="h-full min-h-[280px]">
      <div className="px-5 pt-5 text-center">
        <CardTitle className="lg:text-2xl sm:text-xl">QUICK ACTIONS</CardTitle>
      </div>

      <CardContent className="grid flex-1 grid-cols-2 content-center gap-3">
        {quickActions.map((action) => {
          const Icon = actionIcons[action.action];

          return (
            <button
              type="button"
              key={action.action}
              title={action.description}
              onClick={() => handleAction(action.action)}
              className="inline-flex h-31 flex-col items-center justify-center gap-2 rounded-xl bg-white px-2 text-center text-[10px] font-medium text-[#161c36] shadow-[0_3px_12px_rgba(0,0,0,0.08)] hover:bg-neutral-50"
            >
              <Icon className="text-secondary sm:size-15 lg:size-18" />

              <span className="whitespace-normal leading-tight lg:text-[16px] sm:text-xs">
                {action.label}
              </span>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}
