


export interface SupportTicketsResponse {
  success: boolean;
  message: string;
  data: {
    tickets: SupportTicket[];
    pagination: TicketPagination;
  };
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

export interface TicketUser {
  id: number;
  name: string;
}

export interface TicketPagination {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  pages: number[];
  from: number | null;
  to: number | null;
  prev_page_url: string | null;
  next_page_url: string | null;
}










//==============================================================


