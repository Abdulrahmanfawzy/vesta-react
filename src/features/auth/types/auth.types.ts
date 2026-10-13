export interface AuthUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string | null;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    user: AuthUser;
    requires_2fa: boolean;
    access_token: string;
    refresh_token: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
  device_name: string;
}

export interface ForgotPasswordCredentials {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  data?: {
    otp?: string;
  };
}

export interface VerifyOtpCredentials {
  email: string;
  code: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  data?: {
    reset_token: string;
  };
}

export interface ResetPasswordCredentials {
  reset_token: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
}
