"use client";
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Bu yol kimler için uygun değil?",
      answer:
        "Bu yol, sadece “hızlı çözüm arayan” veya “gösteriş amaçlı spiritüalizm peşinde olan” kişiler için uygun değildir. Burada odak, içsel dönüşüm ve pratik farkındalıktır.",
    },
    {
      question: "Katılmak için ön bilgi veya deneyim gerekiyor mu?",
      answer:
        "Hayır. Yol, başlangıç seviyesinden deneyimli farkındalık arayışçılarına kadar herkes için açıktır. Önemli olan içten bir merak ve kendine bakma isteğidir.",
    },
    {
      question: "Bu yol ne kadar zaman alır?",
      answer:
        "Süre kişiden kişiye değişir. Bazı etkileri hemen deneyimleyebilirsin; derin dönüşüm ise düzenli pratik ve gözlemle zaman içinde gelir.",
    },
    {
      question: "Günlük hayatımda nasıl uygulanıyor?",
      answer:
        "Temel amaç, farkındalık ve uyanıklığı gündelik yaşama taşımaktır. Basit gözlem egzersizleri, nefes farkındalığı ve bilinçli seçimler pratiğe aktarılır.",
    },
    {
      question: "Grup çalışmaları veya seminerler gerekli mi?",
      answer:
        "Tek başına çalışabilirsin, ancak grup ortamı hem deneyimi derinleştirir hem de topluluk desteği sağlar. İsteğe bağlıdır ama tavsiye edilir.",
    },
    {
      question: "Bu yol dini bir öğretiye bağlı mı?",
      answer:
        "Hayır. Yol felsefi ve pratik bilinç çalışmaları üzerine kuruludur; herhangi bir dini inanç şartı yoktur.",
    },
    {
      question: "Yolda ilerlemeyi nasıl ölçebilirim?",
      answer:
        "Ölçüm dışsal değil, içsel olarak gerçekleşir. Duygusal tepkilerde azalma, farkındalık süresinin artışı, gözlem kapasitesindeki gelişim gibi işaretler kişisel ilerlemeni gösterir.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">
          Sık Sorulan Sorular
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-5 py-4 font-medium bg-purple-100 hover:bg-purple-200 flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span className="ml-2 text-lg font-bold text-purple-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 border-t bg-purple-50 text-gray-700 transition-colors duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
