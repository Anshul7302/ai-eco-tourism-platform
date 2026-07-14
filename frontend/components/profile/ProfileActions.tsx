"use client";

import Link from "next/link";
import {
  UserPen,
  Heart,
  CalendarCheck,
  Settings,
} from "lucide-react";

interface Props {
  onEdit: () => void;
}

export default function ProfileActions({ onEdit }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {/* Edit Profile */}
        <button
          onClick={onEdit}
          className="w-full flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-xl transition"
        >
          <UserPen size={22} />
          <span>Edit Profile</span>
        </button>

        {/* Wishlist */}
        <Link
          href="/wishlist"
          className="w-full flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-5 py-4 rounded-xl transition"
        >
          <Heart size={22} />
          <span>My Wishlist</span>
        </Link>

        {/* Bookings */}
        <Link
          href="/bookings"
          className="w-full flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-4 rounded-xl transition"
        >
          <CalendarCheck size={22} />
          <span>My Bookings</span>
        </Link>

        {/* Settings */}
        <Link
          href="/settings"
          className="w-full flex items-center gap-3 bg-gray-700 hover:bg-gray-800 text-white px-5 py-4 rounded-xl transition"
        >
          <Settings size={22} />
          <span>Settings</span>
        </Link>

      </div>

      <div className="mt-8 bg-green-50 rounded-xl p-5">

        <h3 className="font-bold text-green-700">
          EcoStay AI Tip 🌿
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          Complete your profile to receive more accurate AI-powered
          eco-friendly travel recommendations.
        </p>

      </div>

    </div>
  );
}