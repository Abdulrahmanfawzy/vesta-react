import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import type { ReturnReason } from '@/types/common.types';

type ReturnReasonsChartProps = {
  data: ReturnReason[];
  title?: string;
  showDescription?: boolean;
  showPercentages?: boolean;
};

export function ReturnReasonsChart({
  data,
  title = 'RETURN REASONS',
  showPercentages = false,
}: ReturnReasonsChartProps) {
  return (
    <div className="flex h-full min-w-0 flex-col">
      <h2 className="sm:mb-2 lg:mb-4  text-center lg:text-2xl font-medium text-primary sm:text-sm">
        {title}
      </h2>

      <div className="flex flex-1 items-center justify-center gap-3 sm:gap-5">
        <div className="size-24 shrink-0 sm:size-28">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={data}
                dataKey="percentage"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="85%"
                paddingAngle={2}
                stroke="none"
              >
                {data.map((reason) => (
                  <Cell
                    key={reason.label}
                    fill={reason.color}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => [
                  `${value}%`,
                  'Returns',
                ]}
                contentStyle={{
                  borderRadius: 8,
                  border: '1px solid #e5e5e5',
                  fontSize: 12,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          {data.map((reason) => (
            <div
              key={reason.label}
              className="flex items-start gap-2"
            >
              <span
                className="mt-0.5 size-2.5 text-xl shrink-0 rounded-sm"
                style={{
                  backgroundColor: reason.color,
                }}
              />

              <span className="lg:text-[20px] leading-tight text-neutral-600 text-xs">
                {reason.label}

                {showPercentages && (
                  <span className="ml-1 font-medium text-primary sm:text-xs">
                    {reason.percentage}%
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}