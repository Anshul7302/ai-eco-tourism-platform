
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact EcoStay AI</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out for travel assistance, partnerships, or questions.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-14">
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">📍 Address</h2>
            <p>Graphic Era University</p>
            <p>Dehradun, Uttarakhand</p>
          </div>
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">📧 Email</h2>
            <p>support@ecostayai.com</p>
            <p>info@ecostayai.com</p>
          </div>
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">📞 Phone</h2>
            <p>+91 xxxxxxxxx</p>
            <p>Mon - Sat | 9 AM - 6 PM</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white shadow-2xl rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <input className="w-full border rounded-xl p-4" placeholder="Full Name" />
              <input className="w-full border rounded-xl p-4" placeholder="Email" />
              <input className="w-full border rounded-xl p-4" placeholder="Phone" />
              <input className="w-full border rounded-xl p-4" placeholder="Subject" />
              <textarea className="w-full border rounded-xl p-4 h-40" placeholder="Message"></textarea>
              <button className="w-full bg-green-700 text-white py-4 rounded-xl hover:bg-green-800">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-green-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-4">Why Contact Us?</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>AI-powered travel recommendations</li>
                <li>Verified eco-friendly homestays</li>
                <li>24×7 customer support</li>
                <li>Support local communities</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4">FAQ</h2>
              <p><strong>How do I book?</strong><br/>Browse listings and follow the booking process.</p>
              <br/>
              <p><strong>Are homestays verified?</strong><br/>Yes, every listing is verified.</p>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <iframe
            className="w-full h-96 rounded-3xl shadow-xl"
            src="https://maps.google.com/maps?q=dehradun&t=&z=13&ie=UTF8&iwloc=&output=embed">
          </iframe>
        </section>

        <section className="mt-16 bg-gradient-to-r from-green-700 to-teal-600 rounded-3xl text-white text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="mb-8">Discover sustainable travel experiences with EcoStay AI.</p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold">
            Explore Homestays
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}
