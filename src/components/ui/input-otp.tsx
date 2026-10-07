import * as React from "react";
import {
  OTPInput,
  OTPInputContext,
} from "input-otp";

export const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => {
  return (
    <OTPInput
      ref={ref}
      containerClassName={`flex items-center gap-2 ${containerClassName ?? ""}`}
      className={className}
      {...props}
    />
  );
});

InputOTP.displayName = "InputOTP";

export function InputOTPGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center">
      {children}
    </div>
  );
}

export const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  {
    index: number;
    className?: string;
  }
>(({ index, className }, ref) => {
  const context = React.useContext(OTPInputContext);
  const slot = context?.slots[index];

  return (
    <div
      ref={ref}
      className={`relative flex h-12 w-12 items-center justify-center border border-gray-300 text-lg font-medium ${
        index > 0 ? "-ml-px" : ""
      } ${index === 0 ? "rounded-l-md" : ""} ${
        index === 3 ? "rounded-r-md" : ""
      } ${slot?.isActive ? "z-10 border-[var(--primary-900)] ring-1 ring-[var(--primary-900)]" : ""} ${
        className ?? ""
      }`}
    >
      {slot?.char}

      {slot?.hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-px animate-pulse bg-black" />
        </div>
      )}
    </div>
  );
});

InputOTPSlot.displayName = "InputOTPSlot";
