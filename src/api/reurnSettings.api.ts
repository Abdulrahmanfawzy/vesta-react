import type { ReturnPolicies, ReturnPoliciesResponse } from "@/features/auth/types/refundSettings";

export async function fetchReturnPolicies(): Promise<ReturnPolicies> {
 
  const response = await fetch(`https://smart-returns.huma-volve.com/api/settings/return-policies`);

  if (!response.ok) {
    throw new Error(`فشل تحميل السياسات (${response.status})`);
  }

  const result: ReturnPoliciesResponse = await response.json();

  if (!result.success) {
    throw new Error(result.message || "فشل تحميل السياسات");
  }

  return result.data;
}