import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Small Tattoo",
      price: "$50 - $100",
      description: "Minimalist designs like symbols, initials, or wrist tattoos. Quick and elegant.",
    },
    {
      title: "Medium Tattoo",
      price: "$150 - $300",
      description: "More detailed designs placed on forearm, calf, or shoulder. Moderate session time.",
    },
    {
      title: "Full Sleeve / Back",
      price: "$400+",
      description: "Intricate, large-scale tattoos covering full sleeves or back. Requires multiple sittings.",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-zinc-900 text-white font-serif">
      <h1
        className="text-5xl md:text-6xl text-center mb-20 font-[Cinzel_Decorative] tracking-wider uppercase"
        style={{
          background: "linear-gradient(90deg, #ff3333, #ffffff, #ff3333)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Tattoo Pricing
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-[#121212] rounded-2xl border border-red-700 shadow-[0_0_15px_#ff4444] hover:scale-105 hover:shadow-[0_0_25px_#ff4444] transition duration-300 p-8 relative overflow-hidden group"
          >
            {/* Glow behind title */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500 opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition duration-500"></div>

            <h2 className="text-3xl font-bold mb-2 tracking-wide text-white">
              {plan.title}
            </h2>
            <p className="text-2xl text-red-400 font-semibold mb-4 drop-shadow-sm">
              {plan.price}
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              {plan.description}
            </p>
          </div>
        ))}
      </div>

      {/* Note or CTA */}
      <div className="mt-20 text-center text-gray-400 text-lg">
        <p>
          For custom designs, cover-ups, or consultations, contact{" "}
          <span className="text-red-400 font-medium">JokerTatt</span> directly.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
