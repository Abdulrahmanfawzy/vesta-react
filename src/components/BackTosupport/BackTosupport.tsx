
import IconM from "../IconM/IconM";
import Conversation from "../Conversation/Conversation";
import TextInfo from "../TextInfo/TextInfo";
import RelatedToInfo from "../RelatedToInfo/RelatedToInfo";
import Attachments from "../Attachments/Attachments";
import OverviewSettings from "../OverviewSettings/OverviewSettings";
import { Link, useParams } from "react-router-dom";
import { useChatMessages } from "@/features/auth/hooks/useconversation";
import QuickActions from "../QuickAction/QuickAction";
import { usegetshowticket } from "@/features/auth/hooks/usegetshowticket";
import ShowTecket from "../ShowTecket/ShowTecket";

export default function BackTosupport() {
  const { ticketId: ticketIdParam } = useParams<{ ticketId: string }>();
  const ticketId = Number(ticketIdParam);
  const chatId = 1;

  const {
    data: ticket,
    isLoading,
    isError,
    error,
  } = usegetshowticket(ticketId);

  const {
    data: messages = [],
    isLoading: messagesLoading,
    isError: messagesError,
  } = useChatMessages(chatId);

  if (isLoading) {
    return <p>Loading ticket...</p>;
  }

  if (isError) {
    return (
      <p>
        {error instanceof Error ? error.message : "Unable to load ticket"}
      </p>
    );
  }

  if (!ticket) {
    return <p>Ticket not found.</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="relative">
        <Link
          to="/mySupportTickets"
          className="absolute top-2 -left-8 cursor-pointer"
          aria-label="Back to support tickets"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </Link>

        <OverviewSettings name="Back To Support Tickets" />
      </div>

      <div className="container mx-auto py-12 flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex flex-col flex-1 w-full">
          <ShowTecket ticket={ticket} />

          {/* Tabs */}
          <div className="flex mt-6">
            <h2 className="px-12 py-3">Conversation</h2>
            <h2 className="px-12 py-3">Attachments</h2>
          </div>

          {/* Conversations */}
          <div className="flex flex-col gap-3 rounded-3xl border p-8">
            {messagesLoading ? (
              <p>Loading messages...</p>
            ) : messagesError ? (
              <p>Unable to load messages.</p>
            ) : messages.length === 0 ? (
              <p>No messages yet.</p>
            ) : (
              messages.map((message) => (
                <div key={message.id} className="flex gap-2">
                  <IconM data={message.sender.name?.[0] ?? "?"} />
                  <Conversation
                    name={message.sender.name}
                    date={new Date(message.created_at).toLocaleString()}
                    description={message.body}
                  />
                </div>
              ))
            )}
          </div>

          {/* Message Input */}
          <div className="flex items-center gap-2 mt-3 w-full">
            <div className="flex-1">
              <textarea
                className="w-full resize-none rounded-xl border border-gray-300 p-3 outline-none placeholder:text-blue-400 focus:border-blue-400"
                rows={1}
                placeholder="Type a message..."
                aria-label="Type a message"
              />
            </div>

            <button
              type="button"
              className="flex items-center gap-2 h-[47px] px-6 rounded-full bg-[#161C36] text-white border border-[#5E6061]/40"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M14 4L0 9.2087L7.3684 10.6345L9.2124 18L14 4Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.3711 10.6345L9.4553 8.5507"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Send
            </button>
          </div>
        </div>

        {/* Ticket Details */}
        <div className="flex flex-col gap-4 w-full lg:w-[350px]">
          <div className="border rounded-2xl p-4">
            <TextInfo ticket={ticket} />
          </div>

          <RelatedToInfo ticket={ticket} />

          <QuickActions
            ticketId={ticket.id}
            chatId={chatId}
            category={ticket.category}
            subject={ticket.subject}
          />

          <Attachments />
        </div>
      </div>
    </div>
  );
}
