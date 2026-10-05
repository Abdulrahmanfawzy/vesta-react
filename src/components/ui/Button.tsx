type ButtonProps = {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;

}

export default function Button({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-black'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {text}
    </button>
  )
}
