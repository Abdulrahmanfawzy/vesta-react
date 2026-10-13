import {
  Cell,
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import {
  returnFunnel,
} from "../constants/analysis-data";

const funnelColors = [
  "#161c36",
  "#ef8061",
  "#f4a04d",
  "#d8d8d8",
];

export function ReturnFunnelCard() {
  return (
    <Card className="h-full rounded-2xl">
      <CardContent className="p-4 sm:p-5">
        <CardTitle className="mb-3 text-center text-sm font-medium text-primary lg:text-[26px]">
          RETURN FUNNEL
        </CardTitle>

        <div className="h-[185px] mb-3 grid grid-cols-2 justify-between">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <FunnelChart>
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #e5e5e5",
                  fontSize: 10,
                }}
              />

              <Funnel
                dataKey="value"
                data={returnFunnel}
                isAnimationActive={false}
                lastShapeType="rectangle"
              >
                <LabelList
                  dataKey="value"
                  position="inside"
                  fill="#ffffff"
                  stroke="none"
                  fontSize={11}
                />

                {returnFunnel.map((entry, index) => (
                  <Cell
                    key={entry.label}
                    fill={
                      funnelColors[index] ??
                      "#161c36"
                    }
                  />
                ))}
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
           <div className="mt-2 text-center space-y-3 text-[8px] text-neutral-500 lg:text-[12px]">
          {returnFunnel.map((stage) => (
            <div
              key={stage.label}
              className="flex flex-col"
            >
              <span className="font-bold">
                {stage.label}
              </span>

              <span>
                {stage.value.toLocaleString()} (
                {stage.percentage})
              </span>
            </div>
          ))}
        </div>
        </div>

        <div className="space-y-1 text-sm text-neutral-600 lg:text-[18px]">
          <p>• Return Process Funnel</p>
          <p>• Conversion Rate Between Stages</p>
        </div>

       
      </CardContent>
    </Card>
  );
}