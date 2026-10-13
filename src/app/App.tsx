// import { RouterProvider } from "react-router-dom";

// <<<<<<< HEAD
// import BackTosupport from "@/components/BackTosupport/BackTosupport";
// import AppRoutes from "./routes/routes";
// =======
// import { router } from "./routes/routes";
// >>>>>>> 573bb332dbc996166f48a58e35cfc7110efa970f

// import ContactSupport from "@/components/ContactSupport/ContactSupport";
// import Faqs from "@/components/Faqs/Faqs";
// import Settings from "@/components/Settings/Settings";
// import { Link, Route, Routes } from "react-router-dom";
// import { Toaster } from 'sonner'
// import MySupportText from "@/components/MySupportText/MySupportText";
// import Tabletickets from "@/components/Tabletickets/Tableteckets";

  

// function App() {
// <<<<<<< HEAD





//   return <div>

 
//   <Toaster position="top-right" />


// <Routes>
//    <Route path="/" element={<Settings />} />
// <Route   path='/fAQs' element={<Faqs/>}    />
// <Route   path='/contactSupport' element={<ContactSupport/>}    />
// <Route   path='/backtosupport' element={<BackTosupport/>}    />
// <Route   path='/mySupportTickets' element={<Tabletickets/>}    />

// </Routes>

//   </div>




// }

// export default App
// =======
//   return <RouterProvider router={router} />;
// }

// export default App;
// >>>>>>> 573bb332dbc996166f48a58e35cfc7110efa970f







import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { router } from "./routes/routes";


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />





    </>
  );
}

export default App;