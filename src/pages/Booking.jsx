import React from "react";
import Ud2 from '../assets/images/Ud2.jpg'; 
const Booking = () => {
  return (
    <div
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#2d2d2d] via-[#3c1e1e] to-[#7b1e1e] text-white"
      style={{ fontFamily: '"Cormorant Garamond", serif' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Banner Image */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg border-4 border-red-700">
            <img
              src={Ud2} // Replace with an actual banner image later
              alt="Tattoo Session Booking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="md:w-1/2 w-full">
          <h1
            className="text-4xl md:text-6xl font-[Cinzel_Decorative] uppercase tracking-widest mb-6 text-center md:text-left"
            style={{
              background:
                "linear-gradient(90deg, #ff4444, #ffffff, #ff4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"Cinzel Decorative", cursive',
            }}
          >
            Book a Session
          </h1>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Preferred Date & Time
              </label>
              <input
                type="datetime-local"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Tattoo Description
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="Describe your tattoo idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold uppercase tracking-wide w-full"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
