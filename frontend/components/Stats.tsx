export default function Stats() {
  const stats = [
    { number: "10K+", label: "Happy Travelers" },
    { number: "500+", label: "Eco Homestays" },
    { number: "50+", label: "Destinations" },
    { number: "4.9★", label: "Average Rating" },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-green-600">
                {item.number}
              </h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}