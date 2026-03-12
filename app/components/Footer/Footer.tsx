

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0b0b0b] to-[#111111] text-gray-400 font-oswald pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Left */}
          <div>

            <img
              src="https://i.postimg.cc/SKRBVPLy/asdfohasfg-removebg-preview.png"
              alt="logo"
              className="w-14 mb-6"
            />

            <p className="text-sm leading-relaxed max-w-xs">
              FINTRIXX — Your Amazon Growth Partner Since 2016, we boost
              Amazon success with expert SEO, PPC, and growth strategies.
            </p>

          </div>


          

          {/* Middle */}
          <div>
            <h4 className="text-white text-lg mb-6">Home</h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Why Choose Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-white text-lg mb-6">Contact</h4>

            <div className="flex items-center gap-3 text-sm">
              ✉ leadsbridgedemo@example.com
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>© 2025 Copyright Amazon</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}