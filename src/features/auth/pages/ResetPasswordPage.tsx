import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthService } from "../services/auth.services";
import LoginHero from "@/assets/login-hero.jpg";
import icon from "@/assets/icon.png";

export default function ResetPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const resetToken = location.state?.resetToken as
    | string
    | undefined;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError("");

    if (!resetToken) {
      setError(
        "Reset token is missing. Please verify your OTP again.",
      );
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await AuthService.resetPassword({
        reset_token: resetToken,
        password,
        password_confirmation: confirmPassword,
      });

      if (response.success) {
        navigate("/login", { replace: true });
        return;
      }

      setError(
        response.message || "Unable to reset password.",
      );
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.message;

        console.error(
          "Reset Password API error:",
          err.response?.status,
          err.response?.data,
        );

        setError(
          typeof message === "string"
            ? message
            : "Unable to reset password. Please try again.",
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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
        onSubmit={handleSubmit}
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
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
            minLength={8}
            disabled={loading}
            className="w-full rounded-md border p-3 outline-none focus:border-black"
            placeholder="Enter new password"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1 block text-sm font-medium"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            required
            minLength={8}
            disabled={loading}
            className="w-full rounded-md border p-3 outline-none focus:border-black"
            placeholder="Confirm new password"
          />
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
          disabled={loading}
          className="w-full rounded-md bg-black p-3 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          disabled={loading}
          className="w-full p-2 text-sm text-gray-600 underline hover:text-black"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}
