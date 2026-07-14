"use client";

import { useState } from "react";

interface PlannerFormProps {
  onGenerate: (data: {
    destination: string;
    budget: string;
    duration: string;
    travelers: string;
    travelStyle: string;
    accommodation: string;
    transport: string;
  }) => void;
}

export default function PlannerForm({ onGenerate }: PlannerFormProps) {
  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    duration: "",
    travelers: "1",
    travelStyle: "Nature",
    accommodation: "Homestay",
    transport: "Train",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.destination ||
      !formData.budget ||
      !formData.duration
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onGenerate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 mt-8"
    >
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Plan Your Eco Trip
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-semibold">Destination</label>

          <input
            type="text"
            name="destination"
            placeholder="e.g. Mussoorie"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Budget (₹)</label>

          <input
            type="number"
            name="budget"
            placeholder="15000"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Trip Duration</label>

          <input
            type="text"
            name="duration"
            placeholder="4 Days"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Travelers</label>

          <input
            type="number"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Travel Style</label>

          <select
            name="travelStyle"
            value={formData.travelStyle}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Nature</option>
            <option>Adventure</option>
            <option>Family</option>
            <option>Luxury</option>
            <option>Solo</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Accommodation</label>

          <select
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Homestay</option>
            <option>Eco Resort</option>
            <option>Cottage</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Transport</label>

          <select
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Train</option>
            <option>Bus</option>
            <option>Flight</option>
            <option>Self Drive</option>
          </select>
        </div>

      </div>

      <button
        type="submit"
        className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
      >
        Generate AI Travel Plan
      </button>
    </form>
  );
}