type CardProps = {
  title: string;
  location: string;
  price: string;
};

export default function Card({
  title,
  location,
  price,
}: CardProps) {
  return (
    <div className="border rounded-xl p-5 shadow-md bg-white">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2">📍 {location}</p>

      <p className="mt-2 text-green-700 font-bold">
        {price}
      </p>

      <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">
        View Details
      </button>
    </div>
  );
}