import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-700 w-full border-gray-200 px-4 sm:px-6 flex flex-wrap justify-between items-center h-[13vh]">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl text-blue-100 font-bold mx-4 sm:mx-10">
        iTask
      </h1>

      {/* Hamburger Button - visible only on mobile */}
      <button
        className="text-white sm:hidden block focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links */}
      <ul
        className={`${
          isOpen
            ? "flex flex-col w-full items-center mt-4 space-y-3"
            : "hidden"
        } sm:flex sm:flex-row sm:gap-6 md:gap-8 sm:items-center sm:space-y-0 sm:mt-0 text-sm sm:text-base md:text-lg font-semibold text-white mx-2 sm:mx-10`}
      >
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
          Home
        </li>
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
          Services
        </li>
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
          Merch
        </li>
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
          Contact
        </li>
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
          About Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
