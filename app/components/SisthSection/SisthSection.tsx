import React from "react";

export default function SixthSection() {
  return (
    <section className=" py-24 font-oswald">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="bg-[#FFA500] px-3 py-1 rounded-md">
            <img
              src="https://i.postimg.cc/9MDMjrcx/image-6.png"
              alt="icon"
              className="w-16"
            />
          </div>
          <span className="text-sm">
            Growth <span className="text-[#FFA500]">Business</span>
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[42px] md:text-[56px] font-bold leading-tight text-gray-900">
            The Harsh Reality of <br />
            Selling on <span className="text-[#FFA500]">Amazon</span>
          </h2>

          <p className="text-gray-600 mt-4">
            Selling on Amazon is tough. Do these struggles sound familiar?
            Without the right strategy, you're losing money, time, and opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card */}
          {[
            {
              title: "Lost in Competition?",
              text: "10M+ sellers & 350M+ products — how do you stand out?",
            },
            {
              title: "Burning Cash on Ads?",
              text: "PPC feels like a money pit with no returns.",
            },
            {
              title: "Low Rankings?",
              text: "Amazon's complex algorithms keep changing.",
            },
            {
              title: "Inventory Headaches?",
              text: "Stockouts, overstocking, at the wrong time?",
            },
            {
              title: "Risk of Account Suspension?",
              text: "Amazon’s strict policies make selling stressful.",
            },
            {
              title: "Wasting Time & Getting Stuck?",
              text: "Managing it all alone is overwhelming.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8"
            >
              <h3 className="text-[#FFA500] font-semibold mb-3">
                {item.title}
              </h3>

              <div className="w-[2px] h-10 bg-[#FFA500] mb-4"></div>

              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#FFA500] text-white px-8 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_black] hover:translate-y-[2px] transition">
            Talk to an Expert
          </button>
        </div>

      </div>
    </section>
  );
}