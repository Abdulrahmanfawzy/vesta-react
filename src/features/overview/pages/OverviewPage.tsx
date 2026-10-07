import { ReturnsSummary } from '../components/ReturnsSummary';
import { ReturnPerformanceChart } from '@/components/shared/ReturnPerformanceChart';
import { ReturnReasonsChart } from '@/components/shared/ReturnReasonsChart';
import { TopReturnedProducts } from '../components/TopReturnedProducts';
import { QuickActions } from '../components/QuickActions';
import { returnPerformance, returnReasons } from '../constants/overview-data';
export function OverviewPage() {
  return (
    <section className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-3">
        <ReturnsSummary />

         <div className="min-h-[280px] rounded-xl border bg-card p-5 shadow-sm">
          <ReturnPerformanceChart
            data={returnPerformance}
            title="RETURNS PERFORMANCE"
          />
        </div>

        <div className="min-h-[280px] rounded-xl border bg-card p-5 shadow-sm">
          <ReturnReasonsChart
            data={returnReasons}
            title="RETURN REASONS"
          />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <TopReturnedProducts />

        <QuickActions />
      </div>
    </section>
  );
}