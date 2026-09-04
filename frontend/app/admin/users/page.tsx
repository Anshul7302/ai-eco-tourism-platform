"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import UserTable from "@/components/admin/UserTable";

export default function UsersPage() {

  const router = useRouter();

  const [search, setSearch] = useState("");

  const [users] = useState([
    {
      id: 1,
      full_name: "Anshul Mittal",
      email: "anshul@gmail.com",
      phone: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      full_name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9999999999",
      status: "Active",
    },
    {
      id: 3,
      full_name: "Priya Verma",
      email: "priya@gmail.com",
      phone: "8888888888",
      status: "Inactive",
    },
    {
      id: 4,
      full_name: "John Smith",
      email: "john@gmail.com",
      phone: "7777777777",
      status: "Active",
    },
  ]);

  useEffect(() => {

    const admin = localStorage.getItem("admin");

    if (admin !== "true") {
      router.push("/admin/login");
    }

  }, []);

  const filteredUsers = users.filter((user) =>
    user.full_name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-8">

            <h1 className="text-3xl font-bold">
              User Management
            </h1>

            <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800">
              + Add User
            </button>

          </div>

          <div className="mb-6">

            <input
              type="text"
              placeholder="Search user..."
              className="border p-3 rounded-lg w-96"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <UserTable users={filteredUsers} />

        </div>

      </div>

    </>
  );
}