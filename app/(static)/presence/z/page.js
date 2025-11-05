"use client";

import React from "react";

export default function PresencePage() {
  return (
    <main className="min-h-screen bg-cream-50 text-gray-900 antialiased flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        {/* Hero */}
        <section className="relative w-full">
          {/* --- Background Texture (extremely subtle) --- */}

          {/* --- Hero Content --- */}
          <div className="relative w-full pt-32 pb-20 px-6 md:px-10 bg-gradient-to-b from-[#fdfcf9] to-[#f4f1eb] border-b border-gray-300">
            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-serif tracking-tight text-center">
              PRESENCE
            </h1>

            {/* Alt Başlık — daha güçlü, daha büyük, serif uyumlu */}
            <p className="mt-5 text-2xl md:text-3xl font-serif text-gray-700 text-center leading-snug">
              Saf Varlığın Sessiz Alanı
            </p>

            {/* Subtle Divider */}
            <div className="w-14 h-[2px] bg-gray-500/40 mx-auto mt-6"></div>

            {/* Quote Placeholder (yenisini istediğinde değiştiririz) */}
            <p className="mt-8 text-lg md:text-xl font-serif italic text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
              “….. burada yeni söz olacak …..”
            </p>
          </div>

          {/* --- Description block (Kutunun altındaki açıklama) --- */}
          <div className="relative max-w-3xl mx-auto text-center mt-10 px-6">
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              Presence, anda olmak değildir. Benlik sınırlarının ötesinde,
              sessiz bir alana açılmak; düşüncelerin ve kimliğin gevşediği yerde
              beliren, doğal bir farkındalık halidir.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Kelimelerden çok, aradaki boşluklarda ve sessizliğin derinliğinde
              kendini gösteren bir varoluş hâlidir.
            </p>
          </div>
        </section>

        <div className="space-y-10">
          <section className="rounded-xl p-8 bg-purple-50 border border-purple-100">
            <h2 className="text-2xl font-serif mb-4">Presence Nedir?</h2>
            <p>
              Presence, bilincin anda olması değil, varlığın benlik sınırlarının
              ve zamanın ötesine genişlemesi ve alana yayılmasıdır.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              *Türkçe’de birebir karşılığı olmadığı için İngilizce kullanıyoruz.
            </p>
          </section>

          <section className="rounded-xl p-8 bg-green-50 border border-green-100">
            <h2 className="text-2xl font-serif mb-4">Presence Nedir?</h2>
            <p>
              İlk aşamada “Presence” kavramı bazı kişiler için net olmayabilir;
              ama biraz çabadan sonra belli bir anlayış ortaya çıkar.
            </p>
            <p className="mt-3">
              Zihin ve duygulardan uzaklaşmış,
              <br />
              Egoist ben bilincinin duvarlarını kırmış,
              <br />
              Bilinci olmayan Saf Farkındalık.
            </p>
            <p className="mt-3">
              Presence’ı, düşünceler arasındaki boşluklarda ve en güzeli,
              sessizliğin içinde bulabilirsiniz.
            </p>
          </section>

          <section className="rounded-xl p-8 bg-blue-50 border border-blue-100">
            <h2 className="text-2xl font-serif mb-4">
              PRESENCE'ı Hissedebilirsiniz
            </h2>
            <p>
              Kendi Presence’ınızı hissedebilmek için bile belli bir miktar
              presence gerekir. Aşağıdaki anları hatırlayın:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Düşünceler arasındaki boşlukta kaldığınız an</li>
              <li>Ben merkezli algının kaybolduğu bilinç hali</li>
              <li>Saf içsel huzur ve sessizlik</li>
            </ul>
            <p className="mt-3">
              Bu deneyimlerde artık isimler yoktur; olan sadece Saf
              Farkındalığın Varlığıdır.
            </p>
          </section>

          <section className="rounded-xl p-8 bg-yellow-50 border border-yellow-100">
            <h2 className="text-2xl font-serif mb-4">
              PRESENCE'ın Pratik Yararı Nedir?
            </h2>
            <p>
              Presence, aslında kendimizi ararken aradığımız şeydir: Gerçek
              Varlığımız.
            </p>
            <p className="mt-3">
              Hayatı tepkilerle yaşamayı,
              <br />
              Dünyayı ben bilinci ile görmeyi,
              <br />
              Acı ve huzursuzlukları bırakırsınız.
            </p>
            <p className="mt-3">
              Presence’ı fark ettiğinizde ölümsüz doğanızı, gerçek sevgiyi ve
              birliği deneyimlersiniz.
            </p>
          </section>

          <section className="rounded-xl p-8 bg-rose-50 border border-rose-100">
            <h2 className="text-2xl font-serif mb-4">
              PRESENCE'ı Hayatıma Nasıl Katarım?
            </h2>
            <p>
              Presence, hayatın dışında yaşanacak bir hal değil; olağan hayatın
              içinde, ama biraz ötesindedir.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Düşünceler arasındaki boşluklarda ol</li>
              <li>Benlik bilincini unutacak kadar akışa katıl</li>
              <li>Sessizce oturduğun anların olsun</li>
            </ul>
            <p className="mt-3">
              Eckhart Tolle’nin Şimdi’nin Gücü kitabı, aslında presence’ı
              anlatır; ama “anda olma”ya indirgenmiştir.
            </p>
          </section>

          {/* 2 - Bütünlük / Kişisiz Topluluk */}
          <section
            className="rounded-xl p-8 bg-white/50 backdrop-blur-sm border border-white/30"
            aria-label="Butunluk"
          >
            <div className="prose prose-lg max-w-none font-sans text-gray-800">
              <p>
                Presence’ta kişiler yoktur.
                <br />
                İsimler, hikâyeler, roller erir.
                <br />
                Geriye yalnızca akış kalır.
              </p>

              <p className="mt-4">
                Bu alanda sınırlar çözülür, ayrılık yerini bütünlüğe bırakır.
                Bir ses değil, birlikte akan bir sessizlik duyulur.
              </p>
            </div>
          </section>

          {/* 3 - Esik */}
          <section
            className="rounded-xl p-8 bg-white/50 backdrop-blur-sm border border-white/30"
            aria-label="Esik"
          >
            <div className="prose prose-lg max-w-none font-sans text-gray-800">
              <p>
                Presence, davetsiz girilen bir oda değildir.
                <br />
                Arayışın inceldiği, niyetin arındığı yerde kendiliğinden
                belirir.
              </p>

              <p className="mt-4">
                Buraya bir adım atılmaz; kapı yoktur zaten. Ama çağrılan herkes
                kendini içeride bulur.
              </p>

              <p className="mt-6 text-sm text-gray-500">
                Bu alan korunur, çünkü saf olan kendini korur.
              </p>
            </div>
          </section>

          {/* 4 - Kapanis */}
          <section
            className="rounded-xl p-8 bg-white/50 backdrop-blur-sm border border-white/30 text-center"
            aria-label="Kapanis"
          >
            <p className="text-lg md:text-xl font-serif">Buradayız.</p>
            <p className="mt-3 text-gray-600">
              Ve hazır olduğunda sen de burada olursun.
            </p>
          </section>
        </div>

        <div className="h-24" />

        <style jsx>{`
          :root {
            --cream-50: #fbf8f4;
          }
          .bg-cream-50 {
            background-color: var(--cream-50);
          }
          .font-serif {
            font-family: "Playfair Display", ui-serif, Georgia, Cambria,
              "Times New Roman", Times, serif;
          }
          .font-sans {
            font-family: Inter, ui-sans-serif, system-ui, -apple-system,
              "Segoe UI", Roboto, "Helvetica Neue", Arial;
          }
          .prose p {
            margin: 0 0 0.75rem 0;
          }
        `}</style>
      </div>
    </main>
  );
}
