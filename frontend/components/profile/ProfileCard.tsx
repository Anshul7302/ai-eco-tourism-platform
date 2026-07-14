"use client";

import { Mail, Phone, MapPin, Calendar, User } from "lucide-react";

interface Props {
  user: any;
  onEdit: () => void;
}

export default function ProfileCard({ user, onEdit }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex flex-col items-center">

        <img
          src={
            user.profile_image ||
            "https://ui-avatars.com/api/?name=User&background=16a34a&color=fff&size=256"
          }
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-green-600"
        />

        <h2 className="text-3xl font-bold mt-5">
          {user.name}
        </h2>

        <p className="text-gray-500 mt-1">
          EcoStay AI Member
        </p>

      </div>

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-4">

          <Mail className="text-green-600" />

          <span>{user.email}</span>

        </div>

        <div className="flex items-center gap-4">

          <Phone className="text-green-600" />

          <span>{user.phone || "Not Added"}</span>

        </div>

        <div className="flex items-center gap-4">

          <MapPin className="text-green-600" />

          <span>

            {user.city || "City"},{" "}
            {user.state || "State"},{" "}
            {user.country || "Country"}

          </span>

        </div>

        <div className="flex items-center gap-4">

          <Calendar className="text-green-600" />

          <span>

            Joined{" "}

            {user.created_at
              ? new Date(user.created_at).toLocaleDateString()
              : "Recently"}

          </span>

        </div>

        <div className="flex items-center gap-4">

          <User className="text-green-600" />

          <span>

            User ID : {user.id}

          </span>

        </div>

      </div>

      <button
        onClick={onEdit}
        className="w-full mt-10 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Edit Profile
      </button>

    </div>
  );
}