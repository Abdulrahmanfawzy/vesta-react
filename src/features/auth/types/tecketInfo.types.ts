
export interface TicketUser {
  id: number;
  name: string;
}

export interface SupportTicket {
  id: number;
  seller_id: number;
  created_by: number;
  assigned_agent_id: number | null;
  return_id: number | null;
  category: string;
  subject: string;
  description: string | null;
  status: string;
  priority: string | null;
  rating: number | null;
  messages_count: number;
  seller: TicketUser;
  creator: TicketUser;
  assigned_to: TicketUser | null;
  created_at: string;
  updated_at: string;
}

export interface SupportTicketResponse {
  success: boolean;
  message: string;
  data: SupportTicket;
}