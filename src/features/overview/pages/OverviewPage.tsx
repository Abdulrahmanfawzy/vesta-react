import { useOverview } from "../hooks/useOverview";
import { ReturnsSummary } from "../components/ReturnsSummary";
import { ReturnPerformanceChart } from "@/components/shared/ReturnPerformanceChart";
import { ReturnReasonsChart } from "@/components/shared/ReturnReasonsChart";
import { TopReturnedProducts } from "../components/TopReturnedProducts";
import { QuickActions } from "../components/QuickActions";
// import { returnPerformance, returnReasons } from "../constants/overview-data";
export function OverviewPage() {

  const { data, isPending, isError, error, refetch, isFetching } =
    useOverview();

  if (isPending) {
    return (
      <section
        className="grid gap-4"
        aria-label="Loading overview dashboard"
        aria-busy="true"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="min-h-[280px] animate-pulse rounded-xl border bg-card"
            />
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="h-64 animate-pulse rounded-xl border bg-card" />
          <div className="h-64 animate-pulse rounded-xl border bg-card" />
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section
        className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl border bg-card p-6"
        role="alert"
      >
        <h2 className="text-lg font-semibold text-primary">
          Unable to load overview
        </h2>

        <p className="text-center text-sm text-muted-foreground">
          {error instanceof Error
            ? error.message
            : "An unexpected error occurred while loading dashboard data."}
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

  return (
    <section className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-3">
        <ReturnsSummary data={data.summary} />

        <div className="min-h-[280px] rounded-xl border bg-card p-5 shadow-sm">
          <ReturnPerformanceChart
            data={data.performance}
            title="RETURNS PERFORMANCE"
          />
        </div>

        <div className="min-h-[280px] rounded-xl border bg-card p-5 shadow-sm">
          <ReturnReasonsChart data={data.reasons} title="RETURN REASONS" />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <TopReturnedProducts data={data.products} />

        <QuickActions />
      </div>
    </section>
  );
}
