"use client";

import Link from "next/link";
import { Sparkles, MapPinned, CalendarDays } from "lucide-react";

export default function AIPlannerBanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              🤖 AI Powered
            </span>

            <h2 className="text-5xl font-bold mt-8 leading-tight">
              Plan Your Dream Eco Trip with AI
            </h2>

            <p className="mt-8 text-lg leading-8 text-green-100">
              Let EcoStay AI create a personalized travel itinerary
              based on your destination, budget, interests,
              and travel duration.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <Sparkles className="text-yellow-300" size={30} />
                <span>Personalized AI Recommendations</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPinned className="text-yellow-300" size={30} />
                <span>Eco-Friendly Destinations</span>
              </div>

              <div className="flex items-center gap-4">
                <CalendarDays className="text-yellow-300" size={30} />
                <span>Smart Day-wise Travel Plans</span>
              </div>

            </div>

            <Link
              href="/ai-planner"
              className="inline-block mt-10 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-100 transition"
            >
              Try AI Planner
            </Link>

          </div>

          {/* Right Side */}
          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 text-black">

              <h3 className="text-3xl font-bold mb-8 text-center">
                AI Travel Planner
              </h3>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="number"
                  placeholder="Budget (₹)"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="number"
                  placeholder="Days"
                  className="w-full border rounded-xl p-4"
                />

                <select className="w-full border rounded-xl p-4">

                  <option>Adventure</option>
                  <option>Nature</option>
                  <option>Wildlife</option>
                  <option>Camping</option>
                  <option>Luxury</option>

                </select>

                <button className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold transition">
                  Generate AI Plan
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}