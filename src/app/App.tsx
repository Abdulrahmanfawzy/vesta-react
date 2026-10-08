
import BackTosupport from "@/components/BackTosupport/BackTosupport";
import AppRoutes from "./routes/routes";

import ContactSupport from "@/components/ContactSupport/ContactSupport";
import Faqs from "@/components/Faqs/Faqs";
import Settings from "@/components/Settings/Settings";
import { Link, Route, Routes } from "react-router-dom";
import { Toaster } from 'sonner'
import MySupportText from "@/components/MySupportText/MySupportText";
import Tabletickets from "@/components/Tabletickets/Tableteckets";

  

function App() {





  return <div>

 
  <Toaster position="top-right" />


<Routes>
   <Route path="/" element={<Settings />} />
<Route   path='/fAQs' element={<Faqs/>}    />
<Route   path='/contactSupport' element={<ContactSupport/>}    />
<Route   path='/backtosupport' element={<BackTosupport/>}    />
<Route   path='/mySupportTickets' element={<Tabletickets/>}    />

</Routes>

  </div>




}

export default App
