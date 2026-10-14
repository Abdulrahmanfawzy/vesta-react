

import React from 'react'
import { Link } from 'react-router-dom'

export default function HelpCenter() {
 
 

const HelpCenterquestion = [
  {path:"/fAQs" , content:"FAQs" } , 
  {path:"/contactSupport" , content:"Contact Support" }, 
  {path:"/mySupportTickets" , content:"My Support Tickets"} 

]


 
 
 
  return (
  
<div className="mt-6">
  {HelpCenterquestion.map((item , index) => (
    <Link to={item.path}
      key={index}
      type="button"
      className="block w-full border-b border-gray-200 py-4 text-left text-sm text-[#161C36]"
    >
    {item.content}
    </Link>
  ))}
</div>



    )
}






