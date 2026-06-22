/**
 * Loader Component
 */

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
    </div>
  );
}