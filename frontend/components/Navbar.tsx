"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-green-700">
          🌿 EcoStay AI
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">

          <Link href="/" className="hover:text-green-700">
            Home
          </Link>

          <Link href="/homestays" className="hover:text-green-700">
            Homestays
          </Link>

          <Link href="/ai-planner" className="hover:text-green-700">
            AI Planner
          </Link>


          <Link href="/about" className="hover:text-green-700">
            About
          </Link>

          <Link href="/contact" className="hover:text-green-700">
            Contact
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search destination..."
              className="border rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Before Login */}
          {!user ? (
            <div className="relative group">

              <button className="px-4 py-2 rounded-lg hover:bg-green-100 font-medium">
                Account ▼
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                <Link
                  href="/login"
                  className="block px-4 py-3 hover:bg-green-50"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="block px-4 py-3 hover:bg-green-50"
                >
                  Sign Up
                </Link>

              </div>

            </div>
          ) : (

            /* After Login */

            <div className="relative group">

              <button className="px-4 py-2 rounded-lg hover:bg-green-100 font-medium">
                {user.full_name} ▼
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                <Link
                  href="/profile"
                  className="block px-4 py-3 hover:bg-green-50"
                >
                  👤 Profile
                </Link>

                <Link
                  href="/dashboard"
                  className="block px-4 py-3 hover:bg-green-50"
                >
                  📊 Dashboard
                </Link>

                <Link
                  href="/bookings"
                  className="block px-4 py-3 hover:bg-green-50"
                >
                  📅 My Bookings
                </Link>

                <Link
                  href="/wishlist"
                  className="block px-4 py-3 hover:bg-green-50"
                >
                  ❤️ Wishlist
                </Link>

                <Link
                  href="/notifications"
                  className="block px-4 py-3 hover:bg-green-50"
                >
                  🔔 Notifications
                </Link>

                <Link
                  href="/settings"
                  className="block px-4 py-3 hover:bg-green-50"
                >
                  ⚙️ Settings
                </Link>

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                >
                  🚪 Logout
                </button>

              </div>

            </div>

          )}

        </div>

      </div>
    </header>
  );
}