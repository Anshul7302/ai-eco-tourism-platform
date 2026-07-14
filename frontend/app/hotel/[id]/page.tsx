
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-green-700 mb-6">Hotel Details</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl shadow bg-white">
            <h2 className="text-2xl font-semibold mb-2">Hotel Details</h2>
            <p className="text-gray-600">
              Replace this section with your backend-integrated content.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-white">
            <h2 className="text-xl font-semibold">Statistics</h2>
            <p className="mt-2">Coming from FastAPI + Supabase.</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-white">
            <button className="bg-green-700 text-white px-5 py-3 rounded-xl">
              Action
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
