
import { ReturnedProductsCard } from "@/components/shared/ReturnedProductsCard";
import { Skeleton } from "@/components/ui/skeleton";

import { useAnalysis } from "../hooks/useAnalysis";

import { FinancialImpactCard } from "../components/FinancialImpactCard";
import { ReturnFunnelCard } from "../components/ReturnFunnelCard";
import { ReturnsByCustomerCard } from "../components/ReturnsByCustomerCard";
import { ReturnsByReasonCard } from "../components/ReturnsByReasonCard";
import { ReturnsOverTimeCard } from "../components/ReturnsOverTimeCard";

export function AnalysisPage() {
  const {
    isPending,
    isError,
    isFetching,
    error,
    refetch,
    performance,
    reasons,
    customers,
    products,
    financialData,
    financialTimeline,
    funnelStages,
    hasData,
  } = useAnalysis();

  if (isPending) {
    return (
      <section
        className="grid gap-4"
        aria-label="Loading analysis dashboard"
        aria-busy="true"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-70 w-full rounded-2xl"
            />
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-[280px] w-full rounded-2xl"
            />
          ))}
        </div>
      </section>
    );
  }

  if (isError && !hasData) {
    return (
      <section
        className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl border bg-card p-6"
        role="alert"
      >
        <h2 className="text-lg font-semibold text-primary">
          Unable to load analysis
        </h2>

        <p className="text-center text-sm text-muted-foreground">
          {error instanceof Error
            ? error.message
            : "An unexpected error occurred while loading analysis data."}
        </p>

        <button
          type="button"
          onClick={() => void refetch()}
          disabled={isFetching}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50"
        >
          {isFetching ? "Retrying..." : "Try again"}
        </button>
      </section>
    );
  }

  const hasNoData =
    performance.length === 0 &&
    reasons.length === 0 &&
    customers.length === 0 &&
    products.length === 0 &&
    !financialData &&
    funnelStages.length === 0;

  if (hasNoData) {
    return (
      <section className="flex min-h-64 items-center justify-center rounded-xl border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          No analysis data is available for this period.
        </p>
      </section>
    );
  }

  return (
    <section
      className="grid gap-4"
      aria-busy={isFetching}
    >
      {isError && (
        <div
          role="alert"
          className="flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-card p-3 text-sm"
        >
          <span className="text-muted-foreground">
            Some analysis data could not be refreshed.
            Previously loaded data is still displayed.
          </span>

          <button
            type="button"
            onClick={() => void refetch()}
            disabled={isFetching}
            className="shrink-0 rounded-md bg-primary px-3 py-1.5 text-primary-foreground
             disabled:opacity-50"
          >
            Retry
          </button>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        <ReturnsOverTimeCard data={performance} />

        <ReturnsByReasonCard data={reasons} />

        <ReturnedProductsCard
          title="RETURNS BY PRODUCT"
          products={products}
          descriptionItems={[
            "Top Products by Number of Returns",
            "Return Rate (%)",
            "Trend Over Time",
          ]}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ReturnsByCustomerCard data={customers} />

        <FinancialImpactCard
          data={financialData}
          timeline={financialTimeline}
        />

        <ReturnFunnelCard stages={funnelStages} />
      </div>
    </section>
  );
}

