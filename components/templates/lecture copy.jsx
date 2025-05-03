"use client";
import { useState } from "react";
import Link from "next/link";

export default function LectureCopy({ lecture }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="">
      <h2 className="text-2xl">{lecture.title}</h2>
      {/* Menu  */}
      <div className="flex justify-center space-x-1 ">
        {lecture.content.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`px-2 py-1 text-sm font-semibold rounded-t-lg transition-all duration-300 ${
              activeTab === section.id
                ? "bg-[#f2f2f2] "
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {section.section_no}. Bölüm
          </button>
        ))}
      </div>
      <div className="mt-0">
        {lecture.content.map((s) => (
          <div
            key={s.id}
            className={`grayTab 
              ${activeTab === s.id ? "block" : "hidden"}`}
          >
            <h3 className="text-xl">
              {s.section_no}: {s.section_title}
            </h3>
            <p>{s.section_quote}</p>
            <ol className="my-4 space-y-2">
              {s.content.map((lesson, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href={`/cember/giris/${s.id}-${index + 1}`}
                    className="text-lg text-blue-400 hover:underline"
                  >
                    {index + 1}- {lesson.lesson_title}
                  </Link>
                  <p className="text-gray-700 mt-1">{lesson.lesson_desc}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
