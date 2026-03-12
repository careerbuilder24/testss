


import React from "react";

export default function ThirdSection() {
  return (
    <section className="bg-gradient-to-r from-[#0c0c0c] to-[#141414] py-16 md:py-24 text-white font-oswald overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="bg-[#FFA500] px-3 py-1 rounded-md">
              <img
                src="https://i.postimg.cc/9MDMjrcx/image-6.png"
                alt="icon"
                className="w-5 md:w-6"
              />
            </div>
            <span className="text-[#FFA500] text-sm">Why Choose Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-[44px] lg:text-[52px] font-bold mb-6 leading-tight">
            Why Choose <span className="text-[#FFA500]">FINTRIXX?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
            Amazon is tough—we make it easy. At FINTRIXX, we help sellers rank
            higher, scale faster, & sell smarter. We analyze trends, optimize
            ads, manage inventory, & protect your account so you can focus on
            your business.
          </p>

          <p className="text-gray-400 mb-10">
            🚀 No more guesswork. No more wasted money. Just real results.
          </p>

          {/* Button */}
          <button className="bg-[#FFA500] text-white px-7 py-3 rounded-full border-2 border-white shadow-[4px_4px_0px_black] hover:translate-y-[2px] transition">
            Book a Free Consultation
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col items-center justify-center mt-6 lg:mt-0">

          {/* Orbit Rings */}
          <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] border-[14px] sm:border-[18px] md:border-[28px] border-gray-700/30 rounded-full rotate-[35deg]" />

          <div className="absolute w-[150px] h-[150px] sm:w-[210px] sm:h-[210px] md:w-[280px] md:h-[280px] border-[10px] sm:border-[14px] md:border-[22px] border-[#FFA500]/20 rounded-full rotate-[35deg]" />

          {/* Center Circle */}
          <div className="relative w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] md:w-[240px] md:h-[240px] rounded-full border-[4px] border-[#FFA500] flex items-center justify-center bg-[#1a1a1a] shadow-[0_0_40px_rgba(255,165,0,0.3)]">
            <img
              src="https://i.postimg.cc/9MDMjrcx/image-6.png"
              alt="icon"
              className="w-12 sm:w-16 md:w-20"
            />
          </div>

          {/* Feature Cards */}
          <div className="mt-10 lg:absolute lg:right-[-40px] flex flex-col gap-4 w-full max-w-[260px]">

            <div className="bg-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl justify-center lg:justify-start">
              🚀 <span>Proven Expertise</span>
            </div>

            <div className="bg-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl justify-center lg:justify-start">
              🚀 <span>Maximized Visibility</span>
            </div>

            <div className="bg-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl justify-center lg:justify-start">
              🚀 <span>Strategic Growth</span>
            </div>

            <div className="bg-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl justify-center lg:justify-start">
              🚀 <span>Exclusive Partnerships</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}