import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mt-16 py-10 px-6"
      style={{
        
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "white",
        fontFamily: '"Cormorant Garamond", serif',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Logo and Tagline */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2
            className="text-3xl font-[Cinzel_Decorative] uppercase tracking-widest mb-3"
            style={{ fontFamily: '"Cinzel Decorative", cursive' }}
          >
            Joker Tattoo
          </h2>
          <p className="text-gray-300 italic">
            Art that speaks your story, forever inked.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-red-500 transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-red-500 transition">
                Booking
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-red-500 transition">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-red-500 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-6 text-3xl text-gray-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-400 text-sm select-none">
        &copy; {new Date().getFullYear()} Joker Tattoo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
