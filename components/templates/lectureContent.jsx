"use client";
import { useState } from "react";
import IconComponent from "@/components/ui/IconComponent";

export default function LectureContent({ lecture }) {
  const [activeTab, setActiveTab] = useState(1);

  let counter = 1;

  return (
    <div className="">
      <h2 className="px-10 text-2xl">{lecture.title}</h2>
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
            className={`grayTab text-center 
              ${activeTab === s.id ? "block" : "hidden"}`}
          >
            <h3 className="text-2xl md:text-4xl">
              {s.stage_no}: {s.stage_title}
            </h3>
            <p>{s.stage_quote}</p>
            <ol className="my-4 space-y-2">
              {s.sections.map((section, index) => (
                <li key={index} className="pb-2 text-center">
                  <h4 className="text-base md:text-2xl ">
                    {index + 1}- {section.section_title}
                  </h4>
                  <p className="">{section.section_aim}</p>

                  {Array.isArray(section.titles) &&
                    section.titles.length > 0 && (
                      <ol className="">
                        {section.titles?.map((title, index) => (
                          <li
                            key={index}
                            className="my-2 px-2 py-1 bg-gray-50 rounded-lg hover:bg-white  text-left"
                          >
                            <div className="flex flow-row items-center flex-nowrap">
                              <div className="mr-2 flex justify-center items-center ">
                                <span className="w-12 px-2 inline-block text-center bg-gray-200 rounded-full ">
                                  {/* {index + 1} */}
                                  {counter++}
                                </span>
                                <span className="w-8 inline-block text-center ">
                                  {title.mov != undefined && (
                                    <a href={title.mov} target="_blank">
                                      🎥
                                    </a>
                                  )}
                                </span>
                                <span className="w-8 inline-block text-center">
                                  {title.gpt == 1 && (
                                    <a
                                      href={`/cember/giris/${s.id}-${section.id}-${title.id}`}
                                      target="_blank"
                                    >
                                      <img
                                        className="mx-auto w-5"
                                        src="/assets/icons/chatgpt.png"
                                        title="ChatpGpt ile hazırlanmış"
                                      />
                                    </a>
                                  )}
                                </span>
                              </div>
                              <h5 className="">{title.title}</h5>
                            </div>

                            {Array.isArray(title.info) &&
                              title.info.length > 0 && (
                                <ul className="block ml-24 my-4 p-8 text-sm list-decimal text-gray-600 bg-slate-200 rounded-xl">
                                  {title.info?.map((info, index) => (
                                    <li>{info}</li>
                                  ))}
                                </ul>
                              )}
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
