import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen max-w-6xl mx-auto p-10">
        <h1 className="text-5xl font-bold mb-6">
          About EcoStay AI
        </h1>

        <p className="text-lg leading-8">
          EcoStay AI is an AI-powered eco-tourism platform that
          connects travelers with sustainable homestays while
          supporting local communities and responsible tourism.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="shadow-lg p-6 rounded-xl">
            <h2 className="text-2xl font-bold">Mission</h2>
            <p className="mt-4">
              Promote sustainable travel experiences.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-4">
              Empower eco-friendly tourism worldwide.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <h2 className="text-2xl font-bold">Impact</h2>
            <p className="mt-4">
              Support local homestay owners and communities.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}