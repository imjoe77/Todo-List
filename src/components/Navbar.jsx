import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 w-full h-[13vh] border-gray-200 px-6  flex flex-row justify-between items-center">
      <h1 className="text-3xl text-blue-100 font-bold mx-10">
        iTask
      </h1>

      <ul className="  flex flex-row gap-8 text-white text-xl font-semibold mx-20 text-center">
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
