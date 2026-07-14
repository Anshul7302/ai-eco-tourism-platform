"use client";

import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ProfileCard from "../../components/profile/ProfileCard";
import ProfileStats from "../../components/profile/ProfileStats";
import ProfileActions from "../../components/profile/ProfileActions";

import {
  getUser,
  getUserStats,
} from "../../services/user";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  const [stats, setStats] = useState({
    wishlist: 0,
    bookings: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      // Change 1 to logged-in user ID later
      const userData = await getUser(1);

      const statsData = await getUserStats(1);

      setUser(userData);
      setStats(statsData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleEdit() {
    alert("Edit Profile feature coming soon.");
  }

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex justify-center items-center">
          <h2 className="text-2xl font-bold text-green-700">
            Loading Profile...
          </h2>
        </div>

        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex justify-center items-center">
          <h2 className="text-2xl font-bold text-red-500">
            Failed to load profile.
          </h2>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-green-50 to-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="mb-12">

            <h1 className="text-5xl font-bold text-green-700">
              My Profile
            </h1>

            <p className="text-gray-600 mt-3">
              Manage your EcoStay AI account and travel preferences.
            </p>

          </div>

          {/* Top Section */}

          <div className="grid lg:grid-cols-3 gap-8">

            <ProfileCard
              user={user}
              onEdit={handleEdit}
            />

            <div className="lg:col-span-2">

              <ProfileStats
                wishlist={stats.wishlist}
                bookings={stats.bookings}
              />

              <div className="mt-8">

                <ProfileActions
                  onEdit={handleEdit}
                />

              </div>

            </div>

          </div>

          {/* Recent Activity */}

          <div className="bg-white shadow-xl rounded-3xl mt-12 p-8">

            <h2 className="text-3xl font-bold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between border-b pb-4">

                <div>
                  <h3 className="font-semibold">
                    ❤️ Added Green Valley Eco Resort
                  </h3>

                  <p className="text-gray-500">
                    Added to wishlist
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  Today
                </span>

              </div>

              <div className="flex items-center justify-between border-b pb-4">

                <div>
                  <h3 className="font-semibold">
                    🏡 Booked Forest Retreat
                  </h3>

                  <p className="text-gray-500">
                    Booking Confirmed
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  Yesterday
                </span>

              </div>

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-semibold">
                    🌿 AI Trip Generated
                  </h3>

                  <p className="text-gray-500">
                    Uttarakhand Eco Tour
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  2 Days Ago
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}