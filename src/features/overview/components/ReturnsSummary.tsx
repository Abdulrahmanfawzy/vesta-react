import { PackageOpen } from 'lucide-react';

import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card';

import { returnSummary } from '../constants/overview-data';

export function ReturnsSummary() {
  return (
    <Card className="h-full min-h-52.5">
      <div className="px-5 pt-5 text-center text-lg sm:text-xl lg:text-2xl">
        <CardTitle>RETURNS SUMMARY</CardTitle>
      </div>

      <CardContent className="flex flex-1 items-center gap-4">
        <div className="flex   sm:size-20
            lg:size-25 shrink-0 items-center justify-center rounded-xl
         bg-white shadow-md">
          <PackageOpen  className="text-secondary sm:size-15 lg:size-[70px]" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          {returnSummary.map((metric) => (
            <div key={metric.label} className="leading-tight">
              <p className="text-sm font-semibold text-primary sm:text-base lg:text-xl">
                • {metric.value}
              </p>
              <p className="pl-2 text-xs text-neutral-600 sm:text-sm lg:text-[20px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}