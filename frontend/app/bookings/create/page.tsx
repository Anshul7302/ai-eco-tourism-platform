"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const API = "http://127.0.0.1:8000";

export default function CreateBookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const homestayId = searchParams.get("homestayId");

  const [homestay, setHomestay] = useState<any>(null);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    if (!homestayId) {
      setLoading(false);
      return;
    }

    loadHomestay();
  }, [homestayId]);

  async function loadHomestay() {
    try {
      const response = await fetch(
        `${API}/homestays/${homestayId}`
      );

      if (!response.ok) {
        throw new Error("Homestay not found");
      }

      const data = await response.json();

      setHomestay(data);
    } catch (error) {
      console.error("Homestay Error:", error);
      alert("Unable to load homestay.");
    } finally {
      setLoading(false);
    }
  }

  function calculateNights() {
    if (!checkIn || !checkOut) {
      return 0;
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const difference =
      end.getTime() - start.getTime();

    return Math.max(
      0,
      Math.ceil(
        difference / (1000 * 60 * 60 * 24)
      )
    );
  }

  function calculateTotal() {
    if (!homestay) {
      return 0;
    }

    return calculateNights() * Number(homestay.price);
  }

  async function handleBooking() {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    if (calculateNights() <= 0) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    if (guests < 1) {
      alert("Please select at least one guest.");
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("Please login before booking.");
      router.push("/login");
      return;
    }

    let user;

    try {
      user = JSON.parse(storedUser);
    } catch {
      alert("Invalid login session. Please login again.");
      router.push("/login");
      return;
    }

    try {
      setBookingLoading(true);

      const bookingData = {
        user_id: user.id,
        homestay_id: Number(homestayId),
        check_in: checkIn,
        check_out: checkOut,
        guests: guests,
        total_price: calculateTotal(),
      };

      console.log("Booking Data:", bookingData);

      const response = await fetch(`${API}/bookings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      console.log("Booking Response:", data);

      if (!response.ok) {
        throw new Error(
          data.detail || "Booking failed"
        );
      }

      alert("Booking created successfully! 🎉");

      router.push("/bookings");

    } catch (error: any) {
      console.error("Booking Error:", error);

      alert(
        error.message || "Unable to create booking."
      );
    } finally {
      setBookingLoading(false);
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">

            <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

            <h2 className="text-xl font-semibold text-green-700">
              Loading homestay...
            </h2>

          </div>
        </div>

        <Footer />
      </>
    );
  }

  if (!homestay) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-red-600">
              Homestay Not Found
            </h2>

            <p className="text-gray-500 mt-3">
              We couldn't find the selected homestay.
            </p>

            <button
              onClick={() => router.push("/homestays")}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
            >
              Browse Homestays
            </button>

          </div>

        </div>

        <Footer />
      </>
    );
  }

  const nights = calculateNights();
  const total = calculateTotal();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12">

        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}

          <div className="mb-10">

            <p className="text-green-600 font-semibold uppercase tracking-widest">
              EcoStay AI
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Complete Your Booking
            </h1>

            <p className="text-gray-600 mt-3">
              Reserve your eco-friendly stay and enjoy a sustainable
              travel experience.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Homestay Details */}

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

              <div className="relative">

                <img
                  src={
                    homestay.image_url ||
                    `https://picsum.photos/800/500?random=${homestay.id}`
                  }
                  alt={homestay.title}
                  className="w-full h-80 object-cover"
                />

                <div className="absolute top-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                  🌿 Eco Stay
                </div>

              </div>

              <div className="p-8">

                <h2 className="text-3xl font-bold text-gray-900">
                  {homestay.title}
                </h2>

                <p className="text-gray-500 mt-3">
                  📍 {homestay.location}
                </p>

                {homestay.description && (
                  <p className="text-gray-600 mt-5 leading-7">
                    {homestay.description}
                  </p>
                )}

                <div className="border-t mt-7 pt-6">

                  <p className="text-gray-500">
                    Price per night
                  </p>

                  <p className="text-4xl font-bold text-green-700 mt-1">
                    ₹{homestay.price}
                  </p>

                </div>

              </div>

            </div>

            {/* Booking Form */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-2xl font-bold text-gray-900">
                Booking Details
              </h2>

              <p className="text-gray-500 mt-2 mb-7">
                Select your dates and number of guests.
              </p>

              <div className="space-y-6">

                {/* Check In */}

                <div>

                  <label className="block font-semibold text-gray-700 mb-2">
                    Check-in Date
                  </label>

                  <input
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) =>
                      setCheckIn(e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* Check Out */}

                <div>

                  <label className="block font-semibold text-gray-700 mb-2">
                    Check-out Date
                  </label>

                  <input
                    type="date"
                    value={checkOut}
                    min={
                      checkIn ||
                      new Date().toISOString().split("T")[0]
                    }
                    onChange={(e) =>
                      setCheckOut(e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* Guests */}

                <div>

                  <label className="block font-semibold text-gray-700 mb-2">
                    Number of Guests
                  </label>

                  <input
                    type="number"
                    min="1"
                    max={homestay.max_guests || 10}
                    value={guests}
                    onChange={(e) =>
                      setGuests(Number(e.target.value))
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

              </div>

              {/* Price Summary */}

              <div className="border-t border-gray-200 mt-8 pt-6">

                <h3 className="text-xl font-bold mb-5">
                  Price Summary
                </h3>

                <div className="space-y-3">

                  <div className="flex justify-between text-gray-600">

                    <span>
                      ₹{homestay.price} × {nights}{" "}
                      {nights === 1 ? "night" : "nights"}
                    </span>

                    <span>
                      ₹{total}
                    </span>

                  </div>

                  <div className="flex justify-between text-gray-600">

                    <span>
                      Guests
                    </span>

                    <span>
                      {guests}
                    </span>

                  </div>

                  <div className="border-t pt-4 mt-4 flex justify-between">

                    <span className="text-xl font-bold">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-green-700">
                      ₹{total}
                    </span>

                  </div>

                </div>

              </div>

              {/* Confirm */}

              <button
                onClick={handleBooking}
                disabled={bookingLoading}
                className="w-full mt-8 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold text-lg transition"
              >
                {bookingLoading
                  ? "Creating Booking..."
                  : "Confirm Booking"}
              </button>

              <p className="text-center text-gray-400 text-sm mt-4">
                🔒 Your booking information is securely processed.
              </p>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}