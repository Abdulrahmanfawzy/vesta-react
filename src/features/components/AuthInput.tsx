import {Input} from "../../components/ui/input";
import type {InputHTMLAttributes} from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export default function AuthInput({ value, onChange, placeholder, disabled, label, error }: AuthInputProps) {
  return (
    <div>
      <label>{label}</label>
      <Input value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
