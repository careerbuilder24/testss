import React from "react";
import { IoEarth } from "react-icons/io5";
export default function EigthSection() {
  const dates = [
    "",
    "",
    "",
    "",
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  return (
    <section className="bg-[#f7f7f7] py-24 font-oswald">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="bg-[#FFA500] px-3 py-1 rounded-md">
            <img
              src="https://i.postimg.cc/9MDMjrcx/image-6.png"
              alt="icon"
              className="w-6"
            />
          </div>
          <span className="text-sm">
            Contact <span className="text-[#FFA500]">Us</span>
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[42px] md:text-[56px] font-bold">
            Let’s Scale Your <span className="text-[#FFA500]">Business!</span>
          </h2>

          <p className="text-gray-600 mt-2">
            FINTRIXX — Your Amazon Growth Partner
          </p>
        </div>

        {/* Booking Container */}
        <div className="bg-white rounded-xl border border-gray-200 grid md:grid-cols-2 overflow-hidden">
          {/* LEFT SIDE */}
          <div className="p-10 border-r border-gray-200">
            <p className="text-gray-400 mb-2">Naim</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Book Your Strategy Session: Accelerate Your Growth!
            </h3>

            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex items-center gap-3">
                ⏱ <span>30 min</span>
              </div>

              <div className="flex items-center gap-3">
                💻{" "}
                <span>
                  Web conferencing details provided upon confirmation.
                </span>
              </div>
            </div>

            <div className="mt-16 text-blue-500 text-sm">Cookie settings</div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10">
            <h3 className="text-lg font-semibold mb-6">Select a Date & Time</h3>

            {/* Month */}
            <div className="flex justify-between items-center mb-6 text-gray-700">
              <button>{"<"}</button>
              <span className="font-medium">March 2025</span>
              <button>{">"}</button>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 text-xs text-gray-500 mb-3">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {dates.map((d, i) => {
                const num = Number(d);

                return (
                  <div
                    key={i}
                    className={`py-2 rounded-full ${
                      d && num >= 6 && num <= 28
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {d}
                  </div>
                );
              })}
            </div>

            {/* Timezone */}
            {/* <div className="mt-8 text-sm text-gray-600">
              <span className="font-medium">Time zone</span>
              <div className="mt-1">🌍 Asia/Dhaka (3:00pm)</div>
            </div> */}
            <div className="flex items-center gap-2">
              
              <IoEarth />
              <span>Asia/Dhaka (3:00pm)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <span>✉ leadsbridgedemo@example.com</span>

          <span>
            <span className="text-[#FFA500]">Note:</span> Have a question? Need
            a strategy? We're here to help.
          </span>
        </div>
      </div>
    </section>
  );
}
