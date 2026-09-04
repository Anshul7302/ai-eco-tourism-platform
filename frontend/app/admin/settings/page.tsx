"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function SettingsPage() {

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      router.push("/admin/login");
    }
  }, []);

  const [siteName, setSiteName] = useState("EcoStay AI");
  const [email, setEmail] = useState("admin@ecostay.com");
  const [phone, setPhone] = useState("+91 9876543210");

  const saveSettings = () => {
    alert("Settings Saved Successfully");
  };

  return (
    <>
      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8 max-w-2xl">

          <h1 className="text-3xl font-bold mb-8">
            Website Settings
          </h1>

          <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">

            <div>

              <label className="block font-semibold mb-2">
                Website Name
              </label>

              <input
                className="w-full border rounded-lg p-3"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Admin Email
              </label>

              <input
                className="w-full border rounded-lg p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Contact Number
              </label>

              <input
                className="w-full border rounded-lg p-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

            </div>

            <button
              onClick={saveSettings}
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              Save Settings
            </button>

          </div>

        </div>

      </div>

    </>
  );
}