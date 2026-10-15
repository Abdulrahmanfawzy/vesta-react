import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ReturnReasonsChart } from "@/components/shared/ReturnReasonsChart";

import type { ReturnReason } from "@/types/common.types";

interface ReturnsByCustomerCardProps {
  data: ReturnReason[];
}

export function ReturnsByCustomerCard({
  data,
}: ReturnsByCustomerCardProps) {
  return (
    <Card className="h-full rounded-2xl">
      <CardContent className="h-full p-4 sm:p-5">
        <ReturnReasonsChart
          data={data}
          title="RETURNS BY CUSTOMER"
        />
      </CardContent>
      <div className="mt-3 space-y-1 p-4 text-sm text-neutral-600 lg:text-[20px]">
        <p>• Distribution by Customer Segment</p>
        <p>• Customer Segment Analysis</p>
      </div>
    </Card>
  );
}