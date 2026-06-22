import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-green-700 text-white py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Discover Sustainable Travel Experiences
      </h1>

      <p className="text-xl max-w-3xl mx-auto">
        Find eco-friendly homestays and personalized travel
        recommendations powered by AI.
      </p>

      <Link href="/homestays">
        <button className="mt-8 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Explore Homestays
        </button>
      </Link>
    </section>
  );
}