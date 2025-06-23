import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Dashboard", path: "/" },
    { label: "Add Transaction", path: "/add" },
    { label: "Report", path: "/report" },
    { label: "Debt", path: "/debt" },
    { label: "Income", path: "/income" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
          MoneyTrail
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md font-medium transition duration-200 ${
                    isActive
                      ? "bg-sky-500 text-white shadow-inner"
                      : "text-sky-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-sky-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm font-medium transition ${
                  isActive
                    ? "bg-sky-500 text-white shadow-inner"
                    : "text-sky-300 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
