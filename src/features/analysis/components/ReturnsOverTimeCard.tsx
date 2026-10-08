import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ReturnPerformanceChart } from "@/components/shared/ReturnPerformanceChart";

import {
  analysisReturnPerformance,
} from "../constants/analysis-data";

export function ReturnsOverTimeCard() {
  return (
    <Card className="h-full rounded-2xl">
      <CardContent className=" p-4 mb-2 sm:p-5">
        <ReturnPerformanceChart
          data={analysisReturnPerformance}
          title="RETURNS OVER TIME"
          showLegend={false}
          showDescription={false}
          height={150}
        />

      </CardContent>
       <div className="p-4  space-y-1 text-sm lg:text-[18px]  text-neutral-600 ">
          <p>• Returns Over Time (Line Chart)</p>
          <p>• Select period</p>
          <p>• Compare with previous period</p>
        </div>
    </Card>
  );
}