import {
  createBrowserRouter,
  Navigate,
  Route,
  type RouteObject,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import VerifyOtpPage from "@/features/auth/pages/VerifyOtpPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import OverviewPage from "../pages/OverviewPage";
import AnalysisPage from "../pages/AnalysisPage";

import { PATHS } from "./paths";
import ReturnsMainPage from "@/features/Returns/components/ReturnsMainPage";
import Settings from "@/components/Settings/Settings";
import Faqs from "@/components/Faqs/Faqs";
import ContactSupport from "@/components/ContactSupport/ContactSupport";
import BackTosupport from "@/components/BackTosupport/BackTosupport";

import ReturnsTable from "@/features/Returns/components/ReturnsTable";

const routes: RouteObject[] = [
  // Authentication routes
  {
    path: PATHS.login,
    element: <LoginPage />,
  },
  {
    path: PATHS.forgotPassword,
    element: <ForgotPasswordPage />,
  },
  {
    path: PATHS.verifyOtp,
    element: <VerifyOtpPage />,
  },
  {
    path: PATHS.resetPasswordPath,
    element: <ResetPasswordPage />,
  },

  // Dashboard routes
  {
    path: PATHS.dashboard,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={PATHS.overview} replace />,
      },
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "returns",
        element: <ReturnsMainPage />,
      },
      {
        path: "analysis",
        element: <AnalysisPage />,
      },
    ],
  },

  // Fallback
  {
    path: "*",
    element: <Navigate to={PATHS.overview} replace />,
  },








{
  path: PATHS.dashboard,
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <Navigate to={PATHS.settings} replace />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "faqs",
      element: <Faqs />,
    },
    {
      path: "contactSupport",
      element: <ContactSupport />,
    },
    {
      path: "backtosupport/:ticketId",
      element: <BackTosupport />,
    },
    {
      path: "mySupportTickets",
      element: <ReturnsTable />,
    },
  ],
}






// { path: "/settings", element: <Settings /> },
// { path: "/fAQs", element: <Faqs /> },
// { path: "/contactSupport", element: <ContactSupport /> },
// { path: "/backtosupport/:ticketId", element: <BackTosupport /> },
// { path: "/mySupportTickets", element: <Tabletickets /> },

];

export const router = createBrowserRouter(routes);
