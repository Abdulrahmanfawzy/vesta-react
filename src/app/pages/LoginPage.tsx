import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PATHS } from "../routes/paths";
import LoginHero from "@/assets/login-hero.jpg";
import icon from "@/assets/icon.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/button";
import { LoginSchema, type LoginType } from "@/schemas/login.schema";
import { AuthService } from "@/features/auth/services/auth.services";

export default function LoginPage() {
  const navigate = useNavigate();
  const submittingRef = useRef(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: (data: LoginType) =>
      AuthService.login({
        ...data,
        device_name: "web",
      }),

    onSuccess: (response, variables) => {
      if (!response.success) return;

      if (response.data?.requires_2fa) {
        navigate(PATHS.verifyOtp, {
          state: { email: variables.email },
        });
        return;
      }

      const { access_token, refresh_token } = response.data ?? {};

      if (!access_token) {
        console.error("Login succeeded without an access token.");
        return;
      }

      sessionStorage.setItem("access_token", access_token);

      if (refresh_token) {
        sessionStorage.setItem("refresh_token", refresh_token);
      }

      navigate(PATHS.overview, { replace: true });
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        console.error("Login API Error:", {
          message: error.message,
          code: error.code,
          url: error.config?.baseURL
            ? `${error.config.baseURL}${error.config.url ?? ""}`
            : error.config?.url,
          status: error.response?.status,
          response: error.response?.data,
        });
      } else {
        console.error("Unexpected login error:", error);
      }
    },

    onSettled: () => {
      submittingRef.current = false;
    },
  });

  const onSubmit = (data: LoginType) => {
    // Guard against double submission before React re-renders.
    if (submittingRef.current || loginMutation.isPending) return;
    submittingRef.current = true;
    loginMutation.mutate(data);
  };

  const serverMessage = axios.isAxiosError(loginMutation.error)
    ? loginMutation.error.response?.data?.message
    : undefined;

  const apiError = loginMutation.isError
    ? typeof serverMessage === "string"
      ? serverMessage
      : axios.isAxiosError(loginMutation.error) &&
          loginMutation.error.code === "ERR_NETWORK"
        ? "Unable to connect to the server. Check your connection."
        : "Unable to log in. Check your credentials and try again."
    : loginMutation.data && !loginMutation.data.success
      ? loginMutation.data.message || "Login failed."
      : "";

  return (
    <div
      style={{ backgroundImage: `url(${LoginHero})` }}
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4"
    >
      <div className="absolute inset-0 bg-black/40" />

      <img
        src={icon}
        alt="Logo"
        className="absolute left-6 top-6 z-10 h-20 w-auto sm:h-28"
      />

      <div className="relative z-10 flex w-full flex-col items-center">
        <h1 className="mb-6 text-2xl font-semibold text-white">Login</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-9 shadow-md"
        >
          <div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="box-border w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="box-border w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {apiError && (
            <p role="alert" className="text-sm text-red-600">
              {apiError}
            </p>
          )}

          <Link
            to={PATHS.forgotPassword}
            className="text-right text-sm text-blue-600 hover:text-blue-800"
          >
            Forgot password?
          </Link>

          <Button
            type="submit"
            text={loginMutation.isPending ? "Logging in..." : "Login"}
            disabled={loginMutation.isPending}
            variant="primary"
            className="m-auto w-30 text-white"
          />
        </form>
      </div>
    </div>
  );
}