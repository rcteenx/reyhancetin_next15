"use client";

import { useState } from "react";

import ModalWayAttendece from "@/components/ui/modal/attendence-desc";

const attendence = {
  title: "🌀 Yol Arkadaşlığına Katılım",
  intro: [
    "Bu metin, Bilinç Yolculuğu çalışmalarına katılmadan önce okunması zorunlu olan bilgilendirme ve sözleşme dokümanıdır.",
    "Lütfen tüm maddeleri dikkatle inceleyiniz. “Okudum, Anladım ve Kabul Ediyorum” onayı verilmeden başvuru yapılamaz.",
  ],
  sections: [
    {
      id: 1,
      title: "Çalışmanın Tanımı ve Kapsamı",
      items: [
        "Bu çalışma ne içerir",
        "Hangi yöntemler kullanılır",
        "Amacı nedir",
        "Çalışma sırasında nasıl bir süreç işletilir",
      ],
      description: [
        "Bu çalışma, bilinçli farkındalık, öz-gözlem ve dikkat çalışmaları üzerine kuruludur.",
        "Katılımcının kendi iç süreçlerini daha objektif bir gözle fark edebilmesi amaçlanır.",
        "Bu süreç bir terapi ya da klinik müdahale niteliği taşımaz; katılımcı kendi iyilik hâlinden sorumludur.",
      ],
    },
    {
      id: 2,
      title: "Çalışmanın Niteliği",
      items: [
        "Bu çalışma bir terapi değildir",
        "Medikal ya da klinik yönlendirme değildir",
        "Teşhis koymaz, tedavi etmez",
        "Spiritüel/pedagojik bir farkındalık alanıdır",
        "Katılımcı kendi iyilik hâlinden sorumludur",
      ],
      description: [
        "Bu çalışmalar profesyonel psikoterapi veya psikiyatrik tedavi yerine geçmez.",
        "Her türlü tıbbi, psikolojik veya klinik destek için ilgili uzmanlara başvurulmalıdır.",
        "Çalışma; gözlem, farkındalık ve içsel dengeyi geliştirmeyi hedefleyen bir alan sunar.",
      ],
    },
    {
      id: 3,
      title: "Katılım Ön Koşulları",
      items: [
        "Zihinsel/duygusal uygunluk",
        "Grup çalışmalarına uygun davranış",
        "Kendi sorumluluğunu alabilme",
        "Niyetin dürüstlüğü",
      ],
      description: [
        "Katılımcının temel zihinsel ve duygusal dengesinin yerinde olması beklenir.",
        "Grup çalışmalarında uyumlu davranmak ve alana saygı göstermek temel ön koşuldur.",
        "Kişi kendi deneyiminden ve içsel sürecinden sorumludur.",
      ],
    },
    {
      id: 4,
      title: "Etik İlkeler ve Davranış Kuralları",
      items: [
        "Gizlilik",
        "Saygı",
        "Yargısız iletişim",
        "Aktif dinleme",
        "Alan ihlali yapmamak",
        "Taciz, manipülasyon, yönlendirme vb. yasak",
        "Makul çerçevede paylaşım",
      ],
      description: [
        "Tüm katılımcılar, paylaşılan bilgilerin gizliliğini korumayı kabul eder.",
        "Yargısız dinleme, saygılı ifade ve güvenli alan kuralları esastır.",
        "Her türlü baskı, yönlendirme, manipülasyon veya taciz kesin olarak yasaktır.",
      ],
    },
    {
      id: 5,
      title: "Grup Çalışması Kuralları",
      items: [
        "Başlama-bitiş zamanları",
        "Kamera açık / kapalı kuralları (varsa)",
        "Discord/Zoom/WhatsApp kuralları",
        "Grup içi özel mesaj kuralları",
        "Devamsızlık kuralları",
      ],
      description: [
        "Çalışma saatlerine tam zamanında katılım beklenir.",
        "Kamera açık/kapalı kuralı eğitmen tarafından belirlenir.",
        "Grup içi özel mesajlar sınırlandırılabilir veya yasaklanabilir.",
        "Devamsızlık belirli bir oranı aştığında çalışma devam ettirilmeyebilir.",
      ],
    },
    {
      id: 6,
      title: "Katılımcının Sorumlulukları",
      items: [
        "Kendi deneyimini sahiplenmek",
        "Farkındalık notları almak (varsa)",
        "Düzenli katılım",
        "İçsel çalışmaya açık olma",
        "Gerektiğinde eğitmene bilgi verme",
      ],
      description: [
        "Katılımcı, kendi içsel süreçlerinden ve duygusal durumundan sorumludur.",
        "İstikrarlı katılım çalışma verimini artırır.",
        "Gerekli durumlarda eğitmenle iletişim kurmak katılımcının sorumluluğudur.",
      ],
    },
    {
      id: 7,
      title: "Kolaylaştırıcının Sorumlulukları",
      items: [
        "Güvenli alan sağlamak",
        "Etik sınırlar",
        "Yargısız tutum",
        "Grup yönetimi",
        "Rehberlik etmek (yönlendirme değil)",
      ],
      description: [
        "Kolaylaştırıcı etik kurallara bağlıdır ve güvenli bir çalışma alanı oluşturur.",
        "Yargısız, yönlendirmeyen bir tutumla rehberlik eder.",
        "Katılımcıların deneyim alanına müdahale etmeden süreci yönetir.",
      ],
    },
    {
      id: 8,
      title: "Yol Arkadaşlığı Sözleşmesi",
      items: [
        "Bu çalışmanın kapsamını okudum ve anladım.",
        "Kendi psikolojik ve fiziksel iyilik hâlimden sorumluyum.",
        "Gizlilik ilkesine uymayı kabul ediyorum.",
        "Grup alanında diğer katılımcılara saygı göstereceğim.",
        "Yol arkadaşlığı ilişkisini etik sınırlar içinde tutacağım.",
      ],
      description: [
        "Bu bölüm, katılımcının çalışma boyunca uymayı kabul ettiği temel sözleşme maddelerini içerir.",
        "Onay kutusu işaretlenmeden çalışma başvurusu yapılamaz.",
      ],
    },
  ],
};

export default function WayAttendenceModal() {
  const [openId, setOpenId] = useState(null);
  const [checked, setChecked] = useState({});

  const handleOpen = (id) => {
    setOpenId(id);
    setChecked((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <>
      {/* SECTIONS */}
      {attendence.sections.map((section) => (
        <div key={section.id} className="mb-10">
          {/* Section Title */}
          <h3 className="text-xl font-semibold text-purple-700 mb-2">
            {section.id}. {section.title}
          </h3>

          {/* Maddeler */}
          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-3">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* ✅ Checkbox + Tümünü Oku butonu */}
          <label
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => handleOpen(section.id)}
          >
            <input
              type="checkbox"
              checked={checked[section.id] || false}
              readOnly
              className="w-5 h-5 accent-purple-600 cursor-pointer"
            />
            <span className="text-purple-700 hover:underline">Tümünü Oku</span>
          </label>

          {/* Modal */}
          <ModalWayAttendece
            open={openId === section.id}
            onClose={() => setOpenId(null)}
            id={section.id}
            title={section.title}
            paragraphs={section.description}
          />

          <div className="border-b border-gray-200 mt-8"></div>
        </div>
      ))}
    </>
  );
}
