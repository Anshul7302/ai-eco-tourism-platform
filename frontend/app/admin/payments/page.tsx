"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function PaymentsPage() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      router.push("/admin/login");
    }
  }, []);

  const payments = [
    {
      id: 1,
      user: "Anshul Mittal",
      amount: "₹12,000",
      method: "UPI",
      status: "Paid",
    },
    {
      id: 2,
      user: "Rahul Sharma",
      amount: "₹8,500",
      method: "Card",
      status: "Pending",
    },
    {
      id: 3,
      user: "Priya Verma",
      amount: "₹15,400",
      method: "Net Banking",
      status: "Paid",
    },
  ];

  return (
    <>
      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Payment Management
          </h1>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="w-full">

              <thead className="bg-green-700 text-white">

                <tr>
                  <th className="p-4">ID</th>
                  <th>User</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                {payments.map((payment) => (

                  <tr
                    key={payment.id}
                    className="border-b text-center"
                  >

                    <td className="p-4">{payment.id}</td>

                    <td>{payment.user}</td>

                    <td>{payment.amount}</td>

                    <td>{payment.method}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-white ${
                          payment.status === "Paid"
                            ? "bg-green-600"
                            : "bg-orange-500"
                        }`}
                      >
                        {payment.status}
                      </span>

                    </td>

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