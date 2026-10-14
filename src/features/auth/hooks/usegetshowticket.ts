

import { getshowTicket } from "@/api/getshowticket";
import { useQuery } from "@tanstack/react-query";

export function usegetshowticket(id: number) {
  return useQuery({
    queryKey: ["support-ticket", id],
    queryFn: () => getshowTicket(id),
    enabled: Number.isFinite(id) && id > 0,
  });
}