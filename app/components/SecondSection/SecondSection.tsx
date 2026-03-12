import React from "react";

export default function SecondSection() {
  return (
    <section className=" py-24 font-oswald font-bold">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
            src="https://i.postimg.cc/9MDMjrcx/image-6.png"
            alt="amazon"
            className="w-16"
          />
          <span className="text-sm">
            <span className="text-gray-700">Our </span>
            <span className="text-[#FFA500]">Story</span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[36px] md:text-[46px] leading-tight text-gray-900 mb-6">
          Struggling With Amazon Sales? Let’s Scale Your Business—
          <span className="text-[#FFA500]"> Faster, Smarter</span>, &
          Stress-Free!
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-[16px] leading-relaxed max-w-3xl mx-auto mb-10">
          Amazon is complex, but success doesn’t have to be. At{" "}
          <span className="text-[#FFA500] font-medium">FINTRIXX</span>, we help
          sellers increase sales, optimize ads, rank higher, and expand into new
          markets — without wasting time or money. Let’s turn your struggles
          into scalable success!
        </p>

        {/* Button */}
        <button className="bg-[#FFA500] text-white font-semibold px-10 py-3 rounded-full border-1 border-black shadow-[3px_1px_0px_black] hover:translate-y-[2px] hover:shadow-[3px_2px_0px_black] transition">
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
}
