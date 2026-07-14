"use client";

import {
  Leaf,
  ShieldCheck,
  Bot,
  HeartHandshake,
  Trees,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Leaf size={45} />,
    title: "Eco-Friendly Tourism",
    description:
      "Stay at sustainable homestays that care for nature and reduce environmental impact.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: <Bot size={45} />,
    title: "AI Recommendations",
    description:
      "Our AI suggests destinations, activities and stays based on your travel style.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: <ShieldCheck size={45} />,
    title: "Secure Booking",
    description:
      "Book confidently with secure payments and verified hosts across India.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <HeartHandshake size={45} />,
    title: "Support Local Communities",
    description:
      "Every booking helps local families and promotes sustainable livelihoods.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <Trees size={45} />,
    title: "Nature First",
    description:
      "Explore forests, mountains and lakes while preserving the environment.",
    color: "bg-lime-100 text-lime-700",
  },
  {
    icon: <Globe size={45} />,
    title: "Responsible Travel",
    description:
      "Travel smarter with eco-conscious recommendations and green experiences.",
    color: "bg-cyan-100 text-cyan-700",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            WHY CHOOSE ECOSTAY AI
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Travel Smarter, Travel Greener 🌿
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            EcoStay AI combines Artificial Intelligence with sustainable
            tourism to provide unforgettable eco-friendly travel
            experiences while supporting local communities.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 p-8"
            >

              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}