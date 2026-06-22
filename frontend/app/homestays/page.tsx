import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Homestays() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-10">
        <h1 className="text-5xl font-bold text-center mb-10">
          Explore Homestays
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-56 bg-green-200"></div>

              <div className="p-5">
                <h2 className="text-xl font-bold">
                  Mountain View Cottage
                </h2>

                <p>📍 Uttarakhand</p>

                <p className="text-yellow-500">
                  ⭐ 4.8
                </p>

                <p className="text-green-700 font-bold">
                  ₹2500/night
                </p>

                <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}