import {
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import { Package } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ReturnedProduct } from "@/types/common.types";

type ReturnedProductsCardProps = {
  title?: string;
  products: ReturnedProduct[];
  descriptionItems?: string[];
};

function ProductTrend({
  values,
}: {
  values: number[];
}) {
  const data = values.map((value, index) => ({
    index,
    value,
  }));

  return (
    <div className="h-8 w-16">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#161c36"
            strokeWidth={1.3}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ReturnedProductsCard({
  title = "TOP RETURNED PRODUCTS",
  products,
  descriptionItems = [
    "Product name",
    "Number of returns",
    "Return rate (%)",
    "Return trend",
  ],
}: ReturnedProductsCardProps) {
  return (
    <Card className="h-full min-w-0 overflow-hidden rounded-2xl">
      <CardHeader className="px-4 pb-0 pt-4 sm:px-5 sm:pt-5">
        <CardTitle className="text-center lg:text-[26px] font-medium text-primary sm:text-lg">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-4 pb-4 pt-3 sm:px-5">
        <div className="overflow-hidden rounded-lg border border-neutral-100">
          <div className="min-w-[430px]">
            <div className="grid grid-cols-[1.25fr_1fr_1fr_.8fr] items-center bg-neutral-200
             px-3 py-2 text-[11px] lg:text-[20px] font-medium text-neutral-700 ">
              <span>Product</span>
              <span>Number of Returns</span>
              <span>Return Rate (%)</span>
              <span>Trend</span>
            </div>

            <div className="divide-y divide-neutral-100">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="grid grid-cols-[1.25fr_1fr_1fr_.8fr] items-center px-3 py-2
                   text-[10px] text-neutral-600 lg:text-[13px]"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded bg-neutral-100">
                      <Package
                        size={12}
                        strokeWidth={1.7}
                        className="text-primary"
                      />
                    </span>

                    <span className="font-medium text-neutral-800 ">
                      {product.name}
                    </span>
                  </div>

                  <span>
                    {product.returns}
                  </span>

                  <span>
                    {product.rate}%
                  </span>

                  <ProductTrend
                    values={product.trend}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-neutral-600 lg:text-[16px]">
          {descriptionItems.map((item) => (
            <span key={item}>
              • {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}