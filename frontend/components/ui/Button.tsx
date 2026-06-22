/**
 * Button Component
 * Props:
 * variant, size, disabled, onClick
 */

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );
}