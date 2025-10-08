import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 w-full h-[13vh] border-gray-200 px-4 md:px-6 flex flex-row justify-between items-center">
      <h1 className="text-2xl md:text-3xl text-blue-100 font-bold mx-4 md:mx-10">
        iTask
      </h1>

      <ul className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-8 text-sm sm:text-base md:text-xl font-semibold text-white mx-4 md:mx-20">
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">Home</li>
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">Services</li>
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">Merch</li>
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">Contact</li>
        <li className="hover:text-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer">About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
