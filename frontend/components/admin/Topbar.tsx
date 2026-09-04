"use client";

export default function Topbar() {
  return (
    <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-500">
          Welcome to EcoStay AI Admin Panel
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="font-semibold">
            Administrator
          </p>
          <p className="text-sm text-gray-500">
            admin@ecostay.com
          </p>
        </div>

        <img
          src="https://ui-avatars.com/api/?name=Admin&background=16a34a&color=fff"
          alt="Admin"
          className="w-12 h-12 rounded-full"
        />

      </div>

    </header>
  );
}