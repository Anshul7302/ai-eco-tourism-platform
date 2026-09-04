"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import HomestayTable from "@/components/admin/HomestayTable";

export default function HomestaysPage() {

  const router = useRouter();

  useEffect(() => {

    const admin = localStorage.getItem("admin");

    if (admin !== "true") {
      router.push("/admin/login");
    }

  }, []);

  const [search, setSearch] = useState("");

  const [homestays] = useState([
    {
      id: 1,
      image: "https://picsum.photos/200/150?1",
      name: "Mountain Retreat",
      location: "Manali",
      price: 3500,
      rating: 4.8,
      status: "Available",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/150?2",
      name: "Eco Forest Stay",
      location: "Rishikesh",
      price: 2800,
      rating: 4.6,
      status: "Available",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/150?3",
      name: "Lake View Cottage",
      location: "Nainital",
      price: 4200,
      rating: 4.9,
      status: "Booked",
    },
  ]);

  const filtered = homestays.filter(
    (stay) =>
      stay.name.toLowerCase().includes(search.toLowerCase()) ||
      stay.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-6">

            <h1 className="text-3xl font-bold">
              Homestay Management
            </h1>

            <button className="bg-green-700 text-white px-5 py-3 rounded-lg">
              + Add Homestay
            </button>

          </div>

          <input
            type="text"
            placeholder="Search Homestay..."
            className="border p-3 rounded-lg w-96 mb-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <HomestayTable homestays={filtered} />

        </div>

      </div>

    </>
  );
}