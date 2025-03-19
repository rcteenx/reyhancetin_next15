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
          className="carousel-inner h-[520px] sm:h-[600px] text-yellow-300 flex transition-transform duration-500 text-center w-full "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div key="1" className="carousel-item relative flex-shrink-0 w-full ">
            <div className="reyhanInfoPosition">
              <div className="reyhanInfoContent">
                <h3>Merhaba,</h3>
                <h3>🌟 Tekrar hoş geldin! 🌟</h3>
                <p>
                  Öncelikle, bu karşılaşmaya çok sevindik. Burada bir davet var:
                  Yolculuğa beraber devam edelim.
                </p>
                <p>
                  İçimizde başlayan arayış, bizi kendimizi tanıma yoluna soktu.
                  Yolculuk başladığında, ister istemez içgüdülere ya da toplumun
                  kalıplarına hapsolmuş olandan uzaklaştık.
                </p>
                <p>
                  Eğer sen de bir arayış içindeysen ya da kendini bu yolda
                  görüyorsan, bilinç ve farkındalık çemberi seni bekliyor.
                </p>
                <p>🌟 Şimdiden hoş geldin! 🌟</p>
                <p className="text-right">Sevgilerle... Reyhan X</p>
              </div>
            </div>
          </div>
          <div key="2" className="carousel-item relative flex-shrink-0 w-full ">
            <div className="reyhanInfoPosition">
              <div className="reyhanInfoContent">
                <h3>Kimim ya da NE?</h3>
                <p>Belki de en doğru soru şu: Ne değilim?</p>
                <p>
                  Bir etiket ya da isim değilim. “Reyhan Çetin X” beni işaret
                  ediyor, ama tanımlamıyor.
                </p>
                <p>
                  Mesleğim değilim. Ne yazılımcı, ne rehber, ne de bir koç…
                  Bunlar sadece hayat içinde oynadığım roller. Tıpkı baba, eş,
                  arkadaş ya da başka birçok kimlik gibi.
                </p>
                <p>Duygularım değilim. Düşüncelerim de… Onlar gelip geçiyor.</p>
                <p>
                  Uzun süre kendimi “bilinç” sanmıştım. Ama pandemi döneminde
                  fark ettim: O da değil.
                </p>
                <p>
                  Belki de gerçeğe en çok yaklaşan cevap: İçerdeki Sessiz Tanık.
                  Ama kelimelerle anlatacak kadar iyi tanımıyorum. Sadece
                  hissetmeye başladım.
                </p>
              </div>
            </div>
          </div>

          <div key="3" className="carousel-item relative flex-shrink-0 w-full ">
            <div className="reyhanInfoPosition">
              <div className="reyhanInfoContent  [&>p]:my-2 ">
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
                  hayatı IT ile devam etti.
                </p>
                <p>
                  2000'de ezoterik çalışmaları başladı.
                  <br />
                  2010’lu yıllarda bilinçli farkındalık anlattı.
                  <br />
                  2020'de çalışmaları başarısızlıkla bitti.
                </p>
                <p>
                  5 yıllık sessizlikten sonra, "saf farkındalık"a dayalı yeni
                  çalışmaları tekrar başlatıyor.
                </p>
                <p>
                  Halen Çanakkale'nin Biga ilçesinde yaşıyor.
                  <br />2 kız ve bir erkek çocuk babası.
                </p>
              </div>
            </div>
          </div>

          <div key="4" className="carousel-item relative flex-shrink-0 w-full ">
            <div className="reyhanInfoPosition">
              <div className="reyhanInfoContent">
                <h3 className="">Reyhan Çetin X</h3>
                <h4 className="my-0 text-base sm:text-xl leading-6">
                  Bilinç ve Farkındalık Rehberi
                </h4>
                <p>
                  İnsanların yaşamı objektif bir gözle değerlendirebilmesi ve
                  kendi bilinçlerinin farkına varabilmesi için seminerler,
                  meditasyonlar, grup çalışmaları ve bireysel koçluk seansları
                  düzenliyorum. Bu çalışmalar, daha çok pratik ve maddi
                  hedeflere yönelik olup, ücretli olarak sunulmaktadır.
                </p>
                <p>
                  Bunun yanında, yolda olanlarla birlikte"
                  <strong>Saf Farkındalık Çemberi</strong>" oluşturmak amacıyla
                  ücretsiz YouTube sohbetleri, presence meditasyonları ve
                  çeşitli paylaşımlar yapıyorum. Bu spiritüel hizmetler
                  gönüllülük esasına dayanıyor ve bağışlarla destekleniyor.
                </p>
                <p></p>
                <p>Sevgilerle...</p>
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
