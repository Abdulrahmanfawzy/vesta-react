
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PATHS } from "./paths";

export default function ProtectedRoute() {
  const location = useLocation();
  const token = sessionStorage.getItem("access_token");

  if (!token) {
    return (
      <Navigate
        to={PATHS.login}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}
