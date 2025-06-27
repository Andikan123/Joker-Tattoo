import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // Optional: Install lucide-react

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-[#3c1e1e] flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-8">
        {/* Check Icon */}
        <div className="flex justify-center">
          <CheckCircle className="text-red-500 w-20 h-20 drop-shadow-lg animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-[Cinzel_Decorative] uppercase tracking-widest text-white">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-lg md:text-xl text-gray-300 font-light">
          Your booking has been received. <span className="text-red-400 font-medium">JokerTatt</span> will reach out to confirm your session.
        </p>

        {/* Button Back to Home or Booking */}
        <div>
          <Link
            to="/"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold uppercase tracking-wide shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
