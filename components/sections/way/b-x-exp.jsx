"use client";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Bu yolculuk, içimde sessiz bir alan açtı; her adımda kendimle daha derin bir şekilde karşılaştım.",
  },
  {
    quote:
      "Alan çalışmaları sayesinde yalnız olmadığımı hissettim; yolumu görmek ve ilerlemek çok daha kolaylaştı.",
  },
  {
    quote:
      "Atölyeler ve seminerler bana sadece bilgi değil, deneyimleyerek öğrenme fırsatı sundu.",
  },
  {
    quote:
      "Tek bir odada yaşadığımı sanırken varlığımda daha birçok oda olabileceğini fark ettim.",
  },
  {
    quote:
      "Bir şeyi fark ettiğimizde onu artık görmezden gelemiyoruz; yol kendiliğinden devam ediyor.",
  },
  {
    quote:
      "Bu çalışma, insanı kendi gerçekliğine hızlı ve dürüst bir şekilde yaklaştıran, çok sağlam bir alan.",
  },
  {
    quote:
      "Hayatın görünürde olandan daha fazlasını taşıdığını sezmek; olayların bize bir şey anlatabileceğini görmek için güçlü bir ortam.",
  },
  {
    quote:
      "Rehberin ve yol arkadaşlarının paylaşımları, benzer süreçlerden geçenleri duymak, başkalarının deneyimlerinden öğrenmek… Yalnız olmadığını görmek çok motive edici.",
  },
  {
    quote:
      "Bu çalışma, kendi mekanikliğimi ve otomatik tepkilerimi gözlemlememe; zihinsel, duygusal ve bedensel olarak daha geniş bir perspektife yerleşmeme yardımcı oluyor.",
  },
  {
    quote:
      "Reyhan hocamın bilinçli gözlemin sonucunda; zihin karmaşıklığından yavaş yavaş berraklaşan bilince geçtim. Akılcı düşünmeme ve net kararlar almama yardımcı oldu.",
  },
  {
    quote:
      "Reyhan hocamın oluşturmuş olduğu gruplarda ve gruplardaki paylaşımların neticesinde oluşan etkileşimler ise sürecimin devamlılığına katkı sağlamaya devam ediyor.",
  },
];

/**
 * testimonials: array of { quote: string, author: string, ... }
 * (Senin mevcut testimonials değişkenini kullanır)
 */

export default function TestimonialsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const modalRef = useRef(null);

  // Kapatma yardımcıları: Esc ve dış tıklama
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const onClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);

    // focus close button for accessibility
    if (closeBtnRef.current) closeBtnRef.current.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <section className="bg-purple-50 py-12 px-6 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">
            Katılımcı Deneyimleri
          </h2>
          <p className="text-center text-purple-800 mb-12 max-w-2xl mx-auto">
            Yol arkadaşlarımızın paylaşımlarından ilham al. Bu yolculuk yalnızca
            bilgi değil; farkındalık, deneyim ve ortak bir alanın içinde gelişen
            bir dönüşümdür.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="text-purple-900 italic mb-4">“{t.quote}”</p>
              </div>
            ))}
          </div>

          {/* Sağ altta modal açma butonu */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors text-sm font-medium"
              aria-haspopup="dialog"
              aria-expanded={isOpen}
            >
              Tüm Deneyimleri Gör →
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Tüm katılımcı deneyimleri"
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal card */}
          <div
            ref={modalRef}
            className="relative z-50 max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Tüm Katılımcı Deneyimleri
              </h3>
              <button
                ref={closeBtnRef}
                onClick={() => setIsOpen(false)}
                className="text-purple-600 hover:text-purple-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 "
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>

            {/* İçerik (kaydırılabilir) */}
            <div className="max-h-[70vh] overflow-y-auto p-6 space-y-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 bg-purple-100  last:mb-0 "
                >
                  <p className="text-gray-900 italic mb-2">“{t.quote}”</p>
                </div>
              ))}
            </div>

            {/* Footer (isteğe bağlı) */}
            <div className="px-8 py-4 border-t flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-purple-600  border border-gray-200 text-gray-200 px-4 py-2 rounded-md hover:bg-purple-400"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
