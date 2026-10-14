



import { useCloseSupportTicket, useSendChatMessage, useUpdateSupportTicket } from "@/features/auth/hooks/useMutationQuick";
import { useState } from "react";


type QuickActionsProps = {
  ticketId: number;
  chatId: number;
  category: string;
  subject: string;
};

export default function QuickActions({
  ticketId,
  chatId,
  category,
  subject,
}: QuickActionsProps) {
  const [error, setError] = useState("");
  const sendMessage = useSendChatMessage(chatId);
  const updateTicket = useUpdateSupportTicket(ticketId);
  const closeTicket = useCloseSupportTicket(ticketId);

  const busy = sendMessage.isPending || updateTicket.isPending || closeTicket.isPending;

  const handleReply = async () => {
    const body = window.prompt("Write your reply:")?.trim();
    if (!body) return;

    setError("");
    try {
      await sendMessage.mutateAsync(body);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send reply.");
    }
  };

  const handleChangeStatus = async () => {
    const status = window.prompt("Enter status (open, in_progress, closed):")?.trim();
    if (!status) return;

    setError("");
    try {
      await updateTicket.mutateAsync({ category, subject, status });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to update status.");
    }
  };

  const handleAssign = async () => {
    const value = window.prompt("Enter the support agent ID:")?.trim();
    if (!value) return;

    const assignedAgentId = Number(value);
    if (!Number.isInteger(assignedAgentId) || assignedAgentId <= 0) {
      setError("Enter a valid agent ID.");
      return;
    }

    setError("");
    try {
      await updateTicket.mutateAsync({
        category,
        subject,
        assigned_agent_id: assignedAgentId,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to assign ticket.");
    }
  };

  const handleCloseTicket = async () => {
    if (!window.confirm("Are you sure you want to close this ticket?")) return;

    setError("");
    try {
      await closeTicket.mutateAsync();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to close ticket.");
    }
  };

  const buttonClass =
    "flex h-7 cursor-pointer items-center justify-center gap-1 rounded-lg border border-[#9297a8] text-[10px] font-medium text-[#161C36] transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <section className="w-full rounded-2xl border border-gray-200 bg-white p-4">
      <h2 className="mb-2 text-xs font-semibold text-[#161C36]">
        Quick Actions
      </h2>

      <div className="flex flex-col gap-1.5">
        <button
          type="button"
          onClick={handleReply}
          disabled={busy}
          className="flex h-7 cursor-pointer items-center justify-center gap-1 rounded-lg bg-[#161C36] text-[10px] font-medium text-white transition hover:bg-[#252d4c] disabled:opacity-50"
        >
          ↩ Reply
        </button>
        <button type="button" onClick={handleChangeStatus} disabled={busy} className={buttonClass}>
          Change Status
        </button>
        <button type="button" onClick={handleAssign} disabled={busy} className={buttonClass}>
          ♟ Assign to
        </button>
        <button type="button" onClick={handleCloseTicket} disabled={busy} className={buttonClass}>
          ● Close Ticket
        </button>
      </div>

      {busy && <p className="mt-2 text-xs">Saving...</p>}
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </section>
  );
}
