import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import LoginHero from "@/assets/login-hero.jpg";
import Button from "@/components/ui/Button";
import icon from "@/assets/icon.png";

import {
  VerifyOtpSchema,
  type VerifyOtpType,
} from "@/schemas/verifyOtp.schema";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function VerifyOtpPage() {
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
    console.log(data);

    // Temporary API simulation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("OTP verified successfully!");
  };

  return (
    <div
      style={{ backgroundImage: `url(${LoginHero})` }}
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Logo */}
      <img
        src={icon}
        alt="Logo"
        className="absolute left-15 top-0 z-10 m-4 h-42 w-auto"
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center">
        <h1 className="mb-2 text-2xl font-semibold text-white">
          Verify OTP
        </h1>

        <p className="mb-6 max-w-sm text-center text-sm font-semibold text-white">
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
              <div className="flex justify-center">
                <InputOTP
                  maxLength={4}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={0}
                      className="m-3 border border-gray-300"
                    />
                    <InputOTPSlot
                      index={1}
                      className="m-3 border border-gray-300"
                    />
                    <InputOTPSlot
                      index={2}
                      className="m-3 border border-gray-300"
                    />
                    <InputOTPSlot
                      index={3}
                      className="m-3 border border-gray-300"
                    />
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
