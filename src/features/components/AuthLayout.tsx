import { ReactNode } from "react";
interface AuthLayoutProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-6 py-8">
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
