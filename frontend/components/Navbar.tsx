import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">EcoStay AI</h1>

        <div className="flex gap-6">
          <Link href="/homestays">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
           <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}