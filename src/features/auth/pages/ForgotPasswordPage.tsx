import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import LoginHero from "@/assets/login-hero.jpg";
import Input from "@/components/ui/Input";
import {Button} from "@/components/ui/button";
import icon from "@/assets/icon.png";

import {
  ForgotPasswordSchema,
  type ForgotPasswordType,
} from "@/schemas/forgotPassword.schema";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordType) => {
    console.log(data);

    // Temporary API simulation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    navigate("/verify-otp");
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
          Forgot Password
        </h1>

        <p className="mb-6 max-w-sm text-center text-sm font-semibold text-white">
          Enter your email address and we&apos;ll send you a verification code.
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

          <Button
            text={isSubmitting ? "Sending..." : "Send Code"}
            onClick={() => {}}
            variant="primary"
            disabled={isSubmitting}
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
