import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-10">
        <h1 className="text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <div className="max-w-3xl mx-auto">
          <input
            placeholder="Name"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded"
          />

          <textarea
            placeholder="Message"
            className="w-full border p-3 mb-4 rounded h-40"
          />

          <button className="bg-green-700 text-white px-8 py-3 rounded">
            Send Message
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}