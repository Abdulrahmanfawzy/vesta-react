

import { getSupportTicket } from "@/api/getTecketInfo";
import { useQuery } from "@tanstack/react-query";

export function useSupportTicket(ticketId: number) {
  return useQuery({
    queryKey: ["support-ticket", ticketId],
    queryFn: () => getSupportTicket(ticketId),
    enabled: Number.isInteger(ticketId) && ticketId > 0,
  });
}