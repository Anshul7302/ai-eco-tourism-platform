"use client";

interface Homestay {
  id: number;
  image: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  status: string;
}

interface Props {
  homestays: Homestay[];
}

export default function HomestayTable({ homestays }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="w-full">

        <thead className="bg-green-700 text-white">
          <tr>
            <th className="p-4">Image</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Rating</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {homestays.map((stay) => (

            <tr
              key={stay.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-20 h-16 rounded-lg object-cover"
                />
              </td>

              <td className="p-4">{stay.name}</td>

              <td className="p-4">{stay.location}</td>

              <td className="p-4">₹{stay.price}</td>

              <td className="p-4">⭐ {stay.rating}</td>

              <td className="p-4">

                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    stay.status === "Available"
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {stay.status}
                </span>

              </td>

              <td className="p-4 text-center space-x-2">

                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                  View
                </button>

                <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>

                <button className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}