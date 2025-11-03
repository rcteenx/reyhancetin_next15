"use client";
import { useEffect, useRef, useState } from "react";

const stepsData = [
  {
    title: "Gözlemci Ben",
    category: "Farkındalık Katmanı",
    description:
      "Beden, zihin ve duyguların otomatik akışını gözle. Kendine tarafsız bir şahit ol ve meta-bilinç kazan.",
    icon: "👁️",
  },
  {
    title: "Yardımcı Kahya",
    category: "Deneyim Katmanı",
    description:
      "Bedende kal, her an yeni izlenimleri al. Düşünce ve eylemlerini anlamaya çalış ve bilinçle yönlendir.",
    icon: "🧘",
  },
  {
    title: "Kahya",
    category: "Bütünleşme Katmanı",
    description:
      "Ben bilincini ait olduğu saf farkındalık alanına kavuşsun. Benlik algısı olmadan kaynaktan gelen akışta ol.",
    icon: "✨",
  },
];

export default function YolDonusumSinematik() {
  const refs = useRef([]);
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            // Ardışık animasyon için gecikme ekle
            setTimeout(() => {
              setVisible((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200); // 200ms aralık
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2>BEN ALGISININ DÖNÜŞÜMÜ</h2>
        <h3>Bilincin Kaynağa Dönüş Yolculuğu</h3>
        <p className="text-gray-700 mb-12">
          Yolculuk, otomatik tepkilerden ve bize yüklenmiş alışkanlıkların
          gölgesinden ayrıldığımızda başlar.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
              className={`p-6 bg-white rounded-3xl shadow-md transform transition-all duration-700
                ${
                  visible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
              {/* İkon için pop/bounce efekti */}
              <div
                className={`text-4xl inline-block transform transition-transform duration-500
                  ${visible[index] ? "scale-110" : "scale-0"}`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-purple-600 my-2">
                {step.title}
              </h3>
              <p className="text-gray-700">
                {step.category}: {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
