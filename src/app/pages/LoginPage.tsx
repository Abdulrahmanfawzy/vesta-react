import LoginHero from "../../assets/login-hero.jpg";
import icon from "../../assets/icon.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div
      style={{ backgroundImage: `url(${LoginHero})` }}
      className=" relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
    >
    <img
  src={icon}
  alt="Logo"
  className="absolute top-0 left-15 m-4 h-42 w-auto "
/>

      <h1 className="mb-6 text-2xl font-semibold text-white">
        Login
      </h1>

      <form className="flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-9 shadow-md">
       <Input
  type="email"
  placeholder="Enter your email"
  value=""
  onChange={() => {}}
  className="w-full box-border px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<Input
  type="password"
  placeholder="Enter your password"
  value=""
  onChange={() => {}}
  className="w-full box-border px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
<p
//   to="/forgot-password"
  className="text-right text-sm text-blue-600 hover:text-blue-800"
>
  Forgot password?
</p>
      <Button
  text="Login"
  onClick={() => {}}
  variant="primary"
  className="w-30  text-white m-auto"
/>
      </form>
    </div>
  );
}
