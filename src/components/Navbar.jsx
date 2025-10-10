import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-700 w-full border-gray-200 px-4 sm:px-6 flex justify-between items-center h-[13vh] relative">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl text-blue-100 font-bold mx-4 sm:mx-10">
        iTask {/* Minor change for GitHub test */}
      </h1>

      {/* Menu icon for mobile */}
      <button
        className="text-white sm:hidden block focus:outline-none hover:text-blue-200"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links */}
      <ul
        className={`${
          open
            ? "flex flex-col absolute top-[13vh] left-0 w-full bg-slate-700 py-4 space-y-3 items-center"
            : "hidden"
        } sm:flex sm:flex-row sm:static sm:bg-transparent sm:space-y-0 sm:gap-8 sm:items-center text-white font-semibold text-sm sm:text-base md:text-lg transition-all duration-300`}
      >
        <li className="hover:text-blue-300 cursor-pointer">Home</li>
        <li className="hover:text-blue-300 cursor-pointer">Services</li>
        <li className="hover:text-blue-300 cursor-pointer">Abou us</li>
        <li className="hover:text-blue-300 cursor-pointer">Contact</li>
        <a href="https://github.com/imjoe77/Todo-List" className="hover:text-blue-300 cursor-pointer">Github</a>
      </ul>
    </nav>
  );
};

export default Navbar;
