import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import LoginHero from "@/assets/login-hero.jpg";
import Button from "@/components/ui/button";
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

export default function VerifyOtpPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [apiError, setApiError] = useState("");

  const email = (
    location.state as { email?: string } | null
  )?.email;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyOtpType>({
    resolver: zodResolver(VerifyOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: VerifyOtpType) => {
    setApiError("");

    if (!email) {
      setApiError(
        "Email is missing. Please start from Forgot Password."
      );
      return;
    }

    try {
      const response = await AuthService.verifyOtp({
        email,
        code: data.otp,
      });

      const resetToken = response.data?.reset_token;

      if (!response.success || !resetToken) {
        setApiError(
          response.message ||
            "Verification failed. Reset token is missing."
        );
        return;
      }

      navigate(PATHS.resetPasswordPath, {
        state: {
          resetToken,
        },
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message;

        setApiError(
          typeof message === "string"
            ? message
            : "Verification failed. Please try again."
        );

        console.error(
          "Verify OTP API error:",
          error.response?.data
        );
      } else {
        setApiError("Something went wrong. Please try again.");
      }
    }
  };

  const handleResendCode = () => {
    if (!email) {
      navigate(PATHS.forgotPassword);
      return;
    }

    setApiError("Resend Code API is not connected yet.");
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
                  onChange={field.onChange}
                >
                  <InputOTPGroup>
                  <div className="flex justify-center gap-3">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <InputOTPSlot

                        key={index}
                        index={index}
                        className="h-12 w-12 rounded-md border border-gray-300 text-lg font-semibold"
                      />
                    ))}
                      </div>

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
            text={isSubmitting ? "Verifying..." : "Verify"}
            onClick={handleSubmit(onSubmit)}
            variant="primary"
            disabled={isSubmitting}
            className="w-full text-white"
          />

          <button
            type="button"
            onClick={handleResendCode}
            disabled={isSubmitting}
            className="text-sm text-gray-500 hover:text-gray-900 disabled:opacity-50"
          >
            Resend Code
          </button>
        </form>
      </div>
    </div>
  );
}
