"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FeaturedHomestays from "../../components/FeaturedHomestays";
import { getHomestays } from "../../services/homestays";

interface Homestay {
  id: number;
  title: string;
  location: string;
  price: number;
}

export default function HomestaysPage() {
  const [homestays, setHomestays] = useState<Homestay[]>([]);

  useEffect(() => {
    loadHomestays();
  }, []);

  async function loadHomestays() {
    const data = await getHomestays();
    setHomestays(data);
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">
          Explore Homestays
        </h1>

        <FeaturedHomestays homestays={homestays} />
      </div>

      <Footer />
    </>
  );
}