import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Homestays
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Mountain View Cottage"
            location="Nainital"
            price="₹2500/night"
          />

          <Card
            title="Forest Retreat"
            location="Mussoorie"
            price="₹3200/night"
          />

          <Card
            title="Lake Side Stay"
            location="Bhimtal"
            price="₹2800/night"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}