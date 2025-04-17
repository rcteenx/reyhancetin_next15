"use client";
import { useState } from "react";

export default function Weeks({ weeks }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="">
      {/* Menu  */}
      <div className="flex justify-center space-x-1 ">
        {weeks.map((week) => (
          <button
            key={week.id}
            onClick={() => setActiveTab(week.id)}
            className={`px-2 py-1 text-sm font-semibold rounded-t-lg transition-all duration-300 ${
              activeTab === week.id
                ? "bg-[#f2f2f2] "
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {week.title}
          </button>
        ))}
      </div>
      {/* Content  */}
      {/* <div className="mt-0">
        <div className="week">
          <h4>
            {weeks[activeTab - 1].title}: {weeks[activeTab - 1].content.h4}
          </h4>
          <ul className="my-4 text-left">
            {weeks[activeTab - 1].content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div> */}
      {/* Content  2 */}
      <div className="mt-0">
        {weeks.map((w) => (
          <div
            key={w.id}
            className={`week 
              ${activeTab === w.id ? "block" : "hidden"}`}
          >
            <h4>
              {w.title}: {w.content.h4}
            </h4>
            <ul className="my-4 text-left">
              {w.content.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
