



import  { useState } from "react";

import SettingsTabs from "../SettingsTabs/SettingsTabs";
import HelpCenter from "../HelpCenter/HelpCenter";

import OverviewSettings from "../OverviewSettings/OverviewSettings";


export default function Settings() {



 const [activeTab, setActiveTab] = useState<"settings" | "help">("settings");

    return (



<main className="mx-auto w-full max-w-5xl px-6 py-8 text-[#161C36]">
    




{/* 
<OverviewSettings  name="Settings"  

/> */}


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


