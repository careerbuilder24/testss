
import React from "react";

const features = [
  {
    title: "We Make You Stand Out",
    desc: "Targeted marketing to reach the right buyers.",
  },
  {
    title: "We Fix Your Rankings",
    desc: "SEO, keywords & ads for visibility.",
  },
  {
    title: "We Optimize Your Ads",
    desc: "No wasted budget—only high ROI advertising.",
  },
  {
    title: "We Manage Your Inventory",
    desc: "So you never run out of stock or overstock.",
  },
  {
    title: "We Keep Your Account Safe",
    desc: "Avoid suspensions, policy violations & account risks.",
  },
  {
    title: "We Scale Your Business",
    desc: "Expansion, market entry & growth.",
  },
];

export default function SeventhSection() {
  return (
    <section className="bg-[#0b0b0b] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Badge */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="bg-[#FFA500] text-white w-7 h-7 flex items-center justify-center rounded-md font-bold">
            a
          </div>
          {/* <span className="text-gray-300 text-sm">Growth Business</span> */}
        <span className="text-sm text-gray-300">
  Growth <span className="text-[#FFA500]">Business</span>
</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          How We Help You <br />
          Win on <span className="text-[#FFA500]">Amazon</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
          At FINTRIXX, we don't guess—we use data-driven strategies to scale your business.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[#161616] rounded-xl p-6 text-left shadow-lg hover:bg-[#1d1d1d] transition"
            >
              <h3 className="text-[#FFA500] font-semibold mb-4 text-sm">
                {item.title}
              </h3>

              <div className="flex gap-4 items-start">
                <div className="w-[2px] h-10 bg-[#FFA500]"></div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16">
          <button className="bg-[#FFA500] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium shadow-md border border-[#FFA500] transition">
            Talk to an Expert
          </button>
        </div>

      </div>
    </section>
  );
}