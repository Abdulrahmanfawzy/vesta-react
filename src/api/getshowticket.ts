

import type { SupportTicket } from "@/features/auth/types/tableteckets.types";

const API_URL =
  "https://smart-returns.huma-volve.com/public/api/support";

export async function getshowTicket(id: number): Promise<SupportTicket> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found. Please log in.");
  }

  const response = await fetch(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

 if (!response.ok) {
  const details = await response.text();
  throw new Error(`Unable to load ticket (${response.status}): ${details}`);
}
  const result: {
    success: boolean;
    message: string;
    data: SupportTicket;
  } = await response.json();

  return result.data;
}