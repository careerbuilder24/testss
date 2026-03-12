

"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/nrNPrw8g/asdfohasfg.png"
            alt="logo"
            className="w-12"
          />
        </div>

        {/* RIGHT SIDE (Menu + Button) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Menu */}
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            <li className="text-[#FFA500] cursor-pointer">Services</li>
            <li className="cursor-[#FFA500] hover:text-orange-500">About</li>
            <li className="cursor-[#FFA500] hover:text-orange-500">Contact</li>
          </ul>

          {/* Button */}
          {/* <button className="bg-[#FFA500] hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md">
            Book a Free Consultation
          </button> */}
          <button className="bg-[#FFA500] text-white font-semibold px-8 py-3 rounded-full border-1 border-black shadow-[3px_1px_0px_#000]">
            Book a Free Consultation
          </button>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="text-orange-500">Services</li>
            <li>About</li>
            <li>Contact</li>
            <button className="mt-3 bg-orange-500 text-white py-2 rounded-full">
              Book a Free Consultation
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
