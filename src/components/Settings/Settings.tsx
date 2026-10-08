



import  { ChevronRight } from "@/utils/ChevroletRight";
import React, { useState } from "react";
import AccountandProfile from "../AccountandProfile/AccountandProfile";
import RefundSettings from "../RefundSettings/RefundSettings";
import SettingsTabs from "../SettingsTabs/SettingsTabs";
import HelpCenter from "../HelpCenter/HelpCenter";
import IconM from "../IconM/IconM";
import OverviewSettings from "../OverviewSettings/OverviewSettings";

export default function Settings() {



 const [activeTab, setActiveTab] = useState<"settings" | "help">("settings");

    return (



<main className="mx-auto w-full max-w-5xl px-6 py-8 text-[#161C36]">
      {/* Page header */}
      {/* <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Settings</h1>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-full border border-gray-200 p-2"
          >
    
        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
        
        
        
          </button>

     <IconM  data="M" />
        </div>
      </header> */}

<OverviewSettings  name="Settings"  



/>


      {/* Tabs */}
      <nav className="mt-8 flex gap-8  border-gray-200">
       
<div className="p-6">
     

      <div className="mb-6 flex gap-8">
        <button
          onClick={() => setActiveTab("settings")}
          className={`pb-2 ${
            activeTab === "settings"
              ? "border-b-2 border-slate-900 font-semibold"
              : "text-gray-500"
          }`}
        >
          Settings
        </button>

        <button
          onClick={() => setActiveTab("help")}
          className={`pb-2 ${
            activeTab === "help"
              ? "border-b-2 border-slate-900 font-semibold"
              : "text-gray-500"
          }`}
        >
          Help Center
        </button>
      </div>

     


</div>
   
  
      </nav>




{activeTab == "settings" ?  <SettingsTabs/> : <HelpCenter/> }








    </main>
  );
}


