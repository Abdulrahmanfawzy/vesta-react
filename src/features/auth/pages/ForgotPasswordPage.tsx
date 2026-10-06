import LoginHero from "../../../assets/login-hero.jpg";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import icon from "../../../assets/icon.png";
export default function ForgotPasswordPage() {
  return (
    <div
      style={{ backgroundImage: `url(${LoginHero})` }}
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
    >
      <img
        src={icon}
        alt="Logo"
        className="absolute top-0 left-15 m-4 h-42 w-auto "
      />
      <h1 className="text-2xl font-semibold text-white mb-2">
        Forgot Password
      </h1>

      <p className="text-sm text-white mb-6 text-center max-w-sm">
        Enter your email address and we&apos;ll send you a verification code.
      </p>

      <form className="flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-9 shadow-md">
        <Input
          type="email"
          placeholder="Enter your email"
          value=""
          onChange={() => {}}
          className="w-full box-border px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button
          text="Send Code"
          onClick={() => {}}
          variant="primary"
          className="w-full text-white"
        />

        <button
          type="button"
          className="text-sm text-gray-500 hover:text-gray-900"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}
