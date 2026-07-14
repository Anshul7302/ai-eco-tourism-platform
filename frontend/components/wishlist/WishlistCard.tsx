"use client";

interface WishlistCardProps {
  item: any;
  onRemove: (id: number) => void;
}

export default function WishlistCard({
  item,
  onRemove,
}: WishlistCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={item.image_url}
        alt={item.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {item.title}
        </h2>

        <p className="text-gray-500 mt-2">
          📍 {item.location}
        </p>

        <div className="flex justify-between mt-4">

          <span>
            ⭐ {item.rating}
          </span>

          <span className="text-green-700 font-semibold">
            🌿 Eco {item.eco_score}
          </span>

        </div>

        <h3 className="mt-4 text-2xl font-bold text-green-700">
          ₹{item.price}
        </h3>

        <div className="flex gap-3 mt-6">

          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            View
          </button>

          <button
            onClick={() => onRemove(item.id)}
            className="bg-red-500 text-white px-5 rounded-lg hover:bg-red-600"
          >
            ❤️ Remove
          </button>

        </div>

      </div>

    </div>
  );
}