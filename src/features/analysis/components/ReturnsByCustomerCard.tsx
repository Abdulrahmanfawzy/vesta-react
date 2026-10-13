import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ReturnReasonsChart } from "@/components/shared/ReturnReasonsChart";

import {
  returnsByCustomer,
} from "../constants/analysis-data";

export function ReturnsByCustomerCard() {
  return (
    <Card className="h-full rounded-2xl">
      <CardContent className="h-full p-4 sm:p-5">
        <ReturnReasonsChart
          data={returnsByCustomer}
          title="RETURNS BY CUSTOMER"
        />

        
      </CardContent>
      <div className="mt-3 p-4 space-y-1 text-sm text-neutral-600 lg:text-[20px]">
          <p>• Distribution by Status</p>
          <p>• Status Wise Analysis</p>
        </div>
    </Card>
  );
}