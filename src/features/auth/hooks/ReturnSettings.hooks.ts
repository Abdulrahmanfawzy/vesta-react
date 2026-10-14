import { useQuery } from '@tanstack/react-query';

import { fetchReturnPolicies } from "@/api/reurnSettings.api";

export function useReturnPolicies(enabled: boolean) {
  return useQuery({
    queryKey: ["return-policies"],
    queryFn: fetchReturnPolicies,
    enabled,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}