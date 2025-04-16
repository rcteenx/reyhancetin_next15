"use client";
import { useState } from "react";

export default function FAQ({ faq }) {
  const [openSection, setOpenSection] = useState(1); // Başlangıçta 1. bölüm açık

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="">
      <div className="space-y-2 ">
        {faq.map((f) => (
          <div key={f.id} className="border p-0 rounded-lg">
            <h4
              onClick={() => toggleSection(f.id)}
              className="px-2 text-sm text-left transition cursor-pointer "
            >
              <span className="">
                <span>{openSection === f.id ? "▴ " : "▾ "}</span>
              </span>
              {f.title}
            </h4>

            <p
              className={`m-0 text-sm text-left transition-all duration-300 ease-in-out overflow-hidden ${
                openSection === f.id ? "max-h-40 p-4" : "max-h-0 p-0"
              } bg-gray-100`}
            >
              {f.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
