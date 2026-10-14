


// import { getFaqs } from "@/api/getfaq";
// import { useQuery } from "@tanstack/react-query";

import {  getSupportTickets } from "@/api/getTableteckets";
import { useQuery } from "@tanstack/react-query";

// export function useFaqs() {
//   return useQuery({
//     queryKey: ["faqs"],
//     queryFn: getFaqs,
//   });
// }


//=============================================================================================




export function useSupportTickets(page: number) {
  return useQuery({
    queryKey: ["support-tickets", page],
    queryFn: () => getSupportTickets(page),
  });
}