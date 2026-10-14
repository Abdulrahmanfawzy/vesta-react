
export interface ChatMessage {
  id: number;
  chat_id: number;
  sender: {
    id: number;
    type: string;
    name: string;
    avatar_url: string | null;
  };
  
  type: string;
  body: string;
  read_at: string | null;
  created_at: string;
  attachments: string[];
}

export interface ChatMessagesResponse {
  success: boolean;
  message: string;
  data: ChatMessage[];
}



