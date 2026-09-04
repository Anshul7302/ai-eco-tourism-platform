"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function WishlistPage() {

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      router.push("/admin/login");
    }
  }, []);

  const wishlist = [
    {
      id: 1,
      user: "Anshul",
      homestay: "Mountain Retreat",
    },
    {
      id: 2,
      user: "Rahul",
      homestay: "Eco Forest Stay",
    },
    {
      id: 3,
      user: "Priya",
      homestay: "Lake View Cottage",
    },
  ];

  return (
    <>
      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Wishlist
          </h1>

          <div className="bg-white rounded-xl shadow-lg">

            <table className="w-full">

              <thead className="bg-green-700 text-white">

                <tr>

                  <th className="p-4">ID</th>

                  <th>User</th>

                  <th>Homestay</th>

                </tr>

              </thead>

              <tbody>

                {wishlist.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b text-center"
                  >

                    <td className="p-4">{item.id}</td>

                    <td>{item.user}</td>

                    <td>{item.homestay}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </>
  );
}