

import type { SupportTicketsResponse } from "@/features/auth/types/tableteckets.types";

const TICKETS_URL =
  "https://smart-returns.huma-volve.com/public/api/support?per_page=10";

export async function getSupportTickets(
  page: number,
): Promise<SupportTicketsResponse["data"]> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error(" token not found. Please log in.");
  }

  const url = new URL(TICKETS_URL);
  url.searchParams.set("per_page", "10");
  url.searchParams.set("page", String(page));

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to load support tickets (${response.status})`);
  }

  const result: SupportTicketsResponse = await response.json();
  return result.data;
}