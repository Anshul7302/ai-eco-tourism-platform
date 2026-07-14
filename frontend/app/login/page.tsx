"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
  // Save JWT token (if your backend returns one)
  if (data.access_token) {
    localStorage.setItem("token", data.access_token);
  }

  // Save logged-in user
  if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  } else {
    // Temporary fallback until backend returns user details
    localStorage.setItem(
      "user",
      JSON.stringify({
        full_name: email.split("@")[0],
        email: email,
      })
    );
  }

  alert(data.message || "Login successful");

  window.location.href = "/";
} else {
  alert(data.detail || "Login failed");
}
    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-green-700 via-emerald-600 to-teal-700 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

          <div className="hidden lg:flex flex-col justify-center p-12 text-white bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-green-900/60"></div>
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-6">Welcome to EcoStay AI 🌿</h1>
              <p className="text-lg leading-8">
                Discover sustainable homestays, AI-powered travel recommendations,
                and unforgettable eco-tourism experiences.
              </p>

              <div className="mt-10 space-y-4">
                <p>✅ AI Travel Planning</p>
                <p>✅ Verified Eco Homestays</p>
                <p>✅ Secure Booking</p>
                <p>✅ Community Support</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-green-700">Login</h2>
              <p className="text-gray-500 mt-2">
                Sign in to continue your eco-friendly journey.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#" className="text-green-700 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition"
              >
                Login
              </button>

              <div className="relative text-center">
                <span className="bg-white px-3 text-gray-500">OR</span>
                <div className="absolute left-0 right-0 top-1/2 border-t -z-10"></div>
              </div>

              <button
                type="button"
                className="w-full border rounded-xl py-3 hover:bg-gray-100 transition"
              >
                Continue with Google
              </button>

              <button
                type="button"
                className="w-full border rounded-xl py-3 hover:bg-gray-100 transition"
              >
                Continue with GitHub
              </button>

              <p className="text-center text-gray-600 mt-6">
                Don't have an account?
                <a href="/signup" className="text-green-700 font-semibold ml-2 hover:underline">
                  Sign Up
                </a>
              </p>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
