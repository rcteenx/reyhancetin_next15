"use client";
"use client";
import { useState } from "react";

const tabs = [
  { id: 1, title: "1.Hafta", content: "Biz kimiz, ne yaparız?" },
  { id: 2, title: "2.Hafta", content: "Koçluk, rehberlik ve daha fazlası." },
  { id: 3, title: "3.Hafta", content: "Bize ulaşmak için..." },
  { id: 4, title: "4.Hafta", content: "Bize ulaşmak için..." },
];

export default function PresenceWeeks({}) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="">
      <div className="flex justify-center space-x-2 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1 text-sm font-semibold rounded-t-xl transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#f2f2f2] "
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {/* Aşağıdaki İçerikler (Sabit) */}
      <div className="mt-0">
        {activeTab === 1 && (
          <div className="week">
            <h4>1. Hafta: Şimdi ve Burada Olmak</h4>
            <ul className="my-4 text-left">
              <li>İçimizdeki çocuğa dönmek</li>
              <li>Andaki izlenimleri almak</li>
              <li>Fizik bedene çıpalamak</li>
              <li>Objektif dünyaya dönüş</li>
              <li>Enerji kaçaklarını fark etmek</li>
            </ul>
            <p className="m-2 p-2 bg-white rounded-xl ">
              <em>"AN, üst bilinç hallerinin giriş kapısıdır."</em>
            </p>
          </div>
        )}

        {activeTab === 2 && (
          <div className="week">
            <h4>2. Hafta: Bölünmüş Dikkat</h4>
            <ul className="my-4 text-left">
              <li>Aynı anda iki şeyi fark edebilme</li>
              <li>Tercihen biri içerde, diğeri dışarda</li>
              <li>Yarı-otomatik tepkilerin azalması</li>
              <li>Çıpalanan dikkat ile anda kalmayı uzatma</li>
              <li>Kendimizi tanıma yolculuğuna başlama</li>
            </ul>
            <p className="m-2 p-2 bg-white rounded-xl ">
              <em>"Dikkat, dünyevi bilincimizin tohumudur."</em>
            </p>
          </div>
        )}

        {activeTab === 3 && (
          <div className="week">
            <h4>3. Hafta: Kendini Gözlem</h4>
            <ul className="my-4 text-left">
              <li>Ben algımızın, bedenden ayrılması</li>
              <li>Kendimizi objektif tanımaya başlamak</li>
              <li>Gerçekliği kabul edemeyen yapılar</li>
              <li>Gözlem sonuçlarını değerlendirmek</li>
            </ul>
            <p className="m-2 p-2 bg-white rounded-xl ">
              <em>"Gözlem ile bilinçli farkındalık yolculuğu başlar."</em>
            </p>
          </div>
        )}

        {activeTab === 4 && (
          <div className="week">
            <h4>4. Hafta: Bilinçli Düşünmek</h4>
            <ul className="my-4 text-left">
              <li>Otomatik düşünceleri fark etmek</li>
              <li>Gözlemciyi yönlendirmek</li>
              <li>Düşünceleri kontrol etmek</li>
              <li>Alternatif bakış açılarımızı görmek</li>
            </ul>
            <p className="m-2 p-2 bg-white rounded-xl ">
              <em>"Bilinçli düşünme ile, çalışmaya başlarız."</em>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
