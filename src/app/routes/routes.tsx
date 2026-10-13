import {
  createBrowserRouter,
  Navigate,
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
];

export const router = createBrowserRouter(routes);
