
import api from "../../../services/api";
import type {
  LoginCredentials,
  LoginResponse,
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
};
