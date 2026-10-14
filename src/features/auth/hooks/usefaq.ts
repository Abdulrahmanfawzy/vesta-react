// import { getFaqs } from "@/api/getfaq";
// import { useQuery } from "@tanstack/react-query";

// export function useFaqs() {
//   return useQuery({
//     queryKey: ["faqs"],
//     queryFn: getFaqs,
//   });
// }


//=============================================================================================




import { getFaqs } from "@/api/getfaq";
import { useQuery } from "@tanstack/react-query";

export function useFaqs(category: string) {
  return useQuery({
    queryKey: ["faqs", category],
    queryFn: () => getFaqs(category),
  });
}