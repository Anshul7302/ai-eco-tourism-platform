"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, UserCircle } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [search, setSearch] = useState("");

  const router = useRouter();

  // Load logged-in user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/");
    router.refresh();
  };

  // Search Homestays
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchValue = search.trim();

    if (!searchValue) {
      return;
    }

    router.push(
      `/homestays?search=${encodeURIComponent(searchValue)}`
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="text-3xl font-bold text-green-700 whitespace-nowrap"
        >
          🌿 EcoStay AI
        </Link>

        {/* ================= NAVIGATION ================= */}

        <nav className="hidden lg:flex items-center gap-8 font-medium">

          <Link
            href="/"
            className="hover:text-green-700 transition"
          >
            Home
          </Link>

          <Link
            href="/homestays"
            className="hover:text-green-700 transition"
          >
            Homestays
          </Link>

          <Link
            href="/ai-planner"
            className="hover:text-green-700 transition"
          >
            AI Planner
          </Link>

          <Link
            href="/about"
            className="hover:text-green-700 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-green-700 transition"
          >
            Contact
          </Link>

        </nav>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-4">

          {/* ================= SEARCH BAR ================= */}

          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center border border-gray-400 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-green-600"
          >

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destination..."
              className="px-5 py-2.5 w-56 lg:w-64 outline-none bg-transparent"
            />

            <button
              type="submit"
              className="px-4 text-green-700 hover:text-green-900 transition"
              aria-label="Search"
            >
              <Search size={21} />
            </button>

          </form>

          {/* ================= BEFORE LOGIN ================= */}

          {!user ? (

            <div className="relative group">

              {/* Profile Icon Button */}

              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-green-100 transition"
              >

                <UserCircle
                  size={32}
                  className="text-green-700"
                />

                <span className="hidden lg:inline font-medium">
                  Account
                </span>

                <span className="text-sm">
                  ▼
                </span>

              </button>

              {/* Account Dropdown */}

              <div
                className="
                absolute
                right-0
                mt-2
                w-48
                bg-white
                border
                border-gray-100
                rounded-xl
                shadow-xl
                opacity-0
                invisible
                group-hover:opacity-100
                group-hover:visible
                transition-all
                duration-200
                overflow-hidden
                z-50
                "
              >

                <Link
                  href="/login"
                  className="block px-5 py-3 hover:bg-green-50 transition"
                >
                  🔐 Login
                </Link>

                <Link
                  href="/signup"
                  className="block px-5 py-3 hover:bg-green-50 transition"
                >
                  ✨ Sign Up
                </Link>

              </div>

            </div>

          ) : (

            /* ================= AFTER LOGIN ================= */

            <div className="relative group">

              {/* Logged-in Profile */}

              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-green-100 transition"
              >

                {/* User Profile Image */}

                {user.profile_image ? (

                  <img
                    src={user.profile_image}
                    alt={user.full_name || "Profile"}
                    className="w-9 h-9 rounded-full object-cover border-2 border-green-600"
                  />

                ) : (

                  <UserCircle
                    size={34}
                    className="text-green-700"
                  />

                )}

                {/* User Name */}

                <span className="hidden lg:inline font-medium">
                  {user.full_name || "My Account"}
                </span>

                <span className="text-sm">
                  ▼
                </span>

              </button>

              {/* User Dropdown */}

              <div
                className="
                absolute
                right-0
                mt-2
                w-56
                bg-white
                border
                border-gray-100
                rounded-xl
                shadow-xl
                opacity-0
                invisible
                group-hover:opacity-100
                group-hover:visible
                transition-all
                duration-200
                overflow-hidden
                z-50
                "
              >

                {/* Profile */}

                <Link
                  href="/profile"
                  className="block px-5 py-3 hover:bg-green-50 transition"
                >
                  👤 Profile
                </Link>

                {/* Dashboard */}

                <Link
                  href="/dashboard"
                  className="block px-5 py-3 hover:bg-green-50 transition"
                >
                  📊 Dashboard
                </Link>

                {/* Bookings */}

                <Link
                  href="/bookings"
                  className="block px-5 py-3 hover:bg-green-50 transition"
                >
                  📅 My Bookings
                </Link>

                {/* Wishlist */}

                <Link
                  href="/wishlist"
                  className="block px-5 py-3 hover:bg-green-50 transition"
                >
                  ❤️ Wishlist
                </Link>

                {/* Notifications */}

                <Link
                  href="/notifications"
                  className="block px-5 py-3 hover:bg-green-50 transition"
                >
                  🔔 Notifications
                </Link>

                {/* Settings */}

                <Link
                  href="/settings"
                  className="block px-5 py-3 hover:bg-green-50 transition"
                >
                  ⚙️ Settings
                </Link>

                {/* Divider */}

                <div className="border-t border-gray-100" />

                {/* Logout */}

                <button
                  type="button"
                  onClick={logout}
                  className="w-full text-left px-5 py-3 text-red-600 hover:bg-red-50 transition"
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