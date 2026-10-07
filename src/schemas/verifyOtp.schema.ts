import { z } from "zod";

export const VerifyOtpSchema = z.object({
  otp: z
    .string({ required_error: "OTP is required" })
    .length(6, { message: "OTP must be 6 characters" })
    .regex(/^\d+$/, { message: "OTP must contain only numbers" }),
});

export type VerifyOtpType = z.infer<typeof VerifyOtpSchema>;
