

import React from "react";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f6ead3] to-[#FFE9C0] min-h-[620px] flex items-center justify-center overflow-hidden">

      {/* LEFT CARD */}
      <img
        src="https://i.postimg.cc/Ls65NxwK/Total-Incomes-Container.png"
        alt="Total incomes"
        className="hidden lg:block absolute left-[80px] top-[240px] w-[260px] -rotate-[18deg] drop-shadow-2xl"
      />

      {/* RIGHT CARD */}
      <img
        src="https://i.postimg.cc/h4HJcbzQ/Review-Container.png"
        alt="Reviews"
        className="hidden lg:block absolute right-[100px] top-[210px] w-[240px] rotate-[15deg] drop-shadow-2xl"
      />

      <div className="mx-auto text-center px-6">

        {/* AMAZON BADGE */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
            src="https://i.postimg.cc/9MDMjrcx/image-6.png"
            alt="amazon"
            className="w-16"
          />
          <p className="text-[15px] font-bold text-gray-700">
            Your Full-Service{" "}
            <span className="text-[#FFA500] font-semibold">
              Amazon Partner
            </span>
          </p>
        </div>

        {/* HEADING */}
        <h1 className="text-[52px] md:text-[68px] font-extrabold leading-[1.1] text-black">
          Turn Your Amazon Struggles
          <br />
          into Success—Save Time,
        </h1>

        {/* ORANGE TEXT */}
        <h2 className="text-[52px] md:text-[68px] font-extrabold text-[#FFA500] mt-2">
          Maximize Profits!
        </h2>

        {/* BUTTON */}
        <div className="mt-12">
          <button className="bg-[#FFA500] text-white font-semibold px-10 py-3 rounded-full border-1 border-black shadow-[3px_1px_0px_black] hover:translate-y-[2px] hover:shadow-[3px_2px_0px_black] transition">
            Book a Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}