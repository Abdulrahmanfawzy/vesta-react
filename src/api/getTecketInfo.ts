import type { SupportTicket } from "@/features/auth/types/tableteckets.types";
import type { SupportTicketResponse } from "@/features/auth/types/tecketInfo.types";



const API_URL = "https://smart-returns.huma-volve.com/public/api/support";

export async function getSupportTicket(
  ticketId: number,
): Promise<SupportTicket> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found. Please log in.");
  }

  const response = await fetch(`${API_URL}/${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Unable to load ticket (${response.status}): ${errorBody}`,
    );
  }

  const result: SupportTicketResponse = await response.json();
  return result.data;
}