import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            About EcoStay AI 🌿
          </h1>

          <p className="text-xl max-w-3xl mx-auto leading-8">
            Discover sustainable travel experiences powered by Artificial
            Intelligence. EcoStay AI connects travelers with eco-friendly
            homestays while supporting local communities and promoting
            responsible tourism.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900"
              alt="Nature"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-green-700">
              Who We Are
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              EcoStay AI is an AI-powered Eco-Tourism platform built to make
              travel smarter, greener and more sustainable.
            </p>

            <p className="text-lg text-gray-600 leading-8 mt-6">
              Our intelligent recommendation system helps travelers discover
              beautiful eco-friendly homestays based on their interests,
              budget and destination while supporting local hosts.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Our Purpose
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="text-5xl mb-5">🎯</div>

              <h3 className="text-2xl font-bold mb-4">
                Mission
              </h3>

              <p className="text-gray-600">
                Promote sustainable tourism while empowering travelers to
                discover eco-friendly destinations using AI technology.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="text-5xl mb-5">🌍</div>

              <h3 className="text-2xl font-bold mb-4">
                Vision
              </h3>

              <p className="text-gray-600">
                Become the world's most trusted AI-powered eco-tourism
                platform connecting communities and travelers.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="text-5xl mb-5">💚</div>

              <h3 className="text-2xl font-bold mb-4">
                Impact
              </h3>

              <p className="text-gray-600">
                Support local economies, preserve nature and encourage
                responsible travel through intelligent recommendations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose EcoStay AI?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-green-50 p-8 rounded-2xl text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="font-bold text-xl mb-3">
              AI Recommendations
            </h3>
            <p>Personalized travel suggestions based on your interests.</p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl text-center">
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="font-bold text-xl mb-3">
              Verified Homestays
            </h3>
            <p>Discover trusted and eco-friendly accommodations.</p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl text-center">
            <div className="text-5xl mb-4">🌳</div>
            <h3 className="font-bold text-xl mb-3">
              Sustainable Travel
            </h3>
            <p>Reduce environmental impact while exploring nature.</p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="font-bold text-xl mb-3">
              Smart Experience
            </h3>
            <p>Fast booking and AI-powered travel planning.</p>
          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="bg-green-700 text-white py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold">1000+</h2>
            <p className="mt-3">Eco Homestays</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">5000+</h2>
            <p className="mt-3">Happy Travelers</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">150+</h2>
            <p className="mt-3">Communities</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">24×7</h2>
            <p className="mt-3">AI Assistance</p>
          </div>

        </div>

      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Built With
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          <span className="bg-black text-white px-6 py-3 rounded-full">
            Next.js
          </span>

          <span className="bg-green-600 text-white px-6 py-3 rounded-full">
            FastAPI
          </span>

          <span className="bg-emerald-600 text-white px-6 py-3 rounded-full">
            Supabase
          </span>

          <span className="bg-blue-600 text-white px-6 py-3 rounded-full">
            Tailwind CSS
          </span>

          <span className="bg-purple-600 text-white px-6 py-3 rounded-full">
            AI Recommendation
          </span>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-20">

        <div className="text-center max-w-4xl mx-auto">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Explore?
          </h2>

          <p className="text-xl mb-8">
            Join thousands of travelers discovering sustainable adventures
            with EcoStay AI.
          </p>

          <button className="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            Explore Homestays
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}