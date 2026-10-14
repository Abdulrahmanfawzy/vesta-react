




import type { SupportTicket } from "@/features/auth/types/tecketInfo.types";

type RelatedToInfoProps = {
  ticket: SupportTicket;
};

export default function RelatedToInfo({ ticket }: RelatedToInfoProps) {
  return (
    <div>
      <h2 className="font-semibold">Related Information</h2>

 <div className='flex justify-between'>
 <span className='text-gray-400'> Type  </span>
 <span > Report isuue  </span>

 </div>



      <div className="flex justify-between">

        <span className="text-gray-400">Category</span>
        <span>{ticket.category || "—"}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">Assigned To</span>
    
        
        <span>{ticket.seller?.name || "Unassigned"}</span>
        
      </div>
    </div>
  );
}