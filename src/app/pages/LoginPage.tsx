
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import LoginHero from "@/assets/login-hero.jpg";
import icon from "@/assets/icon.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/button";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginType } from "@/schemas/login.schema";
import { AuthService } from "@/features/auth/services/auth.services";

export default function LoginPage() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginType) => {
    setApiError("");

    try {
      const response = await AuthService.login({
        ...data,
        device_name: "web",
      });

      if (!response.success) {
        setApiError(response.message || "Login failed.");
        return;
      }

      const loginResponse = response as typeof response & {
        data?: {
          requires_2fa?: boolean;
          access_token?: string;
        };
        requires_2fa?: boolean;
        access_token?: string;
      };

      const requires2FA =
        loginResponse.data?.requires_2fa ?? loginResponse.requires_2fa;

      if (requires2FA) {
        navigate("/verify-otp", {
          state: { email: data.email },
        });
        return;
      }

      // Authentication succeeded.
      // Connect token handling to your auth context next.
      const accessToken =
        loginResponse.data?.access_token ?? loginResponse.access_token;

      if (accessToken) {
        sessionStorage.setItem("access_token", accessToken);
      }

      navigate("/dashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setApiError(
          error.response?.data?.message ||
            "Unable to log in. Check your credentials and try again."
        );
      } else {
        setApiError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${LoginHero})` }}
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4"
    >
      <div className="absolute inset-0 bg-black/40" />

      <img
        src={icon}
        alt="Logo"
        className="absolute left-15 top-0 z-10 m-4 h-42 w-auto"
      />

      <div className="relative z-10 flex w-full flex-col items-center">
        <h1 className="mb-6 text-2xl font-semibold text-white">
          Login
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-9 shadow-md"
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Enter your email"
                {...field}
                className="box-border w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />

          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Enter your password"
                {...field}
                className="box-border w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />

          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}

          {apiError && (
            <p role="alert" className="text-sm text-red-600">
              {apiError}
            </p>
          )}

          <Link
            to="/forgot-password"
            className="text-right text-sm text-blue-600 hover:text-blue-800"
          >
            Forgot password?
          </Link>

          <Button
            text={isSubmitting ? "Logging in..." : "Login"}
            onClick={() => {}}
            variant="primary"
            disabled={isSubmitting}
            className="m-auto w-30 text-white"
          />
        </form>
      </div>
    </div>
  );
}
