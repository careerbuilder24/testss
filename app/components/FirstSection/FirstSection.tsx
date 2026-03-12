

import React from "react";

export default function FirstSection() {
  return (
    <section className="py-20 font-oswald font-bold">

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl text-gray-800">
          Amazon Market Statistics Worldwide 2024
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center hover:shadow-md transition">
          <h3 className="text-4xl text-black mb-2">
            600 million
          </h3>
          <p className="text-gray-600 text-sm">
            Amazon Offers Over Products
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center hover:shadow-md transition">
          <h3 className="text-4xl text-black mb-2">
            $638.0 billion
          </h3>
          <p className="text-gray-600 text-sm">
            Amazon Global Net Sales Revenue
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center hover:shadow-md transition">
          <h3 className="text-4xl text-black mb-2">
            11.95 million
          </h3>
          <p className="text-gray-600 text-sm">
            Amazon Handles Orders Daily.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center hover:shadow-md transition">
          <h3 className="text-4xl text-black mb-2">
            $1.6 billion
          </h3>
          <p className="text-gray-600 text-sm">
            Amazon Average Daily Sales Revenue
          </p>
        </div>

      </div>
    </section>
  );
}