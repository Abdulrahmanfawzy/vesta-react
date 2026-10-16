
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ReturnPerformanceChart } from "@/components/shared/ReturnPerformanceChart";

import type { ReturnPerformancePoint } from "@/types/common.types";

interface ReturnsOverTimeCardProps {
  data: ReturnPerformancePoint[];
}

export function ReturnsOverTimeCard({
  data,
}: ReturnsOverTimeCardProps) {
  return (
    <Card className="h-full rounded-2xl">
      <CardContent className="mb-2 p-4 sm:p-5">
        <ReturnPerformanceChart
          data={data}
          title="RETURNS OVER TIME"
          showLegend={false}
          showDescription={false}
          height={150}
        />
      </CardContent>

      <div className="space-y-1 p-4 text-sm text-neutral-600 lg:text-[18px]">
        <p>• Returns Over Time (Line Chart)</p>
        <p>• Select period</p>
        <p>• Compare with previous period</p>
      </div>
    </Card>
  );
}

