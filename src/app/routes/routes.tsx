import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import OverviewPage from "../pages/OverviewPage";

import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import VerifyOtpPage from "@/features/auth/pages/VerifyOtpPage";

import {DashboardLayout} from "@/components/layout/DashboardLayout";

import { PATHS } from "./paths";

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

  // Dashboard routes
  {
    path: PATHS.dashboard,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to={PATHS.overview}
            replace
          />
        ),
      },
      {
        path: "overview",
        element: <OverviewPage />,
      },

    ],
  },

  // Fallback
  {
    path: "*",
    element: (
      <Navigate
        to={PATHS.overview}
        replace
      />
    ),
  },
];

export const router = createBrowserRouter(routes);