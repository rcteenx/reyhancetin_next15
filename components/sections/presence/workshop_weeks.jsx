"use client";
"use client";
import { useState } from "react";

const tabs = [
  { id: 1, title: "1.Seans" },
  { id: 2, title: "2.Seans" },
  { id: 3, title: "3.Seans" },
  { id: 4, title: "4.Seans" },
  { id: 5, title: "5.Seans" },
];

export default function PresenceWeeksWorkshop({}) {
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
            <h4>Şimdi ve Burada Olma</h4>
            <ul className="my-4 text-left">
              <li>Giriş: Presence, 3. Bilinç, Kendini Gözlem</li>
              <li>Düşünce ve duygulardan ayrışmak</li>
              <li>Çalar Saat uygulamaları</li>
              <li>Serbest oturum (meditasyon)</li>
            </ul>
          </div>
        )}

        {activeTab === 2 && (
          <div className="week">
            <h4>Bölünmüş Dikkat</h4>
            <ul className="my-4 text-left">
              <li>Gözlemci Benliği geliştirmek</li>
              <li>Bölünmüş Dikkat meditasyonu</li>
              <li>Farklı merkezleri ve benlikleri tanımak</li>
            </ul>
          </div>
        )}

        {activeTab === 3 && (
          <div className="week">
            <h4>Kendini Gözlem</h4>
            <ul className="my-4 text-left">
              <li>Belirli olayları yer-zaman bağlamında gözlemleme</li>
              <li>Olaylara verdiğimiz içsel tepkileri ayırt etmek</li>
              <li>İç yargıçların etkisini fark etmek</li>
            </ul>
          </div>
        )}

        {activeTab === 4 && (
          <div className="week">
            <h4>Bilinçli Düşünme</h4>
            <ul className="my-4 text-left">
              <li>Odağı koruyarak alternatif benlikleri görmek</li>
              <li>Zihinsel akışı haritalamak (mind map yaklaşımı)</li>
              <li>Serbest Dikkat pratiği</li>
              <li>Konu odaklı meditasyon</li>
            </ul>
          </div>
        )}

        {activeTab === 5 && (
          <div className="week">
            <h4>Genel Değerlendirme</h4>
            <ul className="my-4 text-left">
              <li>Öğrenilenleri hayatın içinde uygulama</li>
              <li>İleri aşamalar için kişisel yol haritası</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
