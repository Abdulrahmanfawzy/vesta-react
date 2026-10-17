import { ReturnedProductsCard } from "@/components/shared/ReturnedProductsCard";

import { FinancialImpactCard } from "../components/FinancialImpactCard";
import { ReturnFunnelCard } from "../components/ReturnFunnelCard";
import { ReturnsByCustomerCard } from "../components/ReturnsByCustomerCard";
import { ReturnsByReasonCard } from "../components/ReturnsByReasonCard";
import { ReturnsOverTimeCard } from "../components/ReturnsOverTimeCard";

import {
  analysisReturnedProducts,
} from "../constants/analysis-data";

export function AnalysisPage() {
  return (
    <section className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-3">
        <ReturnsOverTimeCard />

        <ReturnsByReasonCard />

        <ReturnedProductsCard
          title="RETURNS BY PRODUCT"
          products={analysisReturnedProducts}
          descriptionItems={[
            "Top Products by Number of Returns",
            "Return Rate (%)",
            "Trend Over Time",
          ]}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ReturnsByCustomerCard />

        <FinancialImpactCard />

        <ReturnFunnelCard />
      </div>
    </section>
  );
}