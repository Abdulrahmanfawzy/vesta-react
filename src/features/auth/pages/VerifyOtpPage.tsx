import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import LoginHero from "../../../assets/login-hero.jpg";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import icon from "../../../assets/icon.png";

import {
  VerifyOtpSchema,
  type VerifyOtpType,
} from "../../../schemas/verifyOtp.schema";

export default function VerifyOtpPage() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    setError("");
    setSuccess("");

    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess("OTP verified successfully!");

      navigate("/reset-password");
    } catch {
      setError("Failed to verify OTP. Please try again.");
    }
  };


return (
  <div
    style={{ backgroundImage: `url(${LoginHero})` }}
    className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/18" />

    {/* Logo */}
    <img
      src={icon}
      alt="Logo"
      className="absolute top-0 left-15 z-10 m-4 h-42 w-auto"
    />

    {/* Content */}
    <div className="relative z-10 flex w-full flex-col items-center">
      <h1 className="text-2xl font-semibold text-white mb-2">
        Verify OTP
      </h1>

     <p className="text-sm font-semibold text-white mb-6 text-center max-w-sm">
  Enter the verification code sent to your email.
</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-9 shadow-md"
      >
        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Enter OTP"
              maxLength={6}
              inputMode="numeric"
              {...field}
              className="w-full box-border rounded-md border border-gray-300 px-5 py-3 text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />

        {errors.otp && (
          <p className="text-sm text-red-500">
            {errors.otp.message}
          </p>
        )}

        {error && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        {success && (
          <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-600">
            {success}
          </p>
        )}

        <Button
          text={isSubmitting ? "Verifying..." : "Verify"}
          onClick={() => {}}
          variant="primary"
          disabled={isSubmitting}
          className="w-full text-white"
        />

        <button
          type="button"
          className="text-sm text-gray-500 hover:text-gray-900"
        >
          Resend Code
        </button>
      </form>
    </div>
  </div>
);

}
