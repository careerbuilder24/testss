import React from "react";

export default function ThirdSection() {
  return (
    <section className="bg-gradient-to-r from-[#0c0c0c] to-[#141414] py-28 text-white font-oswald overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#FFA500] px-3 py-1 rounded-md">
              <img
                src="https://i.postimg.cc/9MDMjrcx/image-6.png"
                alt="icon"
                className="w-6"
              />
            </div>
            <span className="text-[#FFA500] text-sm">Why Choose Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-[42px] md:text-[52px] font-bold mb-6 leading-tight">
            Why Choose <span className="text-[#FFA500]">FINTRIXX?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
            Amazon is tough—we make it easy. At FINTRIXX, we help sellers rank
            higher, scale faster, & sell smarter. We analyze trends, optimize
            ads, manage inventory, & protect your account so you can focus on
            your business.
          </p>

          <p className="text-gray-400 mb-10">
            🚀 No more guesswork. No more wasted money. Just real results.
          </p>

          {/* Button */}
          <button className="bg-[#FFA500] text-white px-8 py-3 rounded-full border-2 border-white shadow-[4px_4px_0px_black] hover:translate-y-[2px] transition">
            Book a Free Consultation
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* Orbit Rings */}
          <div className="absolute w-[360px] h-[360px] border-[30px] border-gray-700/30 rounded-full rotate-[35deg]" />
          <div className="absolute w-[320px] h-[320px] border-[25px] border-[#FFA500]/20 rounded-full rotate-[35deg]" />

          {/* Center Circle */}
          <div className="relative w-[260px] h-[260px] rounded-full border-[5px] border-[#FFA500] flex items-center justify-center bg-[#1a1a1a] shadow-[0_0_40px_rgba(255,165,0,0.3)]">
            <img
              src="https://i.postimg.cc/9MDMjrcx/image-6.png"
              alt="icon"
              className="w-24"
            />
          </div>

          {/* Feature Cards */}
          <div className="absolute right-[-30px] flex flex-col gap-5">
            <div className="bg-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl">
              🚀 <span>Proven Expertise</span>
            </div>

            <div className="bg-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl">
              🚀 <span>Maximized Visibility</span>
            </div>

            <div className="bg-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl">
              🚀 <span>Strategic Growth</span>
            </div>

            <div className="bg-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl">
              🚀 <span>Exclusive Partnerships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
