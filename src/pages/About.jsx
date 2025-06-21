import React from "react";

const About = () => {
  return (
    <div
      className="relative min-h-screen px-6 py-20 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2d2d2d, #3c1e1e 50%, #7b1e1e 100%)",
        fontFamily: '"Cormorant Garamond", serif',
      }}
    >
      {/* Artistic Blurs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-red-800 rounded-full opacity-20 blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-red-600 rounded-full opacity-20 blur-2xl z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <div className="rounded-xl overflow-hidden border-4 border-red-700 shadow-xl hover:scale-105 transition">
            <img
              src="/tattoo-artist-placeholder.jpg"
              alt="Joker Tattoo Artist"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1
            className="text-5xl md:text-6xl font-[Cinzel_Decorative] uppercase tracking-widest mb-4"
            style={{
              background: "linear-gradient(90deg, #ff4444, #ffffff, #ff4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"Cinzel Decorative", cursive',
            }}
          >
            About the Artist
          </h1>

          {/* Ink-style underline */}
          <div className="w-24 h-1 bg-red-600 mx-auto md:mx-0 mb-6 rounded-full shadow-lg" />

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Joker Tattoo isn’t just an artist — he’s a storyteller through ink.
            With <span className="text-red-400 font-semibold">7+ years</span> in
            the game, he’s known for his bold lines, deep detail, and ability to
            transform skin into living art.
          </p>

          <blockquote className="text-gray-200 italic text-xl border-l-4 border-red-600 pl-4 mb-6">
            "Every tattoo I create is a memory made eternal — a voice written in
            ink."
          </blockquote>

          <div className="text-red-500 font-[Cinzel_Decorative] text-xl tracking-widest">
            — Joker Tattoo
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
