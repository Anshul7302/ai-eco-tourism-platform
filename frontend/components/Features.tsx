"use client";

import {
  Leaf,
  Bot,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <Leaf size={42} />,
    title: "Eco-Friendly Stays",
    description:
      "Discover verified sustainable homestays designed to protect nature while giving you an unforgettable travel experience.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Bot size={42} />,
    title: "AI Travel Planner",
    description:
      "Generate personalized itineraries using Artificial Intelligence based on your destination, interests, and budget.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Secure Booking",
    description:
      "Enjoy secure payments, verified hosts, and instant booking confirmation with complete transparency.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <HeartHandshake size={42} />,
    title: "Support Communities",
    description:
      "Every booking directly supports local families, artisans, and eco-tourism initiatives across India.",
    color: "from-pink-500 to-rose-600",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-green-600 font-bold uppercase tracking-[4px]">
            Why EcoStay AI?
          </span>

          <h2 className="text-5xl font-extrabold mt-5">
            Travel Smarter.
            <span className="text-green-600"> Travel Greener.</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Experience the future of eco-tourism with Artificial Intelligence,
            verified sustainable stays, and personalized travel planning.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
            >

              <div
                className={`bg-gradient-to-r ${feature.color} h-2`}
              />

              <div className="p-8">

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} text-white flex items-center justify-center shadow-lg`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mt-7">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-7">
                  {feature.description}
                </p>

                <button className="flex items-center gap-2 mt-8 font-semibold text-green-700 group-hover:gap-4 transition-all">
                  Learn More

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}