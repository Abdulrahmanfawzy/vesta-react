
// const API_URL = "https://smart-returns.huma-volve.com/public/api";

// export async function sendChatMessage(chatId: number, body: string) {
//   const token = localStorage.getItem("token");
//   if (!token) throw new Error("Token not found. Please log in.");

//   const response = await fetch(`${API_URL}/chats/${chatId}/messages`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ body }),
//   });

//   if (!response.ok) {
//     throw new Error(`Unable to send message (${response.status})`);
//   }

//   return response.json();
// }





























const API_URL = "https://smart-returns.huma-volve.com/public/api";

type RequestBody = Record<string, unknown>;

async function apiRequest<T>(
  path: string,
  method: "POST" | "PUT" | "PATCH",
  body: RequestBody,
): Promise<T> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found. Please log in.");
  }

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Request failed (${response.status}): ${details}`);
  }

  return response.json() as Promise<T>;
}

export type SupportTicketUpdate = {
  category: string;
  subject: string;
  status?: string;
  assigned_agent_id?: number | null;
};

export type ApiResult<T> = {
  success: boolean;
  message: string;
  data: T;
};

export async function sendChatMessage(
  chatId: number,
  body: string,
): Promise<ApiResult<unknown>> {
  return apiRequest(`/chats/${chatId}/messages`, "POST", { body });
}

export async function updateSupportTicket(
  ticketId: number,
  updates: SupportTicketUpdate,
): Promise<ApiResult<unknown>> {
  return apiRequest(`/support/${ticketId}`, "PUT", updates);
}

export async function closeSupportTicket(
  ticketId: number,
): Promise<ApiResult<unknown>> {
  return apiRequest(`/support/${ticketId}/close`, "PATCH", {});
}
