import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import LoginHero from "../../../assets/login-hero.jpg";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import icon from "../../../assets/icon.png";

import {
  ForgotPasswordSchema,
  type ForgotPasswordType,
} from "../../../schemas/forgotPassword.schema";

export default function ForgotPasswordPage() {
   const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (data: ForgotPasswordType) => {
    setError("");
    setSuccess("");
    try {
      console.log(data);  

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess("Verification code sent successfully!");
    } catch {
      setError("Failed to send verification code. Please try again.");
    }
  };
   return (
    <div
      style={{ backgroundImage: `url(${LoginHero})` }}
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
    >
      <img
        src={icon}
        alt="Logo"
        className="absolute top-0 left-15 m-4 h-42 w-auto"
      />

      <h1 className="text-2xl font-semibold text-white mb-2">
        Forgot Password
      </h1>

      <p className="text-sm text-white mb-6 text-center max-w-sm">
        Enter your email address and we&apos;ll send you a verification code.
      </p>


      <form  onSubmit={handleSubmit(onSubmit)}
       className="flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-9 shadow-md">
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full box-border px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
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
  );
}
