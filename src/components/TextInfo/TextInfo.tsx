import type { SupportTicket } from "@/features/auth/types/tableteckets.types";




type TextInfoProps = {
  ticket: SupportTicket;
};

const formatDate = (value: string | null | undefined) =>
  value ? new Date(value).toLocaleString() : "—";

export default function TextInfo({ ticket }: TextInfoProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between gap-4">
        <span className="text-gray-400">Ticket ID</span>
        <span className="text-[#161C36]">
             #TKT-{String(ticket.id).padStart(5, "0")} 
             
            
            
            </span>
      </div>

      <div className="flex justify-between gap-4">
        <span className="text-gray-400">Subject</span>
        <span className="text-[#161C36]">{ticket.subject || "—"}</span>
      </div>

      <div className="flex justify-between gap-4">
        <span className="text-gray-400">Status</span>
        <span className="text-[#161C36]">{ticket.status || "—"}</span>
      </div>

      <div className="flex justify-between gap-4">
        <span className="text-gray-400">Created At</span>
        <span className="text-[#161C36]">
          {formatDate(ticket.created_at)}
        </span>
      </div>

      <div className="flex justify-between gap-4">
        <span className="text-gray-400">Last Updated</span>
        <span className="text-[#161C36]">
          {formatDate(ticket.updated_at)}
        </span>
      </div>

      <div className="flex justify-between gap-4">
        <span className="text-gray-400">Priority</span>
        <span className="text-[#161C36]">{ticket.priority || "medium"}</span>
      </div>
    </div>
  );
}