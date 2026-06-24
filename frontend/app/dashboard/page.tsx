"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar />

      <main
        className={`min-h-screen p-8 transition-all duration-300 ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold">
              Dashboard
            </h1>
            <p className="mt-2 text-lg">
              Welcome back to EcoStay AI
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-green-600 text-white px-5 py-3 rounded-lg"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-gray-500">Bookings</h3>
            <p className="text-4xl font-bold text-green-600">
              12
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-gray-500">Saved Stays</h3>
            <p className="text-4xl font-bold text-blue-600">
              8
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-gray-500">AI Suggestions</h3>
            <p className="text-4xl font-bold text-purple-600">
              25
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-gray-500">Eco Points</h3>
            <p className="text-4xl font-bold text-orange-600">
              320
            </p>
          </div>
        </div>

        {/* Booking Trend */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Monthly Booking Trend
          </h2>

          <div className="flex items-end justify-between h-64">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 w-12 h-24 rounded"></div>
              <p className="mt-2">Jan</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-500 w-12 h-32 rounded"></div>
              <p className="mt-2">Feb</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-500 w-12 h-40 rounded"></div>
              <p className="mt-2">Mar</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-500 w-12 h-36 rounded"></div>
              <p className="mt-2">Apr</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-500 w-12 h-48 rounded"></div>
              <p className="mt-2">May</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-500 w-12 h-56 rounded"></div>
              <p className="mt-2">Jun</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-3">
              <li>✅ Booked Himalayan Homestay</li>
              <li>✅ Saved Eco Cottage</li>
              <li>✅ Generated AI Travel Plan</li>
              <li>✅ Reviewed Green Valley Stay</li>
            </ul>
          </div>

          {/* AI Insights */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              AI Travel Insights
            </h2>

            <p>
              <strong>Recommended:</strong>
              {" "}Chopta, Uttarakhand
            </p>

            <p className="mt-3">
              <strong>Best Season:</strong>
              {" "}September - November
            </p>

            <p className="mt-3">
              <strong>Sustainability Score:</strong>
              {" "}95%
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}