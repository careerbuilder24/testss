import React from "react";

export default function FifthSection() {
  return (
    <section className="bg-[#0b0b0b] py-24 text-white font-oswald">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGES */}
        <div className="relative flex items-center">

          <img
            src="https://i.postimg.cc/yY2ckCDR/image.png"
            alt="analytics"
            className="w-[240px] h-[360px] object-cover rounded-2xl"
          />

          <img
            src="https://i.postimg.cc/PqjDQbz2/image-(1).png"
            alt="growth"
            className="w-[260px] h-[320px] object-cover rounded-2xl absolute left-[170px] top-[70px]"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Title */}
          <h2 className="text-[46px] md:text-[56px] font-bold mb-10">
            Our <span className="text-[#FFA500]">Approach</span>
          </h2>

          {/* Mission */}
          <div className="pb-6 mb-6 border-b border-gray-700">
            <h4 className="flex items-center gap-3 text-lg font-semibold">
              🎯 Mission
            </h4>
          </div>

          {/* Vision */}
          <div className="flex gap-6 mb-10">

            <div className="w-[2px] bg-[#FFA500]"></div>

            <div>
              <h4 className="flex items-center gap-3 text-lg font-semibold mb-3">
                🌍 Vision
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Founded in 1983, SecureWealth was created to address the
                challenges of traditional banking—long queues, complicated
                processes, and limited access. We started with a vision to make
                banking simple, accessible, and convenient for everyone. Today,
                we proudly serve millions of users, helping them manage their
                finances with ease.
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="bg-[#FFA500] text-white px-7 py-3 rounded-full border-2 border-white shadow-[4px_4px_0px_black] hover:translate-y-[2px] transition">
            Book a Free Strategy Call
          </button>

        </div>

      </div>
    </section>
  );
}