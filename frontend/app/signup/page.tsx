"use client";

import { useState } from "react";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { supabase } from "../../lib/supabase";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // ============================
  // NORMAL FASTAPI SIGNUP
  // ============================

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/auth/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            full_name: fullName,
            email: email,
            phone: phone,
            password: password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.detail || data.message || "Signup failed"
        );
      }

      alert(data.message || "Signup successful");

      // Redirect user to login
      window.location.href = "/login";

    } catch (error: any) {
      console.error("Signup Error:", error);

      alert(
        error.message || "Cannot connect to backend"
      );

    } finally {
      setLoading(false);
    }
  };

  // ============================
  // GOOGLE LOGIN
  // ============================

  const handleGoogleLogin = async () => {
    try {
      const { error } =
        await supabase.auth.signInWithOAuth({
          provider: "google",

          options: {
            redirectTo: `${window.location.origin}/`,
          },
        });

      if (error) {
        throw error;
      }

    } catch (error: any) {
      console.error(
        "Google Login Error:",
        error
      );

      alert(
        error.message ||
          "Google login failed"
      );
    }
  };

  // ============================
  // GITHUB LOGIN
  // ============================

  const handleGithubLogin = async () => {
    try {
      const { error } =
        await supabase.auth.signInWithOAuth({
          provider: "github",

          options: {
            redirectTo: `${window.location.origin}/`,
          },
        });

      if (error) {
        throw error;
      }

    } catch (error: any) {
      console.error(
        "GitHub Login Error:",
        error
      );

      alert(
        error.message ||
          "GitHub login failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <section
        className="
        min-h-screen
        bg-gradient-to-br
        from-green-700
        via-emerald-600
        to-teal-700
        flex
        items-center
        justify-center
        px-6
        py-12
        "
      >

        <div
          className="
          max-w-6xl
          w-full
          grid
          lg:grid-cols-2
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-2xl
          "
        >

          {/* ============================
              LEFT SECTION
          ============================ */}

          <div
            className="
            hidden
            lg:flex
            flex-col
            justify-center
            p-12
            text-white
            bg-[url('https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=1200')]
            bg-cover
            bg-center
            relative
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-green-900/60
              "
            />

            <div className="relative z-10">

              <h1
                className="
                text-5xl
                font-bold
                mb-6
                "
              >
                Join EcoStay AI 🌿
              </h1>

              <p
                className="
                text-lg
                leading-8
                "
              >
                Create your account to discover
                sustainable homestays, AI travel
                recommendations and eco-friendly
                adventures.
              </p>

              <div
                className="
                mt-10
                space-y-3
                text-lg
                "
              >

                <p>
                  🌍 Eco Tourism
                </p>

                <p>
                  🤖 AI Recommendations
                </p>

                <p>
                  🏡 Verified Homestays
                </p>

                <p>
                  🔒 Secure Account
                </p>

              </div>

            </div>

          </div>

          {/* ============================
              SIGNUP FORM
          ============================ */}

          <div className="p-8 md:p-12">

            <h2
              className="
              text-4xl
              font-bold
              text-green-700
              text-center
              mb-8
              "
            >
              Create Account
            </h2>

            <form
              onSubmit={handleSignup}
              className="space-y-4"
            >

              {/* FULL NAME */}

              <input
                type="text"
                required
                className="
                w-full
                border
                rounded-xl
                p-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
                "
                placeholder="Full Name"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
              />

              {/* EMAIL */}

              <input
                type="email"
                required
                className="
                w-full
                border
                rounded-xl
                p-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
                "
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              {/* PHONE */}

              <input
                type="tel"
                className="
                w-full
                border
                rounded-xl
                p-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
                "
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />

              {/* PASSWORD */}

              <input
                type="password"
                required
                className="
                w-full
                border
                rounded-xl
                p-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
                "
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              {/* CONFIRM PASSWORD */}

              <input
                type="password"
                required
                className="
                w-full
                border
                rounded-xl
                p-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
                "
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
              />

              {/* TERMS */}

              <label
                className="
                flex
                items-center
                gap-2
                text-sm
                "
              >

                <input
                  type="checkbox"
                  required
                />

                I agree to the Terms & Conditions

              </label>

              {/* CREATE ACCOUNT */}

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                bg-green-700
                hover:bg-green-800
                disabled:bg-green-400
                text-white
                py-4
                rounded-xl
                font-semibold
                transition
                "
              >

                {loading
                  ? "Creating Account..."
                  : "Create Account"}

              </button>

              {/* OR */}

              <div
                className="
                flex
                items-center
                gap-4
                py-3
                "
              >

                <div
                  className="
                  flex-1
                  border-t
                  "
                />

                <span className="text-gray-500">
                  OR
                </span>

                <div
                  className="
                  flex-1
                  border-t
                  "
                />

              </div>

              {/* ============================
                  GOOGLE LOGIN
              ============================ */}

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="
                w-full
                border
                border-gray-300
                rounded-xl
                py-3
                hover:bg-gray-50
                font-medium
                transition
                flex
                justify-center
                items-center
                gap-3
                "
              >

                <span className="text-xl">
                  G
                </span>

                Continue with Google

              </button>

              {/* ============================
                  GITHUB LOGIN
              ============================ */}

              <button
                type="button"
                onClick={handleGithubLogin}
                className="
                w-full
                border
                border-gray-300
                rounded-xl
                py-3
                hover:bg-gray-50
                font-medium
                transition
                flex
                justify-center
                items-center
                gap-3
                "
              >

                <span className="text-xl">
                  ◉
                </span>

                Continue with GitHub

              </button>

              {/* LOGIN LINK */}

              <p
                className="
                text-center
                mt-6
                "
              >

                Already have an account?

                <Link
                  href="/login"
                  className="
                  text-green-700
                  font-semibold
                  ml-2
                  hover:underline
                  "
                >
                  Login
                </Link>

              </p>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}