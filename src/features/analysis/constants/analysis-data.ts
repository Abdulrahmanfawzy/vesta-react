import type {
  ReturnPerformancePoint,
  ReturnReason,
  ReturnedProduct,
} from "@/types/common.types";

export const analysisReturnPerformance: ReturnPerformancePoint[] = [
  {
    date: "May 1",
    returns: 18,
    previousReturns: 14,
  },
  {
    date: "May 4",
    returns: 20,
    previousReturns: 17,
  },
  {
    date: "May 8",
    returns: 31,
    previousReturns: 23,
  },
  {
    date: "May 12",
    returns: 38,
    previousReturns: 29,
  },
  {
    date: "May 15",
    returns: 35,
    previousReturns: 31,
  },
  {
    date: "May 18",
    returns: 42,
    previousReturns: 34,
  },
  {
    date: "May 22",
    returns: 55,
    previousReturns: 42,
  },
];

export const analysisReturnReasons: ReturnReason[] = [
  {
    label: "Product Defect",
    percentage: 42,
    color: "#161c36",
  },
  {
    label: "Wrong Size",
    percentage: 23,
    color: "#ef5d22",
  },
  {
    label: "Wrong Product",
    percentage: 15,
    color: "#f4926b",
  },
  {
    label: "Customer Changed Mind",
    percentage: 11,
    color: "#f4e5d4",
  },
  {
    label: "Other",
    percentage: 9,
    color: "#d8d8d8",
  },
];

export const analysisReturnedProducts: ReturnedProduct[] = [
  {
    name: "T-Shirt",
    returns: 150,
    rate: 12,
    trend: [4, 6, 5, 9, 7, 12, 10, 15, 13],
  },
  {
    name: "Jeans",
    returns: 120,
    rate: 9,
    trend: [5, 4, 8, 7, 11, 9, 12, 10, 14],
  },
  {
    name: "Hoodie",
    returns: 90,
    rate: 7,
    trend: [9, 7, 8, 5, 6, 3, 5, 2, 4],
  },
];

export const returnsByCustomer: ReturnReason[] = [
  {
    label: "New Customers",
    percentage: 35,
    color: "#d8d8d8",
  },
  {
    label: "Returning Customers",
    percentage: 40,
    color: "#ef5d22",
  },
  {
    label: "Loyal Customers",
    percentage: 25,
    color: "#161c36",
  },
];

export const financialImpact = [
  {
    date: "May 1",
    impact: 18,
  },
  {
    date: "May 4",
    impact: 24,
  },
  {
    date: "May 8",
    impact: 15,
  },
  {
    date: "May 12",
    impact: 21,
  },
  {
    date: "May 15",
    impact: 17,
  },
  {
    date: "May 18",
    impact: 23,
  },
  {
    date: "May 22",
    impact: 12,
  },
];

export const financialMetrics = [
  {
    label: "Total Refunds",
    value: "EGP 125,000",
  },
  {
    label: "Cost Of Returns",
    value: "EGP 45,000",
  },
  {
    label: "Net Impact",
    value: "-EGP 170,000",
  },
  {
    label: "Return Rate (%)",
    value: "8.5%",
  },
];

export const returnFunnel = [
  {
    label: "Requested",
    value: 1000,
    percentage: "100%",
  },
  {
    label: "Approved",
    value: 800,
    percentage: "80%",
  },
  {
    label: "Shipped Back",
    value: 400,
    percentage: "40%",
  },
  {
    label: "Returned",
    value: 200,
    percentage: "20%",
  },
];