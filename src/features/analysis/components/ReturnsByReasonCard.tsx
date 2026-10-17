import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ReturnReasonsChart } from "@/components/shared/ReturnReasonsChart";

import {
  analysisReturnReasons,
} from "../constants/analysis-data";

export function ReturnsByReasonCard() {
  return (
    <Card className="h-full rounded-2xl">
      <CardContent className=" p-4 sm:p-5">
        <ReturnReasonsChart
          data={analysisReturnReasons}
          title="RETURNS BY REASON"
        />

       
      </CardContent>
       <div className=" p-4 mt-3 space-y-1 text-sm lg:text-[18px] text-neutral-600 ">
          <p>• Distribution of Returns by Reason</p>
          <p>• Percentage of Each Reason</p>
        </div>
    </Card>
  );
}