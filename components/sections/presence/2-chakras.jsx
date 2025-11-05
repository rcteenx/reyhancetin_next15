// components/ChakraPresenceTabs.jsx
"use client";

import { useState, useEffect } from "react";

const chakraData = [
  {
    id: 7,
    color: "F5EBFA",
    title: "Saf Sessizlikte Varlık",
    text: "Varlığın özü, zihnin ötesindeki durulukta kendini açar. Burada farkındalık; bir deneyim değil, kendini bilen sınırsız açıklıktır.",
  },
  {
    id: 6,
    color: "EBE8F7",
    title: "Görülmeyeni Gören Alan",
    text: "Görünen dünya değişir, imgeler akar; fakat fark eden aydınlık alan hep aynıdır. Sessiz tanık, tüm görünenleri çabasızca içerir.",
  },
  {
    id: 5,
    color: "E7F2FA",
    title: "Söylenmeyenin Derin Huzuru",
    text: "Sözlerden önce gelen o duru alan, varlığın gerçek ifadesidir. Konuşmadan bile aktarılan, saf mevcudiyetin varlığıdır.",
  },
  {
    id: 4,
    color: "E6F6EB",
    title: "Açık ve Yargısız Varlık",
    text: "Kalp, duygulardan önce gelen genişliktir. Hisler yükselir ve geçer; onları tutan sessiz alan ise doğal şefkattir.",
  },
  {
    id: 3,
    color: "FFF8D6",
    title: "Sessiz Gücün Farkındalığı",
    text: "Gerçek güç, kontrol etmekte değil; olanın içinde uyanık kalabilmektedir. Burası, benlik geriliminin çözüldüğü iç açıklıktır.",
  },
  {
    id: 2,
    color: "FCEADF",
    title: "Akışın Tanıklığı",
    text: "Hareket, arzu, yaratıcılık… Hepsi değişken bir dalgadır. Değişmeyen, dalgaların dayandığı o canlı boşluktur.",
  },
  {
    id: 1,
    color: "FBE5E6",
    title: "Şimdiye Köklenen Mevcudiyet",
    text: "Güven, durmadan bir şeylere tutunmakta değil; bu anın toprağına açıkça yerleşebilmekte bulunur. Tanık, kendi zeminiyle birdir.",
  },
];

export default function ChakraPresenceTabs() {
  const [active, setActive] = useState(7);
  const [fading, setFading] = useState(true);

  const item = chakraData.find((c) => c.id === active);

  // Auto-rotate
  useEffect(() => {
    let paused = false;

    const interval = setInterval(() => {
      if (paused) return;
      setFading(false);
      setTimeout(() => {
        setActive((prev) => (prev === 1 ? 7 : prev - 1));
        setFading(true);
      }, 150);
    }, 4000);

    const stop = () => {
      paused = true;
      setTimeout(() => {
        paused = false;
      }, 6000);
    };

    window.addEventListener("chakraPause", stop);

    return () => {
      clearInterval(interval);
      window.removeEventListener("chakraPause", stop);
    };
  }, []);

  const handleChange = (id) => {
    const ev = new Event("chakraPause");
    window.dispatchEvent(ev);

    setFading(false);
    setTimeout(() => {
      setActive(id);
      setFading(true);
    }, 150);
  };
  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <div
        className="
      absolute -top-2 md:-top-2 left-16 md:left-28
      p-2 md:p-4
      rounded-xl
      backdrop-blur-md bg-white/30
      shadow-md
      border border-white/40
      z-20
    "
      >
        <h2 className="text-lg md:text-xl font-serif text-black/80 p-0 m-0">
          Yedi Katmanda Mevcudiyet
        </h2>
      </div>
      <div className="flex gap-0 z-1">
        {/* Vertical Tabs */}
        <div
          className="flex flex-col items-center justify-center gap-2 md:gap-4 py-4 px-2 md:px-4 bg-gradient-to-b from-purple-600 via-indigo-500 via-blue-500 via-green-500 via-yellow-400 via-orange-500 to-red-500 rounded-l-xl shadow-[inset_-2px_0_8px_rgba(0,0,0,0.12)]
"
        >
          {chakraData.map((c) => (
            <button
              key={c.id}
              onClick={() => handleChange(c.id)}
              className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-sm font-semibold transition border hover:scale-105 
 ${
   active === c.id
     ? `bg-white border-black/30`
     : ` border-black/10 hover:border-black/30 shadow-[0_0_40px_rgba(255,255,255,0.65)] `
 }`}
            >
              {c.id}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className={`bg-[#${item.color}] p-4 md:p-8 rounded-r-2xl 
  shadow-[0_0_30px_rgba(255,255,255,0.5)] w-full 
  flex items-center justify-center transition-all duration-500 transform 
  ${fading ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div>
            <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
            <p className="text-base leading-relaxed text-black/70">
              {item.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
