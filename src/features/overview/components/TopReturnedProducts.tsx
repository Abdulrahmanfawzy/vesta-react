import {
  Line,
  LineChart,
  ResponsiveContainer,
} from 'recharts';

import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card';

import type { ReturnedProduct } from "@/types/common.types";

interface TopReturnedProductsProps {
  data: ReturnedProduct[];
}

function ProductTrend({ values }: { values: number[] }) {
  const chartData = values.map((value, index) => ({
    index,
    value,
  }));

  return (
    <div className="h-8 w-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
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

export function TopReturnedProducts({ data }: TopReturnedProductsProps) {
  return (
    <Card className="h-full min-w-0">
      <div className="px-5 pt-5 text-center ">
        <CardTitle className=" text-lg sm:text-xl lg:text-2xl">
          TOP RETURNED PRODUCTS
        </CardTitle>
      </div>

      <CardContent>
        <div className="overflow-x-auto rounded-lg border border-neutral-100">
          <div className="min-w-[390px]">
            <div
              className="grid grid-cols-[minmax(100px,1.2fr)_minmax(30px,1fr)_minmax(30px,1fr)_minmax(64px,.8fr)] items-center bg-neutral-200 px-3 
            py-2 text-[13px] font-medium text-neutral-700"
            >
              <span>Product</span>
              <span className="wrap-break-word leading-tight">
                Number of Returns
              </span>
              <span className="wrap-break-word leading-tight">Return Rate (%)</span>
              <span>Trend</span>
            </div>

            <div className="divide-y divide-neutral-100">
              {data.map((product) => (
                <div
                  key={product.name}
                  className="grid grid-cols-[minmax(100px,1.2fr)_minmax(30px,1fr)_minmax(30px,1fr)_minmax(64px,.8fr)] items-center px-3 py-2 text-[12px] text-neutral-600"
                >
                  <span className="flex min-w-0 items-center gap-2 font-medium text-neutral-800">
                    <img
                      src={product.imageUrl || undefined}
                      alt={product.name}
                      className="h-10 w-10 object-contain"
                    />
                    {product.name}
                  </span>
                  <span>{product.returns}</span>

                  <span>{product.rate}%</span>

                  <ProductTrend values={product.trend} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-[14px] text-neutral-600">
          <span>• Product name</span>
          <span>• Number of returns</span>
          <span>• Return rate (%)</span>
          <span>• Return trend</span>
        </div>
      </CardContent>
    </Card>
  );
}