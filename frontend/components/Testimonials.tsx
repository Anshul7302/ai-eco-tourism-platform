export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Amazing eco-friendly stay. Highly recommended!",
    },
    {
      name: "Priya Verma",
      text: "AI planner created the perfect itinerary.",
    },
    {
      name: "Aman Singh",
      text: "Beautiful homestays with excellent hosts.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Travelers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <p className="text-gray-600 italic">"{review.text}"</p>
              <h3 className="mt-6 font-bold">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}