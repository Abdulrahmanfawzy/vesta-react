import api from "../../../services/api";
import type {
  LoginCredentials,
  LoginResponse,
  ForgotPasswordResponse,
  ForgotPasswordCredentials,
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
    const response = await api.post<ForgotPasswordResponse>(
      "/auth/forgotPassword",
      credentials
    );

    return response.data;
  },
};