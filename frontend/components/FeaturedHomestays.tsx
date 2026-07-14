"use client";
import { addToWishlist } from "../services/wishlist";
import Link from "next/link";
import { Heart, MapPin, Star } from "lucide-react";

interface Homestay {
  id: number;
  title: string;
  location: string;
  price: number;
}

interface Props {
  homestays: Homestay[];
}

export default function FeaturedHomestays({ homestays }: Props) {
  async function handleWishlist(id: number) {
  try {
    await addToWishlist(1, id);

    alert("Added to Wishlist ❤️");
  } catch (error) {
    console.error(error);

    alert("Failed to add wishlist");
  }
}
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14">

          <div>
            <span className="text-green-600 font-semibold uppercase tracking-widest">
              Featured Homestays
            </span>

            <h2 className="text-5xl font-bold mt-3">
              Find Your Perfect Stay
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl">
              Handpicked eco-friendly homestays offering breathtaking
              views, authentic local experiences and sustainable tourism.
            </p>
          </div>

          <Link
            href="/homestays"
            className="mt-6 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            View All
          </Link>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {homestays.map((stay) => (

            <div
              key={stay.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={`https://picsum.photos/600/400?random=${stay.id}`}
                  alt={stay.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Wishlist */}
               <button
  onClick={() => handleWishlist(stay.id)}
  className="absolute top-5 right-5 bg-white p-3 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition"
>
  <Heart size={20} />
</button>

                {/* Badge */}
                <div className="absolute top-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Eco Stay
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {stay.title}
                    </h3>

                    <div className="flex items-center text-gray-600 mt-3">

                      <MapPin
                        size={18}
                        className="text-green-600"
                      />

                      <span className="ml-2">
                        {stay.location}
                      </span>

                    </div>

                  </div>

                  <div className="flex items-center gap-1 text-yellow-500 font-semibold">

                    <Star
                      size={18}
                      fill="currentColor"
                    />

                    4.9

                  </div>

                </div>

                <hr className="my-6" />

                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-gray-500 text-sm">
                      Starting From
                    </p>

                    <h4 className="text-3xl font-bold text-green-700">
                      ₹{stay.price}
                    </h4>

                    <span className="text-gray-500">
                      / night
                    </span>

                  </div>

                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                    Book Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}