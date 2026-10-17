import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import VerifyOtpPage from "@/features/auth/pages/VerifyOtpPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import OverviewPage from "../pages/OverviewPage";
import AnalysisPage from "../pages/AnalysisPage";
import ReturnsMainPage from "@/features/Returns/components/ReturnsMainPage";
import Settings from "@/components/Settings/Settings";
import Faqs from "@/components/Faqs/Faqs";
// import ContactSupport from "@/components/ContactSupport";
import BackTosupport from "@/components/BackTosupport/BackTosupport";
import ReturnsTable from "@/features/Returns/components/ReturnsTable";

import { PATHS } from "./paths";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const routes: RouteObject[] = [
  // Public routes: only for unauthenticated users
  {
    element: <PublicRoute />,
    children: [
      { path: PATHS.login, element: <LoginPage /> },
      { path: PATHS.forgotPassword, element: <ForgotPasswordPage /> },
      { path: PATHS.verifyOtp, element: <VerifyOtpPage /> },
      { path: PATHS.resetPasswordPath, element: <ResetPasswordPage /> },
    ],
  },

  // Protected routes: require authentication
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: PATHS.dashboard,
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Navigate to={PATHS.overview} replace /> },
          { path: "overview", element: <OverviewPage /> },
          { path: "returns", element: <ReturnsMainPage /> },
          { path: "analysis", element: <AnalysisPage /> },

          { path: "settings", element: <Settings /> },
          { path: "faqs", element: <Faqs /> },
          // { path: "contactSupport", element: <ContactSupport /> },
          { path: "backtosupport/:ticketId", element: <BackTosupport /> },
          { path: "mySupportTickets", element: <ReturnsTable /> },
        ],
      },
    ],
  },

  // Fallback
  { path: "*", element: <Navigate to={PATHS.login} replace /> },
];

export const router = createBrowserRouter(routes);