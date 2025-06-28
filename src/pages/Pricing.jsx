import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Small Tattoo",
      price: "₦10,000 – ₦80,000",
      description: "Simple tattoos like wrist designs, symbols, initials, or word tattoos. Quick sessions depending on size.",
    },
    {
      title: "Medium Tattoo",
      price: "₦150,000 – ₦500,000",
      description: "Detailed tattoos like spine pieces, half/full sleeves, totem designs, or realistic art. Varies by complexity and size.",
    },
    {
      title: "Large / Full Tattoo",
      price: "₦400,000+",
      description: "Extensive tattoos covering full back, full arm, or full leg. Requires multiple sessions and custom planning.",
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
