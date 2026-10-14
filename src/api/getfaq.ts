// import type { Faq } from "@/components/RefundSettings/types/faqs.types";

import type { Faq } from "@/features/auth/types/faqs.types";

// interface FaqsResponse {
//   data: Faq[];
// }

// const FAQS_URL = "https://smart-returns.huma-volve.com/api/faqs";

// export async function getFaqs(): Promise<Faq[]> {
//   const response = await fetch(FAQS_URL);

//   if (!response.ok) {
//     throw new Error("Unable to load the frequently asked questions.");
//   }

//   const result: FaqsResponse = await response.json();
//   return result.data;
// }


//=========================================================================================









interface FaqsResponse {
  data: Faq[];
}

const FAQS_URL = "https://smart-returns.huma-volve.com/api/faqs";

export async function getFaqs(category?: string): Promise<Faq[]> {
  const url = new URL(FAQS_URL);

  if (category && category !== "All") {
    url.searchParams.set("category", category);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to load the FAQs");
  }

  const result: FaqsResponse = await response.json();
  return result.data;

}
