

import { ChevronRight } from '@/utils/ChevroletRight';
import React, { useState } from 'react'
import AccountandProfile from '../AccountandProfile/AccountandProfile';
import RefundSettings from '../RefundSettings/RefundSettings';


export default function SettingsTabs() {
    const[isOpenAccount , setisOpenAccount] = useState(false);
    const[isRefundSettings , setisRefundSettings] = useState(false);

  const [enabled, setEnabled] = useState(true);

  return (
    <div>

      <section className="mt-6">
      
        <button
         onClick={()=>setisOpenAccount((open)=>(!open))}
          type="button"
          className="flex w-full items-center justify-between border-b border-gray-200 py-4 text-left"
        >
          <span className="border-accent">Account and Profile</span>
    
 <ChevronRight className={`${isOpenAccount ?  'rotate-90' : '' }  duration-200 transition-transform   `}    />


        </button>


{isOpenAccount&&<div> <AccountandProfile/> </div>}






        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <span>Notification</span>
          <img
          onClick={() => setEnabled((prev) => !prev)}
           
            src={enabled ? "/ion_switch.png" : "./switch.png"}
            width="40"
            height="24"
            alt="Notifications enabled"
          />

      


        </div>

        <button 
        onClick={()=>setisRefundSettings((open)=>(!open))}
          type="button"
          className="flex w-full items-center justify-between py-4 text-left"
        >
          <span>Return &amp; Refund Settings</span>
      
        <ChevronRight className={` duration-500 transition ${isRefundSettings ? 'rotate-90' : '' }  `}   />

        </button>

 
   {isRefundSettings&& 
   
   <div>
 
<RefundSettings
  data="Return policy"
  fileUrl="/Return-Policy"
  fileFormat="PDF"
  fileSize="2.4 MB"
/>



<RefundSettings
  data="Return period"
  fileUrl="/files/Return-Policy"
  fileFormat="PDF"
  fileSize="2.4 MB"
/>



<RefundSettings
  data="Accepted return condition"
  fileUrl="/files/Return-Policy"
  fileFormat="PDF"
  fileSize="2.4 MB"
/>



<RefundSettings
  data="extange policy"
  fileUrl="/files/Return-Policy"
  fileFormat="PDF"
  fileSize="2.4 MB"
/>

<RefundSettings
  data="who pays return shipping"
  fileUrl="/files/Return-Policy"
  fileFormat="PDF"
  fileSize="2.4 MB"
/>





     </div>}
   


      </section>

    </div>
  )
}
