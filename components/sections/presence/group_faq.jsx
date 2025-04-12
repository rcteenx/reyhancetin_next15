"use client";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title:
      "Daha önce bireysel çalışmalara katılmamış olsam da gelebilir miyim?",
    content:
      "Hayır, grup çalışmaları, temel atölyemize katılmış ve çalışma için uygun olan arkadaşlara açıktır. Ortak bir dil ve anlayış oluşturmak için, herkesin giriş aşamasını tamamlamış olması gerekiyor.",
  },
  {
    id: 2,
    title: "Katılım için belli bir yaş ya da mesleki koşul var mı?",
    content:
      "Hayır. Önemli olan, içsel olarak bu yola çağrılıyor olmanızdır. Bununla beraber, ezoterik bir yolculuğa başlamak için, genel olarak, 30 ve hatta 40'lı yaşların daha uygun olduğunu belirtmek isterim.",
  },
  {
    id: 3,
    title: "Grup çalışmaları ne kadar sürecek?",
    content:
      "Belirli aralıklarla, ortalama 3 aylık döngüler planlanıyor. Sonrasında devam grupları oluşturulabilir.",
  },
  {
    id: 4,
    title: "Katılamadığım oturumlar olursa ne olacak?",
    content:
      "Grubun bütünlüğünü gözetmek için düzenli katılım önemlidir. Ancak zorunlu durumlarda kayıt ya da telafi imkanı sağlanabilir.",
  },
  {
    id: 5,
    title: "Bu çalışmalar neye dayanıyor?",
    content:
      "Gurdjieff’in Dördüncü Yol öğretisi temelinde; fakat modern psikoloji, mindfulness, somatik farkındalık gibi alanlarla da temas halinde bir çerçeveyle yürütülür.",
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
