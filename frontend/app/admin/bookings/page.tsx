"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import BookingTable from "@/components/admin/BookingTable";

export default function BookingsPage() {

  const router = useRouter();

  useEffect(() => {

    const admin = localStorage.getItem("admin");

    if (admin !== "true") {
      router.push("/admin/login");
    }

  }, []);

  const [search, setSearch] = useState("");

  const [bookings] = useState([
    {
      id: 1001,
      customer: "Anshul Mittal",
      homestay: "Mountain Retreat",
      checkIn: "25 Jul 2026",
      checkOut: "28 Jul 2026",
      amount: 10500,
      payment: "Paid",
      status: "Confirmed",
    },
    {
      id: 1002,
      customer: "Rahul Sharma",
      homestay: "Forest Camp",
      checkIn: "30 Jul 2026",
      checkOut: "02 Aug 2026",
      amount: 8400,
      payment: "Pending",
      status: "Pending",
    },
    {
      id: 1003,
      customer: "Priya Verma",
      homestay: "Lake View Cottage",
      checkIn: "05 Aug 2026",
      checkOut: "07 Aug 2026",
      amount: 7200,
      payment: "Paid",
      status: "Cancelled",
    },
  ]);

  const filtered = bookings.filter(
    (booking) =>
      booking.customer.toLowerCase().includes(search.toLowerCase()) ||
      booking.homestay.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-6">

            <h1 className="text-3xl font-bold">
              Booking Management
            </h1>

          </div>

          <input
            type="text"
            placeholder="Search Booking..."
            className="border p-3 rounded-lg w-96 mb-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <BookingTable bookings={filtered} />

        </div>

      </div>

    </>
  );
}