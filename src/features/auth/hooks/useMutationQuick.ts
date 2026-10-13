


import { closeSupportTicket, sendChatMessage, updateSupportTicket, type SupportTicketUpdate } from "@/api/getQuickAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useSendChatMessage(chatId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: string) => sendChatMessage(chatId, body),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["chat-messages", chatId],
      }),
  });
}

export function useUpdateSupportTicket(ticketId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updates: SupportTicketUpdate) =>
      updateSupportTicket(ticketId, updates),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["support-ticket", ticketId],
      }),
  });
}

export function useCloseSupportTicket(ticketId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => closeSupportTicket(ticketId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["support-ticket", ticketId],
      }),
  });
}
