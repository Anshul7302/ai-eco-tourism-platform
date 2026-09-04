"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    name: "Users",
    href: "/admin/users",
  },
  {
    name: "Homestays",
    href: "/admin/homestays",
  },
  {
    name: "Bookings",
    href: "/admin/bookings",
  },
  {
    name: "Payments",
    href: "/admin/payments",
  },
  {
    name: "Wishlist",
    href: "/admin/wishlist",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const logout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  };

  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen">

      <div className="text-center py-6 border-b border-green-500">
        <h1 className="text-2xl font-bold">
          EcoStay AI
        </h1>

        <p className="text-sm text-green-200">
          Admin Panel
        </p>
      </div>

      <nav className="mt-6">

        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-6 py-3 transition ${
              pathname === item.href
                ? "bg-white text-green-700 font-semibold"
                : "hover:bg-green-600"
            }`}
          >
            {item.name}
          </Link>
        ))}

      </nav>

      <div className="absolute bottom-8 left-6">
        <button
          onClick={logout}
          className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

    </aside>
  );
}