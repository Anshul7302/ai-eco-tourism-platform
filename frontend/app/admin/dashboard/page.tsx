"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import DashboardCard from "@/components/admin/DashboardCard";

export default function DashboardPage() {

  const router = useRouter();

  useEffect(() => {

    const admin = localStorage.getItem("admin");

    if (admin !== "true") {
      router.push("/admin/login");
    }

  }, []);

  return (

    <>
      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <DashboardCard
              title="Total Users"
              value="120"
              color="bg-blue-600"
            />

            <DashboardCard
              title="Homestays"
              value="58"
              color="bg-green-600"
            />

            <DashboardCard
              title="Bookings"
              value="245"
              color="bg-orange-500"
            />

            <DashboardCard
              title="Revenue"
              value="₹2.5L"
              color="bg-purple-600"
            />

          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold mb-4">
                Recent Bookings
              </h2>

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="text-left py-2">
                      User
                    </th>

                    <th className="text-left py-2">
                      Homestay
                    </th>

                    <th className="text-left py-2">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b">

                    <td className="py-3">
                      Anshul
                    </td>

                    <td>
                      Himalayan Retreat
                    </td>

                    <td className="text-green-600 font-semibold">
                      Confirmed
                    </td>

                  </tr>

                  <tr className="border-b">

                    <td className="py-3">
                      Rahul
                    </td>

                    <td>
                      Eco Valley
                    </td>

                    <td className="text-yellow-600 font-semibold">
                      Pending
                    </td>

                  </tr>

                  <tr>

                    <td className="py-3">
                      Priya
                    </td>

                    <td>
                      Forest Camp
                    </td>

                    <td className="text-red-600 font-semibold">
                      Cancelled
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold mb-4">
                Website Overview
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Total Visitors</span>
                  <span className="font-bold">
                    15,280
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Active Users</span>
                  <span className="font-bold">
                    89
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Pending Payments</span>
                  <span className="font-bold">
                    ₹42,000
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Completed Bookings</span>
                  <span className="font-bold">
                    215
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  );
}