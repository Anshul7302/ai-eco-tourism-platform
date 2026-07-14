
"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          email,
          phone,
          password,
        }),
      });

      const data = await res.json();
      alert(data.message || "Signup successful");
    } catch (err) {
      console.error(err);
      alert("Cannot connect to backend");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-green-700 via-emerald-600 to-teal-700 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

          <div className="hidden lg:flex flex-col justify-center p-12 text-white bg-[url('https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=1200')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-green-900/60"></div>

            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-6">Join EcoStay AI 🌿</h1>

              <p className="text-lg leading-8">
                Create your account to discover sustainable homestays,
                AI travel recommendations and eco-friendly adventures.
              </p>

              <div className="mt-10 space-y-3">
                <p>🌍 Eco Tourism</p>
                <p>🤖 AI Recommendations</p>
                <p>🏡 Verified Homestays</p>
                <p>🔒 Secure Account</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-bold text-green-700 text-center mb-8">
              Create Account
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">
              <input className="w-full border rounded-xl p-4" placeholder="Full Name"
                value={fullName} onChange={(e)=>setFullName(e.target.value)} />

              <input type="email" className="w-full border rounded-xl p-4" placeholder="Email Address"
                value={email} onChange={(e)=>setEmail(e.target.value)} />

              <input className="w-full border rounded-xl p-4" placeholder="Phone Number"
                value={phone} onChange={(e)=>setPhone(e.target.value)} />

              <input type="password" className="w-full border rounded-xl p-4" placeholder="Password"
                value={password} onChange={(e)=>setPassword(e.target.value)} />

              <input type="password" className="w-full border rounded-xl p-4" placeholder="Confirm Password"
                value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" required />
                I agree to the Terms & Conditions
              </label>

              <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold">
                Create Account
              </button>

              <div className="relative text-center py-2">
                <span className="bg-white px-3 text-gray-500">OR</span>
                <div className="absolute left-0 right-0 top-1/2 border-t -z-10"></div>
              </div>

              <button type="button" className="w-full border rounded-xl py-3 hover:bg-gray-100">
                Continue with Google
              </button>

              <button type="button" className="w-full border rounded-xl py-3 hover:bg-gray-100">
                Continue with GitHub
              </button>

              <p className="text-center mt-6">
                Already have an account?
                <a href="/login" className="text-green-700 font-semibold ml-2 hover:underline">
                  Login
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
