type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
};

export default function Button({
  text,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
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
