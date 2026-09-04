"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Demo credentials (replace with backend authentication later)
  const ADMIN_EMAIL = "admin@ecostay.com";
  const ADMIN_PASSWORD = "Admin@123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      email === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      localStorage.setItem("admin", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[420px]">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
          EcoStay AI Admin
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full border rounded-lg p-3 outline-none focus:border-green-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 outline-none focus:border-green-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}