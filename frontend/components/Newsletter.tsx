export default function Newsletter() {
  return (
    <section className="bg-green-700 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Subscribe to Our Newsletter
        </h2>

        <p className="mt-4 text-green-100">
          Get eco-travel tips, exclusive offers, and destination updates directly in your inbox.
        </p>

        <form className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 px-5 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
          />

          <button
            type="submit"
            className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}