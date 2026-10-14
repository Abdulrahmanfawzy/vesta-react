

import { getChatMessages } from "@/api/getconversation";
import { useQuery } from "@tanstack/react-query";

export function useChatMessages(chatId: number) {
  return useQuery({
    queryKey: ["chat-messages", chatId],
    queryFn: () => getChatMessages(chatId),
    enabled: chatId > 0,
  });
}