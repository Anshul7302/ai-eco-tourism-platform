"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="text-white">

          <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold">
            🌿 Sustainable Travel Platform
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
            Discover
            <span className="text-green-400"> Eco-Friendly </span>
            Homestays
          </h1>

          <p className="text-xl mt-8 text-gray-200 leading-9">
            Explore breathtaking destinations, AI-powered travel
            recommendations, and eco-friendly accommodations that help
            preserve nature while creating unforgettable experiences.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href="/homestays"
              className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Explore Homestays
            </Link>

            <Link
              href="/ai-planner"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl text-lg font-semibold"
            >
              AI Trip Planner
            </Link>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-green-400">500+</h2>
              <p className="text-gray-300 mt-2">
                Eco Homestays
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">10K+</h2>
              <p className="text-gray-300 mt-2">
                Happy Travelers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">100%</h2>
              <p className="text-gray-300 mt-2">
                Sustainable Tourism
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex justify-center">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl w-[420px]">

            <h2 className="text-white text-3xl font-bold mb-8 text-center">
              🌎 Plan Your Dream Trip
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Destination"
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

              <input
                type="date"
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

              <input
                type="number"
                placeholder="Guests"
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

              <select className="w-full p-4 rounded-xl bg-white text-black">
                <option>Eco Cottage</option>
                <option>Mountain Cabin</option>
                <option>Forest Stay</option>
                <option>Luxury Homestay</option>
              </select>

              <button className="w-full bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl text-lg font-bold">
                Search Homestays
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center">

          <div className="w-2 h-3 bg-white rounded-full mt-3"></div>

        </div>

      </div>
    </section>
  );
}