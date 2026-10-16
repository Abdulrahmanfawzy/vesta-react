import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { ReturnPerformancePoint } from "@/types/common.types";

type ReturnPerformanceChartProps = {
  data: ReturnPerformancePoint[];
  title?: string;
  showLegend?: boolean;
  showDescription?: boolean;
  height?: number;
};

export function ReturnPerformanceChart({
  data,
  title = "RETURNS PERFORMANCE",
  showLegend = true,
  showDescription = true,
  height = 155,
}: ReturnPerformanceChartProps) {
  return (
    <div className="flex h-full min-w-0 flex-col">
      <h2 className="mb-3 text-center font-medium text-primary sm:text-sm lg:text-2xl">
        {title}
      </h2>

      <div className="min-w-0" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 8, right: 4, left: -24, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="currentReturnsGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#161c36" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#161c36" stopOpacity={0.01} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#ededed"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="date"
              tick={false}
              axisLine={false}
              tickLine={false}
            />

            <YAxis hide />

            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e5e5e5",
                fontSize: 12,
              }}
            />

            {showLegend && (
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{ fontSize: 10, paddingTop: 8 }}
              />
            )}

            <Area
              type="monotone"
              dataKey="returns"
              name="Current period"
              stroke="#161c36"
              strokeWidth={2.5}
              fill="url(#currentReturnsGradient)"
              activeDot={{ r: 4 }}
            />

            <Area
              type="monotone"
              dataKey="previousReturns"
              name="Previous period"
              stroke="#ef8061"
              strokeWidth={2}
              fill="none"
              strokeDasharray="5 4"
              activeDot={{ r: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {showDescription && (
        <div className="mt-2 space-y-1 text-xs text-neutral-600 lg:text-[20px]">
          <p>• Returns over time</p>
          <p>• Comparison with previous period</p>
          <p>• Date-range filtering</p>
        </div>
      )}
    </div>
  );
}
