import React from "react";
import tat1 from '../assets/images/tat1.jpg'
import tat3 from '../assets/images/tat3.jpg'
import tat4 from '../assets/images/tat4.jpg'
import tat5 from '../assets/images/tat5.jpg'
import tat6 from '../assets/images/tat6.jpg'
import tat10 from '../assets/images/tat10.jpg'

const tattoos = [
  {
    id: 1,
    title: "Realism Sleeve",
    imgSrc: tat1,
    description: "A detailed black and grey realism sleeve.",
  },
  {
    id: 2,
    title: "Traditional Rose",
    imgSrc: tat3,
    description: "Classic rose with bold lines and vibrant colors.",
  },
  {
    id: 3,
    title: "Geometric Mandala",
    imgSrc: tat4,
    description: "Intricate mandala design with symmetrical details.",
  },
  {
    id: 4,
    title: "Japanese Dragon",
    imgSrc: tat5,
    description: "Powerful dragon wrapped around the arm.",
  },
  {
    id: 5,
    title: "Minimalist Symbols",
    imgSrc: tat6,
    description: "Clean and minimal symbolic tattoos.",
  },
  {
    id: 6,
    title: "Watercolor Phoenix",
    imgSrc: tat10,
    description: "Colorful phoenix with watercolor style.",
  },
];

const Portfolio = () => {
  return (
    <div
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#2d2d2d] via-[#3c1e1e] to-[#7b1e1e]"
      style={{ fontFamily: '"Cormorant Garamond", serif', color: "#f0f0f0" }}
    >
      {/* Title */}
      <h1
        className="text-5xl md:text-7xl font-[Cinzel_Decorative] uppercase tracking-wide text-center mb-8"
        style={{
          fontFamily: '"Cinzel Decorative", cursive',
          background:
            "linear-gradient(90deg, #9c1c1c, #f0f0f0, #9c1c1c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Portfolio
      </h1>

      {/* Intro about him */}
      <p className="max-w-3xl mx-auto text-center mb-16 text-gray-300 text-lg md:text-xl italic">
        Joker Tattoo is a master of his craft, blending tradition and modern styles
        to create personalized works of art that tell your unique story. With
        years of experience and passion for every ink, his portfolio speaks volumes
        about his skill and creativity.
      </p>
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

      {/* Tattoo grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {tattoos.map(({ id, title, imgSrc, description }) => (
          <div
            key={id}
            className="group rounded-lg overflow-hidden shadow-lg cursor-pointer relative"
          >
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center px-4"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-red-600">{title}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
