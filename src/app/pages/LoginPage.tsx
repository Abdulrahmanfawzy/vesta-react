import LoginHero from "../../assets/login-hero.jpg";
import icon from "../../assets/icon.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginType } from "../../schemas/login.schema";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginType) => {
    setError("");
    setSuccess("");
    try {
      console.log(data);

      // Temporary API simulation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Temporary success response
      setSuccess("Login successful!");
    } catch {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

return (
  <div
    style={{ backgroundImage: `url(${LoginHero})` }}
    className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/15" />

    {/* Logo */}
    <img
      src={icon}
      alt="Logo"
      className="absolute top-0 left-15 z-10 m-4 h-42 w-auto"
    />

    {/* Content */}
    <div className="relative z-10 flex w-full flex-col items-center">
      <h1 className="mb-6 text-2xl font-semibold text-white">
        Login
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-9 shadow-md"
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              placeholder="Enter your email"
              {...field}
              className="w-full box-border px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full box-border px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}

        <Link
          to="/forgot-password"
          className="text-right text-sm text-blue-600 hover:text-blue-800"
        >
          Forgot password?
        </Link>

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
          text={isSubmitting ? "Logging in..." : "Login"}
          onClick={() => {}}
          variant="primary"
          disabled={isSubmitting}
          className="w-30 text-white m-auto"
        />
      </form>
    </div>
  </div>
);

}
