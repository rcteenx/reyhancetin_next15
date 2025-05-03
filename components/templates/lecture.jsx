"use client";
import { useState } from "react";
import Link from "next/link";

export default function Lecture({ lecture }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="">
      <h2 className="text-2xl">{lecture.title}</h2>
      {/* Menu  */}
      <div className="flex justify-center space-x-1 ">
        {lecture.stages.map((stage) => (
          <button
            key={stage.id}
            onClick={() => setActiveTab(stage.id)}
            className={`px-4 py-1 text-sm font-semibold rounded-t-lg transition-all duration-300 ${
              activeTab === stage.id
                ? "bg-[#f2f2f2] "
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {stage.stage_no}
          </button>
        ))}
      </div>
      <div className="mt-0">
        {lecture.stages.map((s) => (
          <div
            key={s.id}
            className={`grayTab 
              ${activeTab === s.id ? "block" : "hidden"}`}
          >
            <h3 className="text-2xl md:text-4xl">
              {s.stage_no}: {s.stage_title}
            </h3>
            <p>{s.stage_quote}</p>
            <ol className="my-4 space-y-2">
              {s.sections.map((section, index) => (
                <li key={index} className="pb-2">
                  <h4>
                    {index + 1}- {section.section_title}
                  </h4>
                  <p className="text-gray-700 mt-1">{section.section_aim}</p>

                  {Array.isArray(section.titles) &&
                    section.titles.length > 0 && (
                      <ol className="">
                        {section.titles?.map((title, index) => (
                          <li
                            key={index}
                            className="my-2 p-2 bg-gray-50 rounded-lg hover:bg-white "
                          >
                            <h5>
                              <span className="w-6 inline-block text-center">
                                {index + 1}
                              </span>
                              <span className="w-8 inline-block text-center">
                                <a
                                  href={`/cember/giris/${s.id}-${section.id}-${title.id}`}
                                  target="_blank"
                                >
                                  📄
                                </a>
                              </span>
                              <span className="w-8 inline-block text-center">
                                <a
                                  href="https://drive.google.com/file/d/1bHE7dbgp1f4hoKMKXiGJYdyuJwtx8lTc/view?usp=drive_link"
                                  target="_blank"
                                >
                                  🎥
                                </a>
                              </span>
                              <span className="ml-2">{title.title}</span>
                            </h5>
                          </li>
                        ))}
                      </ol>
                    )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
