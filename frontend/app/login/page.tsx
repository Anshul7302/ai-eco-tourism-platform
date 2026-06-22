import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md p-8 shadow-lg rounded-xl border">
          <h1 className="text-3xl font-bold mb-6">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full mb-4 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 w-full mb-4 rounded"
          />

          <button className="bg-green-700 text-white w-full py-3 rounded">
            Login
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}