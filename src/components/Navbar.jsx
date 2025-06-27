import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },

    { name: "Booking", path: "/booking" },
    { name: "Reviews", path: "/reviews" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav
      className="fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-md"
      style={{
        background:
          "linear-gradient(90deg, #2d2d2dcc 0%, #3c1e1ecc 50%, #7b1e1ecc 100%)",
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl md:text-3xl font-[Cinzel_Decorative] uppercase tracking-widest hover:text-red-600 transition"
          style={{ fontFamily: '"Cinzel Decorative", cursive' }}
        >
          Joker Tattoo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-red-600 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl cursor-pointer z-50"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full transform ${
          open ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
        style={{
          background:
            "linear-gradient(90deg, #2d2d2ddd 0%, #3c1e1edd 50%, #7b1e1edd 100%)",
          WebkitBackdropFilter: "blur(10px)",
          backdropFilter: "blur(10px)",
        }}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-white text-xl font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-red-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
