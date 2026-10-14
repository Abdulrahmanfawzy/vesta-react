import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";

export default function PublicRoute() {
  const token = localStorage.getItem("access_token");

  if (token) {
    return <Navigate to={PATHS.overview} replace />;
  }

  return <Outlet />;
}
