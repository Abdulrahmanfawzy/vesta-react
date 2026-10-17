import { z } from "zod";

export const VerifyOtpSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, "OTP must be exactly 6 digits"),
});

export type VerifyOtpType = z.infer<typeof VerifyOtpSchema>;