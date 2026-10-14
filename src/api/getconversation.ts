import type { ChatMessage, ChatMessagesResponse } from "@/features/auth/types/conversation.types";



const API_URL = "https://smart-returns.huma-volve.com/public/api"


export async function getChatMessages(chatId: number): Promise<ChatMessage[]> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found. Please log in.");
  }

  const response = await fetch(`${API_URL}/chats/${chatId}/messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to load messages (${response.status})`);
  }

  const result: ChatMessagesResponse = await response.json();
  return result.data;
}