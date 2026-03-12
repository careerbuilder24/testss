

import React from "react";

export default function FourthSection() {
  return (
    <section className="py-24  font-oswald">
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
          <span className="text-[#FFA500] text-sm">Our Services</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] md:text-[52px] leading-tight font-bold">
            Scale Smarter, <span className="text-[#FFA500]">Sell Faster</span>
          </h2>
          <p className="text-gray-600 mt-2">
            We handle everything Amazon so you can focus on growing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className=" p-8 rounded-xl border border-gray-200 flex justify-between gap-6">
            <div>
              <h3 className="text-[#FFA500] font-semibold mb-2">
                Amazon Growth & Advertising
              </h3>

              <div className="w-[2px] h-10 bg-[#FFA500] mb-4"></div>

              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  Bid & Budget Optimization – Higher ROI, lower ACOS.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  Monthly PPC Strategy – Tailored for long-term growth.
                </li>
              </ul>
            </div>

            <img
              src="https://i.postimg.cc/50yZ7zfw/sdfgpihd.png"
              alt="service"
              className="w-20 h-16"
            />
          </div>

          {/* Card 2 */}
          <div className=" p-8 rounded-xl border border-gray-200 flex justify-between gap-6">
            <div>
              <h3 className="text-[#FFA500] font-semibold mb-2">
                SEO & Product Ranking
              </h3>

              <div className="w-[2px] h-10 bg-[#FFA500] mb-4"></div>

              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  Organic & Sponsored Ranking – More visibility, more sales
                </li>

                <li className="flex gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  Keyword & Competitor Analysis – Stay ahead of the competition
                </li>
              </ul>
            </div>

            <img
              src="https://i.postimg.cc/PNs95FYd/dsfidf.png"
              alt="service"
              className="w-20 h-16"
            />
          </div>

          {/* Card 3 */}
          <div className=" p-8 rounded-xl border border-gray-200 flex justify-between gap-6">
            <div>
              <h3 className="text-[#FFA500] font-semibold mb-2">
                Inventory & Account Management
              </h3>

              <div className="w-[2px] h-10 bg-[#FFA500] mb-4"></div>

              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  Inventory Forecasting & Restocking – No stockouts
                </li>

                <li className="flex gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  Amazon Account Health & Compliance
                </li>
              </ul>
            </div>

            <img
              src="https://i.postimg.cc/xjJdqJMB/dfsgikfsd.png"
              alt="service"
              className="w-20 h-16"
            />
          </div>

          {/* Card 4 */}
          <div className=" p-8 rounded-xl border border-gray-200 flex justify-between gap-6">
            <div>
              <h3 className="text-[#FFA500] font-semibold mb-2">
                Scaling & Expansion
              </h3>

              <div className="w-[2px] h-10 bg-[#FFA500] mb-4"></div>

              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  Launching New Products – Market research-backed success
                </li>

                <li className="flex gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  International Expansion – Sell beyond borders with ease
                </li>
              </ul>
            </div>

            <img
              src="https://i.postimg.cc/9QpmsGHt/dfgpihsf.png"
              alt="service"
              className="w-16 h-16"
            />
          </div>

        </div>
      </div>
    </section>
  );
}