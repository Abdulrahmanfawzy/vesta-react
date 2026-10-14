import type { QuickAction } from "@/types/common.types";

export const quickActions: QuickAction[] = [
  {
    label: "View All Returns",
    description: "Browse return records",
    action: "view-returns",
  },
  {
    label: "Export Report",
    description: "Export a returns report",
    action: "export-report",
  },
  {
    label: "View Return Details",
    description: "Inspect return information",
    action: "view-details",
  },
  {
    label: "Manage Return Requests",
    description: "Review return requests",
    action: "manage-requests",
  },
];
