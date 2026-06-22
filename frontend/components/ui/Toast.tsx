/**
 * Toast Component
 * Props:
 * message
 */

type ToastProps = {
  message: string;
};

export default function Toast({
  message,
}: ToastProps) {
  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded">
      {message}
    </div>
  );
}