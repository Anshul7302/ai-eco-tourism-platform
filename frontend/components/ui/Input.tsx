/**
 * Input Component
 * Props:
 * label, placeholder, type, value, onChange, error
 */

type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <div>
      <label className="block mb-2">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 rounded w-full"
      />

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}