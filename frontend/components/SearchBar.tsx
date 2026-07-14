"use client";

import { useState } from "react";

export default function SearchBar() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    console.log({
      destination,
      checkIn,
      checkOut,
      guests,
      budget,
    });

    // Later we'll connect this with FastAPI
  };

  return (
    <section className="relative -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            🔍 Find Your Perfect Eco Stay
          </h2>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5">

            <div>
              <label className="font-semibold block mb-2">
                Destination
              </label>

              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                placeholder="Rishikesh"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Check In
              </label>

              <input
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                type="date"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Check Out
              </label>

              <input
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                type="date"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Guests
              </label>

              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full border rounded-xl p-4"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Guests</option>
              </select>
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Budget
              </label>

              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                type="number"
                placeholder="₹5000"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

          </div>

          <div className="mt-8 text-center">

            <button
              onClick={handleSearch}
              className="bg-green-600 hover:bg-green-700 transition text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              🔍 Search Eco Homestays
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}