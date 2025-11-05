// components/ChakraPresenceTabs.jsx
"use client";

import { useState, useEffect } from "react";

const chakraData = [
  {
    id: 7,
    color: "F5EBFA",
    title: "Taç Çakra · Saf Sessizlikte Varlık",
    text: "Varlığın özü, zihnin ötesindeki durulukta kendini açar. Burada farkındalık; bir deneyim değil, kendini bilen sınırsız açıklıktır.",
  },
  {
    id: 6,
    color: "EBE8F7",
    title: "Üçüncü Göz · Görülmeyeni Gören Alan",
    text: "Görünen dünya değişir, imgeler akar; fakat fark eden aydınlık alan hep aynıdır. Sessiz tanık, tüm görünenleri çabasızca içerir.",
  },
  {
    id: 5,
    color: "E7F2FA",
    title: "Boğaz Çakra · Söylenmeyenin Derin Huzuru",
    text: "Sözlerden önce gelen o duru alan, varlığın gerçek ifadesidir. Konuşmadan bile aktarılan, saf mevcudiyetin varlığıdır.",
  },
  {
    id: 4,
    color: "E6F6EB",
    title: "Kalp Çakra · Açık ve Yargısız Varlık",
    text: "Kalp, duygulardan önce gelen genişliktir. Hisler yükselir ve geçer; onları tutan sessiz alan ise doğal şefkattir.",
  },
  {
    id: 3,
    color: "FFF8D6",
    title: "Solar Plexus · Sessiz Gücün Farkındalığı",
    text: "Gerçek güç, kontrol etmekte değil; olanın içinde uyanık kalabilmektedir. Burası, benlik geriliminin çözüldüğü iç açıklıktır.",
  },
  {
    id: 2,
    color: "FCEADF",
    title: "Sakral Çakra · Akışın Tanıklığı",
    text: "Hareket, arzu, yaratıcılık… Hepsi değişken bir dalgadır. Değişmeyen, dalgaların dayandığı o canlı boşluktur.",
  },
  {
    id: 1,
    color: "FBE5E6",
    title: "Kök Çakra · Şimdiye Köklenen Mevcudiyet",
    text: "Güven, durmadan bir şeylere tutunmakta değil; bu anın toprağına açıkça yerleşebilmekte bulunur. Tanık, kendi zeminiyle birdir.",
  },
];

export default function ChakraPresenceTabsOk() {
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
    <div className="w-full max-w-5xl mx-auto flex gap-0">
      {/* Vertical Tabs */}
      <div className="flex flex-col items-center justify-center gap-4 py-6 px-4 bg-gradient-to-b from-purple-600 via-indigo-500 via-blue-500 via-green-500 via-yellow-400 via-orange-500 to-red-500 rounded-l-xl">
        {chakraData.map((c) => (
          <button
            key={c.id}
            onClick={() => handleChange(c.id)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition border ${
              active === c.id
                ? `bg-white border-black/30`
                : ` border-black/10 hover:border-black/30`
            }`}
          >
            {c.id}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className={`bg-[#${
          item.color
        }] p-10 rounded-r-2xl shadow-sm w-full flex items-center justify-center transition-all duration-500 transform ${
          fading ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div>
          <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
          <p className="text-base leading-relaxed text-black/70">{item.text}</p>
        </div>
      </div>
    </div>
  );
}
