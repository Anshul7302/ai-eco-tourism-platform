"use client";

import { useState } from "react";
import {
  User,
  Lock,
  Bell,
  MapPin,
  Shield,
  Save,
  Trash2,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SettingsPage() {
  const [fullName, setFullName] = useState("Anshul Mittal");
  const [email, setEmail] = useState("anshul@example.com");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Dehradun, Uttarakhand");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [bookingNotifications, setBookingNotifications] = useState(true);
  const [recommendations, setRecommendations] = useState(true);

  const [budget, setBudget] = useState("medium");
  const [travelStyle, setTravelStyle] = useState("eco");

  function handleSaveProfile() {
    alert("Profile settings saved successfully!");
  }

  function handleSavePreferences() {
    alert("Travel preferences saved successfully!");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">
              Settings
            </h1>

            <p className="text-gray-600 mt-3">
              Manage your EcoStay AI account, preferences and privacy.
            </p>
          </div>

          <div className="space-y-8">

            {/* Profile Settings */}
            <section className="bg-white rounded-3xl shadow-sm border p-8">

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                  <User size={26} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Profile Settings
                  </h2>

                  <p className="text-gray-500">
                    Update your personal information.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-semibold mb-2">
                    Full Name
                  </label>

                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Phone Number
                  </label>

                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Location
                  </label>

                  <div className="relative">
                    <MapPin
                      size={19}
                      className="absolute left-4 top-4 text-gray-400"
                    />

                    <input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full border rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                </div>

              </div>

              <button
                onClick={handleSaveProfile}
                className="mt-7 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                <Save size={19} />
                Save Changes
              </button>

            </section>

            {/* Security + Notifications */}
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Security */}
              <section className="bg-white rounded-3xl shadow-sm border p-8">

                <div className="flex items-center gap-4 mb-7">
                  <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
                    <Lock size={25} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Security
                    </h2>

                    <p className="text-gray-500">
                      Manage your password.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">

                  <input
                    type="password"
                    placeholder="Current password"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  />

                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  />

                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">
                  Update Password
                </button>

              </section>

              {/* Notifications */}
              <section className="bg-white rounded-3xl shadow-sm border p-8">

                <div className="flex items-center gap-4 mb-7">
                  <div className="bg-yellow-100 text-yellow-700 p-3 rounded-xl">
                    <Bell size={25} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Notifications
                    </h2>

                    <p className="text-gray-500">
                      Choose what updates you receive.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">

                  <SettingToggle
                    title="Email Notifications"
                    description="Receive important account updates."
                    checked={emailNotifications}
                    onChange={setEmailNotifications}
                  />

                  <SettingToggle
                    title="Booking Updates"
                    description="Receive booking confirmation and status updates."
                    checked={bookingNotifications}
                    onChange={setBookingNotifications}
                  />

                  <SettingToggle
                    title="AI Recommendations"
                    description="Receive personalized eco-travel suggestions."
                    checked={recommendations}
                    onChange={setRecommendations}
                  />

                </div>

              </section>

            </div>

            {/* Travel Preferences */}
            <section className="bg-white rounded-3xl shadow-sm border p-8">

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                  <MapPin size={25} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Travel Preferences
                  </h2>

                  <p className="text-gray-500">
                    Help EcoStay AI personalize your recommendations.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-semibold mb-2">
                    Preferred Budget
                  </label>

                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option value="budget">Budget</option>
                    <option value="medium">Mid Range</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Travel Style
                  </label>

                  <select
                    value={travelStyle}
                    onChange={(e) => setTravelStyle(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option value="eco">Eco Tourism</option>
                    <option value="adventure">Adventure</option>
                    <option value="nature">Nature</option>
                    <option value="relaxation">Relaxation</option>
                  </select>
                </div>

              </div>

              <button
                onClick={handleSavePreferences}
                className="mt-7 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
              >
                Save Preferences
              </button>

            </section>

            {/* Privacy */}
            <section className="bg-white rounded-3xl shadow-sm border p-8">

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 text-purple-700 p-3 rounded-xl">
                  <Shield size={25} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Privacy & Data
                  </h2>

                  <p className="text-gray-500">
                    Manage your personal information and account data.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-4">

                <button className="border px-5 py-3 rounded-xl hover:bg-gray-50">
                  Download My Data
                </button>

                <button className="border px-5 py-3 rounded-xl hover:bg-gray-50">
                  Privacy Settings
                </button>

              </div>

            </section>

            {/* Danger Zone */}
            <section className="bg-red-50 border border-red-200 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-red-700">
                Danger Zone
              </h2>

              <p className="text-gray-600 mt-2">
                Deleting your account will permanently remove your profile,
                wishlist and account information.
              </p>

              <button className="mt-6 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold">
                <Trash2 size={19} />
                Delete Account
              </button>

            </section>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}


function SettingToggle({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex justify-between items-center gap-4">

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-7 rounded-full transition ${
          checked ? "bg-green-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>

    </div>
  );
}