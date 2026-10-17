import type { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export default function Button({
  text,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      className={`rounded px-4 py-2 ${
        variant === "primary"
          ? "bg-[var(--primary-900)] text-white"
          : "bg-gray-500 text-black"
      } ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${className}`}
    >
      {text}
    </button>
  );
}