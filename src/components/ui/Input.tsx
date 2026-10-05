type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}
export default function Input({value, onChange, placeholder ='', disabled = false}: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}
