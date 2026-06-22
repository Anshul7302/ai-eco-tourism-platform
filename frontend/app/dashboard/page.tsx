import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-10">
        <h1 className="text-5xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="shadow-lg p-6 rounded-xl">
            Total Bookings
            <h2 className="text-3xl font-bold">12</h2>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            Saved Homestays
            <h2 className="text-3xl font-bold">8</h2>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            AI Suggestions
            <h2 className="text-3xl font-bold">25</h2>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}