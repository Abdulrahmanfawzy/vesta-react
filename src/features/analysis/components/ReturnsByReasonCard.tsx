
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ReturnReasonsChart } from "@/components/shared/ReturnReasonsChart";

import type { ReturnReason } from "@/types/common.types";

interface ReturnsByReasonCardProps {
  data: ReturnReason[];
}

export function ReturnsByReasonCard({
  data,
}: ReturnsByReasonCardProps) {
  return (
    <Card className="h-full rounded-2xl">
      <CardContent className="p-4 sm:p-5">
        <ReturnReasonsChart
          data={data}
          title="RETURNS BY REASON"
        />
      </CardContent>

      <div className="mt-3 space-y-1 p-4 text-sm text-neutral-600 lg:text-[18px]">
        <p>• Distribution of Returns by Reason</p>
        <p>• Percentage of Each Reason</p>
      </div>
    </Card>
  );
}

