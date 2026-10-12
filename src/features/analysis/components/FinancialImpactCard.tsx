import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import {
  financialImpact,
  financialMetrics,
} from "../constants/analysis-data";

export function FinancialImpactCard() {
  return (
    <Card className="h-full rounded-2xl">
      <CardContent className="p-4 sm:p-5">
        <CardTitle className="mb-3 text-center text-xl font-medium text-primary lg:text-[26px]">
          FINANCIAL IMPACT
        </CardTitle>

        <div className="grid grid-cols-4 gap-1.5">
          {financialMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded border border-neutral-200 bg-white px-1 py-1.5 text-center 
              shadow-sm"
            >
              <p className="text-[6px] leading-tight text-neutral-600 lg:text-[9px]">
                {metric.label}
              </p>

              <p className="mt-1 text-[7px] font-semibold text-primary lg:text-[10px]">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 h-[135px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart
              data={financialImpact}
              margin={{
                top: 5,
                right: 4,
                left: -25,
                bottom: 0,
              }}
            >
              <CartesianGrid
                vertical={false}
                stroke="#ededed"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="date"
                tick={{
                  fontSize: 10,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fontSize: 10,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #e5e5e5",
                  fontSize: 10,
                }}
              />

              <Line
                type="monotone"
                dataKey="impact"
                stroke="#161c36"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 4,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 space-y-1 text-sm text-neutral-600 lg:text-[18px]">
          <p>• Financial Impact Over Time</p>
          <p>• Refunds, Costs and Net Impact</p>
        </div>
      </CardContent>
    </Card>
  );
}