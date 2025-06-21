import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#2d2d2d] via-[#3c1e1e] to-[#7b1e1e]"
      style={{
        fontFamily: '"Cormorant Garamond", serif',
        color: "white",
      }}
    >
      {/* Subtle background image for artistic texture */}
      <div className="absolute inset-0 bg-[url('/tattoo-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Artist Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-red-700 shadow-[0_0_30px_#ff0000] hover:scale-105 transition-all duration-500">
            <img
              src="/tattoo-artist-placeholder.jpg"
              alt="Tattoo Artist"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1
            className="text-5xl md:text-7xl mb-6 leading-tight"
            style={{
              fontFamily: '"Cinzel Decorative", cursive',
              background: "linear-gradient(to right, #b91c1c, white, #b91c1c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Ink That Tells Your Story
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            style={{ fontWeight: 300 }}
          >
            At{" "}
            <span style={{ color: "#f87171", fontWeight: "bold" }}>
              Joker Tattoo
            </span>
            , your skin becomes the voice of your soul — bold, raw, and forever.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-full font-semibold uppercase tracking-wide transition-all"
              style={{
                background: "white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              View Portfolio
            </Link>
            <Link
              to="/booking"
              className="px-6 py-3 rounded-full font-semibold uppercase tracking-wide transition-all"
              style={{
                background: "#b91c1c",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Book Now
            </Link>
          </div>

          <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-300">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-white transition" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
