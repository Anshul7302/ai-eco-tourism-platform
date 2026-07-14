"use client";

import {
  Heart,
  CalendarCheck,
  Leaf,
  Star,
} from "lucide-react";

interface Props {
  wishlist: number;
  bookings: number;
}

export default function ProfileStats({
  wishlist,
  bookings,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Wishlist */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Wishlist
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {wishlist}
            </h2>

          </div>

          <Heart
            size={40}
            className="text-red-500"
            fill="currentColor"
          />

        </div>

      </div>

      {/* Bookings */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Bookings
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {bookings}
            </h2>

          </div>

          <CalendarCheck
            size={40}
            className="text-blue-600"
          />

        </div>

      </div>

      {/* Eco Score */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Eco Score
            </p>

            <h2 className="text-4xl font-bold mt-2">
              95
            </h2>

          </div>

          <Leaf
            size={40}
            className="text-green-600"
          />

        </div>

      </div>

      {/* Rating */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Rating
            </p>

            <h2 className="text-4xl font-bold mt-2">
              4.9
            </h2>

          </div>

          <Star
            size={40}
            className="text-yellow-500"
            fill="currentColor"
          />

        </div>

      </div>

    </div>
  );
}