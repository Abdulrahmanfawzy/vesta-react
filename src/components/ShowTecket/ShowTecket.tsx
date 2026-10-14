
import type { SupportTicket } from "@/features/auth/types/tecketInfo.types";

type ShowTecketProps = {
  ticket: SupportTicket;
};

export default function ShowTecket({ ticket }: ShowTecketProps) {
  return (
    <div className="flex justify-between gap-14 rounded-2xl border p-2">
      <div className="flex gap-3">
       
<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="47" height="47" rx="23.5" fill="#E1EDFC" />
                  <path
                    d="M27.875 13.2916V16.2083M27.875 22.0416V24.9583M27.875 30.7916V33.7083M13.2917 13.2916H33.7083C34.4819 13.2916 35.2237 13.5989 35.7707 14.1459C36.3177 14.6929 36.625 15.4347 36.625 16.2083V20.5833C35.8515 20.5833 35.1096 20.8906 34.5626 21.4376C34.0156 21.9845 33.7083 22.7264 33.7083 23.5C33.7083 24.2735 34.0156 25.0154 34.5626 25.5624C35.1096 26.1093 35.8515 26.4166 36.625 26.4166V30.7916C36.625 31.5652 36.3177 32.307 35.7707 32.854C35.2237 33.401 34.4819 33.7083 33.7083 33.7083H13.2917C12.5181 33.7083 11.7763 33.401 11.2293 32.854C10.6823 32.307 10.375 31.5652 10.375 30.7916V26.4166C11.1485 26.4166 11.8904 26.1093 12.4374 25.5624C12.9844 25.0154 13.2917 24.2735 13.2917 23.5C13.2917 22.7264 12.9844 21.9845 12.4374 21.4376C11.8904 20.8906 11.1485 20.5833 10.375 20.5833V16.2083C10.375 15.4347 10.6823 14.6929 11.2293 14.1459C11.7763 13.5989 12.5181 13.2916 13.2917 13.2916Z"
                    stroke="#032271"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
        <div>
          <h2 className="mt-2 font-semibold">
             #TKT-{String(ticket.id).padStart(5, "0")} 
             
             ;
          
            </h2>
          <h2 className="mt-2 font-semibold">{ticket.subject}</h2>
          <span className="text-gray-400 block">
            {ticket.description}
            The return report for the last week is not  showing  the correct <br/> numbers.please check and advise
          </span>
        </div>
      </div>

      <div className="min-w-40">
       <span className=" bg-[var(--secondary-300)] rounded-3xl  px-8 py-1 text-white">
  {ticket.status}
</span>
        <div className="mt-3 text-sm">
          <span className="text-gray-400">Created at</span>
          <br />
          <span>{new Date(ticket.created_at).toLocaleString()}</span>
          <br />

          <span className="text-gray-400">Last updated</span>
          <br />
          <span>{new Date(ticket.updated_at).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}