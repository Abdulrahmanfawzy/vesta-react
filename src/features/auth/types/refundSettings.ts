
export type ReturnPolicies = {
  return_policy: string;
  return_period: string;
  conditions: string;
  refund_policy: string;
  exchange_policy: string;
  shipping_policy: string;
};

export type ReturnPoliciesResponse = {
  success: boolean;
  message: string;
  data: ReturnPolicies;
};