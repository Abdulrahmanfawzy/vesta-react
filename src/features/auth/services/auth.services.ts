
import axios from "axios";
import api from "../../../services/api";

import type {
  LoginCredentials,
  LoginResponse,
  ForgotPasswordResponse,
  ForgotPasswordCredentials,
  VerifyOtpCredentials,
  VerifyOtpResponse,
  ResetPasswordCredentials,
  ResetPasswordResponse,
} from "../types/auth.types";

export const AuthService = {
  async login(
    credentials: LoginCredentials
  ): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
      "/auth/login",
      credentials
    );

    return response.data;
  },

  async forgotPassword(
    credentials: ForgotPasswordCredentials
  ): Promise<ForgotPasswordResponse> {
    try {
      const response = await api.post<ForgotPasswordResponse>(
        "/auth/forgotPassword",
        credentials
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Forgot password request failed:", {
          url: error.config?.url,
          status: error.response?.status,
          response: error.response?.data,
        });
      } else {
        console.error("Unexpected forgot password error:", error);
      }

      throw error;
    }
  },

  async verifyOtp(
    credentials: VerifyOtpCredentials
  ): Promise<VerifyOtpResponse> {
    const response = await api.post<VerifyOtpResponse>(
      "/auth/forgot-password/verify",
      credentials
    );

    return response.data;
  },

  async resetPassword(
    credentials: ResetPasswordCredentials
  ): Promise<ResetPasswordResponse> {
    const response = await api.post<ResetPasswordResponse>(
      "/auth/resetPassword",
      credentials
    );

    return response.data;
  },
};
