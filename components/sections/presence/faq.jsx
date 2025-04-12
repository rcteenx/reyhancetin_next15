"use client";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Bu seminer için önceden bir deneyimim olması gerekir mi?",
    content:
      "Hayır, önceden herhangi bir deneyim gerekmiyor. Farkındalık ve içsel gözlem konularında yeni başlayanlar için de uygundur. Katılım için tek şart, bu yolculuğa açık bir zihinle başlamak istemenizdir.",
  },
  {
    id: 2,
    title: "Her hafta yapılan oturumlar kaydedilecek mi?",
    content:
      "Evet, her oturum kaydedilecek ve katılımcılarla paylaşılacaktır. Eğer bir oturumu kaçırırsanız, kaydı izleyebilirsiniz.",
  },
  {
    id: 3,
    title: "Seminer sadece çevrimiçi mi olacak?",
    content:
      "Evet, seminer çevrimiçi olarak gerçekleştirilecektir. Her hafta, Zoom üzerinden canlı katılım sağlayabilirsiniz.",
  },
  {
    id: 4,
    title: "Seminerin sonunda bir sertifika alacak mıyım?",
    content:
      "Bu seminerde odak noktamız, bilgi edinmekten çok içsel bir dönüşüm süreci yaşamaktır. Bu nedenle, seminer sonunda sertifika verilmeyecektir.",
  },
  {
    id: 5,
    title: "Katılım ücreti ne zaman ödenmelidir?",
    content:
      "Katılım ücreti, kayıt işlemi sırasında ödenmelidir. Ödeme bilgilerini size özel olarak ileteceğiz.",
  },
];

export default function PresenceFAQ({}) {
  const [openSection, setOpenSection] = useState(1); // Başlangıçta 1. bölüm açık

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="">
      <div className="space-y-2 ">
        {sections.map((section) => (
          <div key={section.id} className="border p-0 rounded-lg">
            <h4
              onClick={() => toggleSection(section.id)}
              className="px-2 text-sm text-left transition cursor-pointer "
            >
              <span className="">
                <span>{openSection === section.id ? "▴ " : "▾ "}</span>
              </span>
              {section.title}
            </h4>

            <p
              className={`m-0 text-sm text-left transition-all duration-300 ease-in-out overflow-hidden ${
                openSection === section.id ? "max-h-40 p-4" : "max-h-0 p-0"
              } bg-gray-100`}
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
