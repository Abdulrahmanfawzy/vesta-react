
import { z } from "zod";

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    password_confirmation: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine(
    (data) =>
      data.password === data.password_confirmation,
    {
      message: "Passwords do not match",
      path: ["password_confirmation"],
    },
  );

export type ResetPasswordType = z.infer<
  typeof ResetPasswordSchema
>;
