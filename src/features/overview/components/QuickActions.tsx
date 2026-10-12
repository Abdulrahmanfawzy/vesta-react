import {
  ClipboardList,
  Download,
  Eye,
  FileText,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card';

import { quickActions } from '../constants/overview-data';

const actionIcons = {
  'view-returns': Eye,
  'export-report': Download,
  'view-details': FileText,
  'manage-requests': ClipboardList,
};

export function QuickActions() {
  return (
    <Card className="h-full min-h-[280px]">
      <div className="px-5 pt-5  text-center">
        <CardTitle className='lg:text-2xl sm:text-xl'>QUICK ACTIONS</CardTitle>
      </div>

      <CardContent className="grid flex-1 grid-cols-2 content-center gap-3">
        {quickActions.map((action) => {
          const Icon = actionIcons[action.action];

          return (
            <button
              type="button"
              key={action.action}
              title={action.description}
              className="inline-flex h-31 flex-col items-center justify-center gap-2 rounded-xl bg-white px-2 text-center text-[10px] font-medium text-[#161c36] shadow-[0_3px_12px_rgba(0,0,0,0.08)] hover:bg-neutral-50"
            >
              <Icon
                // size={26}
                // strokeWidth={1.7}
                className="text-secondary  sm:size-20 lg:size-26"
              />

              <span className="whitespace-normal leading-tight lg:text-[16px] sm:text-xs">
                {action.label}
              </span>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}