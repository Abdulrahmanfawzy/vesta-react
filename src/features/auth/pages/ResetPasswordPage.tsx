import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { AuthService } from "../services/auth.services";

import LoginHero from "@/assets/login-hero.jpg";
import icon from "@/assets/icon.png";

import {
  ResetPasswordSchema,
  type ResetPasswordType,
} from "@/schemas/resetPassword.schema";

export default function ResetPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const resetToken = (
    location.state as { resetToken?: string } | null
  )?.resetToken;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: (data: ResetPasswordType) => {
      if (!resetToken) {
        throw new Error(
          "Reset token is missing. Please verify your OTP again."
        );
      }

      return AuthService.resetPassword({
        reset_token: resetToken,
        password: data.password,
        password_confirmation: data.password_confirmation,
      });
    },

    onSuccess: (response) => {
      if (response.success) {
        navigate("/login", { replace: true });
      }
    },
  });

  const onSubmit = (data: ResetPasswordType) => {
    resetPasswordMutation.mutate(data);
  };

  const serverMessage = axios.isAxiosError(
    resetPasswordMutation.error
  )
    ? resetPasswordMutation.error.response?.data?.message
    : resetPasswordMutation.error instanceof Error
      ? resetPasswordMutation.error.message
      : undefined;

  const apiError = resetPasswordMutation.isError
    ? typeof serverMessage === "string"
      ? serverMessage
      : "Unable to reset password. Please try again."
    : resetPasswordMutation.isSuccess &&
        !resetPasswordMutation.data.success
      ? resetPasswordMutation.data.message ||
        "Unable to reset password."
      : "";

  const error = !resetToken
    ? "Reset token is missing. Please verify your OTP again."
    : apiError;

  const isLoading = resetPasswordMutation.isPending;

  return (
    <div
      style={{ backgroundImage: `url(${LoginHero})` }}
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 py-10"
    >
      <div className="absolute inset-0 z-0 bg-black/40" />

      <img
        src={icon}
        alt="Logo"
        className="absolute left-4 top-4 z-10 h-16 w-auto sm:left-8 sm:top-8 sm:h-20"
      />

      <h1 className="relative z-10 mb-2 text-2xl font-bold text-white">
        Reset Password
      </h1>

      <p className="relative z-10 mb-6 text-sm text-white">
        Enter your new password below.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-6 shadow-md sm:p-9"
      >
        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium"
          >
            New Password
          </label>

          <input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="Enter new password"
            disabled={isLoading}
            className="w-full rounded-md border p-3 outline-none focus:border-black disabled:opacity-50"
            {...register("password")}
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="password_confirmation"
            className="mb-1 block text-sm font-medium"
          >
            Confirm Password
          </label>

          <input
            id="password_confirmation"
            type="password"
            autoComplete="new-password"
            placeholder="Confirm new password"
            disabled={isLoading}
            className="w-full rounded-md border p-3 outline-none focus:border-black disabled:opacity-50"
            {...register("password_confirmation")}
          />

          {errors.password_confirmation && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-md bg-red-50 p-3 text-sm text-red-600"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading || !resetToken}
          className="w-full rounded-md bg-black p-3 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          disabled={isLoading}
          className="w-full p-2 text-sm text-gray-600 underline hover:text-black disabled:opacity-50"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}
