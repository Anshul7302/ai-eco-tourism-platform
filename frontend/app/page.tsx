"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import AIPlannerBanner from "../components/AIPlannerBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Features />
      <AIPlannerBanner />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}