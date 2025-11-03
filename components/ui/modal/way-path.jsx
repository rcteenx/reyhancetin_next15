"use client";
import Link from "next/link";

export default function YolSuresiBanner({ currentStep = 1 }) {
  const steps = [
    { id: 1, title: "Yol Girişi", link: "giris" },
    { id: 2, title: "Sözleşme", link: "sozlesme" },
    { id: 3, title: "Başvuru", link: "basvuru" },
    { id: 4, title: "Katılım", link: "katilim" },
  ];

  const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <section className="my-8 relative bg-gradient-to-r from-purple-50 to-purple-100 p-6 md:p-12 md:rounded-xl shadow-lg max-w-3xl mx-auto">
      {/* Başlık kutusu */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-full shadow-md text-center font-semibold">
        Bilinç Yolculuğu Süreci
      </div>

      {/* Progress bar */}
      <div className="relative flex items-center justify-between mb-6">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 rounded-full -z-10"></div>
        <div
          className="absolute top-1/2 left-0 h-2 bg-purple-600 rounded-full -z-10 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        ></div>

        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center text-center w-24 md:w-32 relative z-10"
            >
              {/* Step numarası link olarak */}
              <Link href={`/yol/${step.link}`} passHref>
                <div
                  className={`cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border-2 text-lg font-semibold mb-2 transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-purple-600 border-purple-600 text-white"
                      : ""
                  }
                  ${
                    isActive
                      ? "bg-white border-purple-600 text-purple-600 shadow-lg"
                      : "bg-white border-gray-300 text-gray-400"
                  }
                  `}
                >
                  {step.id}
                </div>
              </Link>

              {/* Step title link olarak */}
              <Link href={`/yol/${step.link}`} passHref>
                <h4
                  className={`cursor-pointer font-semibold text-sm md:text-base ${
                    isActive
                      ? "text-purple-700"
                      : isCompleted
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </h4>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Aktif adım vurgusu */}
      <div className="mt-4 text-center">
        <span className="text-purple-700 font-medium">
          📍 Şu anki adım: {steps.find((s) => s.id === currentStep)?.title}
        </span>
      </div>
    </section>
  );
}
