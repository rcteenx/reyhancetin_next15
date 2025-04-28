// pages/lecture.js
import React from "react";
import Link from "next/link";

import { lecture1 } from "@/content/lecture";

const LecturePage = () => {
  return (
    <div className="container mx-auto p-8 text-left">
      <h1 className="text-4xl font-bold mb-4">{lecture1[0].title}</h1>
      <h2 className="text-2xl text-gray-600 mb-8">{lecture1[0].title}</h2>

      <div className="lecture-content">
        {lecture1[0].content.map((section, sectionIndex) => (
          <div
            id={`section-${section.id}`}
            key={section.id}
            className="section mb-10"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {sectionIndex + 1}. {section.section_title}
            </h3>
            <blockquote className="italic text-gray-500 mb-6">
              {section.section_quote}
            </blockquote>

            <ol className="ml-6 space-y-2">
              {section.content.map((lesson, lessonIndex) => (
                <li key={lesson.lesson_title} className="mb-4">
                  <Link
                    href={`#lesson-${lesson.lesson_title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="text-lg text-blue-400 hover:underline"
                  >
                    {sectionIndex + 1}.{lessonIndex + 1} {lesson.lesson_title}
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
};

export default LecturePage;
