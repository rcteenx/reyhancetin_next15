"use client";
import { useState, useEffect } from "react";

export default function ReyhanInfo({ autoplayInterval = 300000 }) {
  var items = [1, 2, 3, 4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      handleNextClick();
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex, autoplayInterval]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="carousel overflow-hidden">
        <div
          className="carousel-inner h-[480px] sm:h-[600px]  text-yellow-300 flex transition-transform duration-500 text-center w-full "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div key="1" className="carousel-item relative flex-shrink-0 w-full ">
            <div className="reyhanInfoPosition">
              <div className="reyhanInfoContent">
                <h3>Merhaba,</h3>
                <h3>Sayfama hoş geldin! 🌟</h3>
                <p>
                  Öncelikle, bu karşılaşmaya çok sevindim. Bu sayfa sana bir
                  davet sunuyor — kaynağa yolculuğa birlikte devam edelim.
                </p>
                <p>
                  Üniversite döneminde başlayan arayış, beni bilinç ve
                  farkındalık çalışmaları yoluna soktu. Kendi içgüdüleri ya da
                  toplumun kurallarıyla ilerleyen kişilerden uzaklaşmış oldum.
                </p>
                <p>
                  Pek çok insanın içinde bir arayış yok ya da yola çıkmıyor.
                </p>
                <p>
                  Eğer bir arayışın varsa ya da kendini yolda görüyorsan, bilinç
                  ve farkındalık çemberi, yeni yol arkadaşlarını bekliyor.
                  <br />
                  Şimdiden hoş geldin! 🌟
                </p>
                <p className="text-right">Sevgilerle... Reyhan X</p>
              </div>
            </div>
          </div>
          <div key="2" className="carousel-item relative flex-shrink-0 w-full ">
            <div className="reyhanInfoPosition">
              <div className="reyhanInfoContent">2a</div>
            </div>
          </div>
          <div key="3" className="carousel-item relative flex-shrink-0 w-full ">
            <div className="reyhanInfoPosition">
              <div className="reyhanInfoContent">
                <h3 className="">Reyhan Çetin</h3>
                <h5 className="my-0 text-base sm:text-xl leading-6">
                  Bilinçli Farkındalık Rehberi
                </h5>
                <p>
                  Bu “Reyhan Çetin” profili, <br />
                  bilinçli farkındalık yolunda
                  <br />
                  bir arkadaş çemberinin ilk ağacı.
                </p>
                <p>
                  Sosyal medyanın imkanlarını kullanarak,
                  <br />
                  bilgi paylaşmayı, bilinci geliştirmeyi
                  <br />
                  ve farkındalığı korumayı amaçlıyoruz.
                </p>
                <p>
                  Eski dostlar ve yeni takipçiler hoş geldiniz.
                  <br />
                  Bu çemberi katkılarınızla geliştirelim!
                </p>
                <p>Sevgilerle...</p>
              </div>
            </div>
          </div>

          <div key="4" className="carousel-item relative flex-shrink-0 w-full ">
            <div className="reyhanInfoPosition">
              <div className="reyhanInfoContent">
                <h3>Klasik Tanıtım</h3>
                <p>
                  1976 yılında Biga'da doğdu.
                  <br />
                  Baba kamyon şoförü, anne ev hanımı.
                  <br />
                  Bir erkek kardeş ve babaanne.
                </p>
                <p>
                  Dumlupınar İlkokulu,
                  <br />
                  Çanakkale Anadolu Lisesi ve
                  <br />
                  Boğaziçi Üniversitesi İşletme.
                </p>
                <p>
                  İşletme, satış-pazarlama ve dış ticaret ile başlayan çalışma
                  hayatı yazılım ile devam etti.
                </p>
                <p>
                  2000'de ezoterik felsefe çalışmalarına başladı.
                  <br />
                  2010’lu yıllarda moderatör olarak devam etti.
                </p>

                <p>Pandemi (2020) çalışmalarını durdurdu.</p>

                <p>
                  Halen Çanakkale'nin Biga ilçesinde yaşıyor.
                  <br />2 kız ve bir erkek çocuk babası.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-600 rounded-full p-1 sm:p-2 hover:bg-yellow-500 transition-colors duration-300"
        onClick={handlePrevClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-600 rounded-full p-1 sm:p-2 hover:bg-yellow-500 transition-colors duration-300"
        onClick={handleNextClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div className="carousel-dots p-2 gradientGold rounded-xl flex justify-center mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot mx-1 w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-yellow-700" : "bg-yellow-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
