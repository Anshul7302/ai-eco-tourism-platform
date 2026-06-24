"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import { getHomestays } from "../services/api";

export default function Home() {
  const [homestays, setHomestays] = useState<any[]>([]);

  useEffect(() => {
    getHomestays()
      .then((data) => {
        setHomestays(data);
      })
      .catch((error) => {
        console.error("Error fetching homestays:", error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Homestays
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {homestays.map((stay) => (
            <Card
              key={stay.id}
              title={stay.title}
              location={stay.location}
              price={`₹${stay.price}/night`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}