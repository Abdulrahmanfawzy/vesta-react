import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import LoginHero from "@/assets/login-hero.jpg";
import icon from "@/assets/icon.png";
import Button from "@/components/ui/button";
import Input from "@/components/ui/Input";

import {
  ForgotPasswordSchema,
  type ForgotPasswordType,
} from "@/schemas/forgotPassword.schema";

import { AuthService } from "../services/auth.services";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (data: ForgotPasswordType) =>
      AuthService.forgotPassword({
        email: data.email,
      }),

    onSuccess: (response, variables) => {
      if (!response.success) {
        return;
      }

      navigate("/verify-otp", {
        state: { email: variables.email },
      });
    },
  });

  const onSubmit = (data: ForgotPasswordType) => {
    forgotPasswordMutation.mutate(data);
  };

  const serverMessage = axios.isAxiosError(
    forgotPasswordMutation.error
  )
    ? forgotPasswordMutation.error.response?.data?.message
    : forgotPasswordMutation.error instanceof Error
      ? forgotPasswordMutation.error.message
      : undefined;

  const apiError = forgotPasswordMutation.isError
    ? typeof serverMessage === "string"
      ? serverMessage
      : "Failed to send the verification code. Please try again."
    : forgotPasswordMutation.isSuccess &&
        !forgotPasswordMutation.data.success
      ? forgotPasswordMutation.data.message ||
        "Unable to send the verification code."
      : "";

  const isLoading = forgotPasswordMutation.isPending;

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
        <h1 className="mb-2 text-2xl font-semibold text-white">
          Forgot Password
        </h1>

        <p className="mb-6 max-w-sm text-center text-sm font-semibold text-white">
          Enter your email address and we&apos;ll send you a
          verification code.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-9 shadow-md"
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Enter your email"
                disabled={isLoading}
                className="box-border w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />

          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}

          {apiError && (
            <p
              role="alert"
              className="text-sm text-red-600"
            >
              {apiError}
            </p>
          )}

          <Button
            text={isLoading ? "Sending..." : "Send Code"}
            variant="primary"
            onClick={() => {}}
            disabled={isLoading}
            className="w-full text-white"
          />

          <Link
            to="/login"
            className="text-center text-sm text-gray-500 hover:text-gray-900"
          >
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}
