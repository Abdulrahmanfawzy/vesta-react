import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import LoginHero from "@/assets/login-hero.jpg";
import icon from "@/assets/icon.png";

import {
  VerifyOtpSchema,
  type VerifyOtpType,
} from "@/schemas/verifyOtp.schema";

import { AuthService } from "@/features/auth/services/auth.services";
import { PATHS } from "@/app/routes/paths";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import Button from "@/components/ui/button";

export default function VerifyOtpPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = (
    location.state as { email?: string } | null
  )?.email;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyOtpType>({
    resolver: zodResolver(VerifyOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: (data: VerifyOtpType) => {
      if (!email) {
        throw new Error(
          "Email is missing. Please start from Forgot Password."
        );
      }

      return AuthService.verifyOtp({
        email,
        code: data.otp,
      });
    },

    onSuccess: (response) => {
      const resetToken = response.data?.reset_token;

      if (!response.success || !resetToken) {
        return;
      }

      navigate(PATHS.resetPasswordPath, {
        state: { resetToken },
      });
    },
  });

  const onSubmit = (data: VerifyOtpType) => {
    verifyOtpMutation.mutate(data);
  };

  const serverMessage = axios.isAxiosError(
    verifyOtpMutation.error
  )
    ? verifyOtpMutation.error.response?.data?.message
    : verifyOtpMutation.error instanceof Error
      ? verifyOtpMutation.error.message
      : undefined;

  const apiError = verifyOtpMutation.isError
    ? typeof serverMessage === "string"
      ? serverMessage
      : "Verification failed. Please try again."
    : verifyOtpMutation.isSuccess &&
        (!verifyOtpMutation.data.success ||
          !verifyOtpMutation.data.data?.reset_token)
      ? verifyOtpMutation.data.message ||
        "Verification failed. Reset token is missing."
      : "";

  const isLoading = verifyOtpMutation.isPending;

  const handleResendCode = () => {
    if (!email) {
      navigate(PATHS.forgotPassword);
      return;
    }

    // TODO: Connect to the resend OTP API.
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
        className="absolute left-6 top-6 z-10 h-20 w-auto sm:h-28"
      />

      <div className="relative z-10 flex w-full flex-col items-center">
        <h1 className="mb-2 text-2xl font-semibold text-white">
          Verify OTP
        </h1>

        <p className="mb-6 max-w-sm text-center text-sm font-semibold text-white">
          Enter the verification code sent to your email.

          {email && (
            <span className="mt-1 block">{email}</span>
          )}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-9 shadow-md"
        >
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    verifyOtpMutation.reset();
                  }}
                >
                  <InputOTPGroup>
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="h-12 w-12 rounded-md border border-gray-300 text-lg font-semibold"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
            )}
          />

          {errors.otp && (
            <p className="text-center text-sm text-red-500">
              {errors.otp.message}
            </p>
          )}

          {apiError && (
            <p
              role="alert"
              className="text-center text-sm text-red-600"
            >
              {apiError}
            </p>
          )}

          <Button
            text={isLoading ? "Verifying..." : "Verify"}
            variant="primary"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
            className="w-full text-white"
          />

          <button
            type="button"
            onClick={handleResendCode}
            disabled={isLoading}
            className="text-sm text-gray-500 hover:text-gray-900 disabled:opacity-50"
          >
            Resend Code
          </button>
        </form>
      </div>
    </div>
  );
}

