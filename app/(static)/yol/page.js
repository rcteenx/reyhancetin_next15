import { whyweneed, whatwegain } from "@/content/data";
import { mekanikYollar, bilincliYollar } from "@/content/data/yol";
import { bOncesi, bSonrasi, safFarkindalik } from "@/public/assets/images";

import SvgCheck from "@/components/ui/svg/check";

import WayHero from "@/components/sections/way/1-hero";
import AdWorkshop from "@/components/ui/ad-workshop";

import WhyWeNeed from "@/components/sections/way/b-1-why-we-need";
import WhatWeGain from "@/components/sections/way/b-2-what-we-gain";

import PageContent from "@/components/templates/pageContent";

export default function Page() {
  return (
    <>
      <WayHero />
      <WhyWeNeed need={whyweneed} />
      <WhatWeGain img={safFarkindalik} gain={whatwegain} />

      <section className="relative w-100 h-12 md:h-24">
        {/* <div className="skewed"></div> */}
        <div className="curvedR"></div>
      </section>
      <section id="mekanikYollar" className="bg-indigo/50 py-8">
        <div className="container mx-auto">
          <div className="px-4 lg:p-0 text-left xl:text-center">
            <h2>{mekanikYollar.h2}</h2>
            <p>{mekanikYollar.p}</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 items-center">
            <div className="px-0 sm:px-4 lg:p-0 rounded-3xl">
              <img
                src={bOncesi.src}
                alt="img colletion"
                width="w-full"
                height={480}
                className=" sm:rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3>{mekanikYollar.h3}</h3>
              <ul className="space-y-5">
                {mekanikYollar.items.map((i, index, arr) => (
                  <li id={`mk${index}`} key={index} className="flex gap-2">
                    <SvgCheck />
                    <div>
                      <dt className="font-semibold text-lg">{i.title}</dt>
                      <dd
                        className={`-ml-7 mt-2 pb-2 ${
                          arr.length - 1 === index
                            ? "xx"
                            : index + " border-b border-gray-200"
                        }`}
                      >
                        {i.info}
                      </dd>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-100 h-12 md:h-24">
        <div className="curved"></div>
      </section>
      <section id="bilincliYollar" className="bg-white py-10">
        <div className="container mx-auto">
          <div className="px-4 lg:p-0 text-left xl:text-center">
            <h2 className="-mx-2 gradientIndigo rounded-xl p-2">
              {bilincliYollar.h2}
            </h2>
            <p>{bilincliYollar.p}</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 items-center">
            <div className="p-4">
              <h3>{bilincliYollar.h3}</h3>
              <ul className="space-y-5">
                {bilincliYollar.items.map((i, index) => (
                  <li id={`bl${index}`} key={index} className="flex gap-2">
                    <SvgCheck />
                    <div>
                      <dt className="font-semibold text-lg">{i.title}</dt>
                      <dd className="-ml-7 mt-2 pb-2 border-b border-gray-200">
                        {i.info}
                      </dd>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl hidden xl:block">
              <img
                src={bSonrasi.src}
                alt="img colletion"
                width="w-full"
                height={480}
                className=" rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <PageContent h2Title="Uzun İnce bir Yol">
        <p>
          Aşık Veysel'in sözleriyle, 'Uzun ince bir yolda' ilerliyoruz. Ancak,
          yol tek değil, birçok farklı yollar var. Üstelik, bir yol seçmeseniz
          bile, zaman akıyor ve olduğumuz yerde bile gidiyoruz gündüz gece!
        </p>
        <p>
          Bazı yollar, mekanik bir şekilde sürünün, karanlığın ve hiçliğin
          ortasında ilerlerken, bazıları ise kendimizi keşfetmeye, bilinçli ve
          farkında bir yaşam sürmeye hatta ötesine doğru ilerliyor.
        </p>
        <h3 className="-mx-2 gradientIndigo rounded-xl p-2">Kendini Tanıma</h3>
        <p>
          Kendini tanıma yolculuğuna başlayan yolcular, çeşitli zorluklarla
          karşılaşıyorlar. Sahte bile olsa, eski ve tanıdık dünyaya ve sürüye
          dönmek için birçok sebep ortaya çıkıyor. sürüye dönmek için pek çok
          sebep ortaya çıkıyor.
        </p>
        <p>
          Birlikte yürüttüğümüz çalışmalarla, hem yolda ilerlemek için
          birbirimize destek oluyoruz hem de yolculuğumuz dostlarla daha keyifli
          hale geliyor.
        </p>
        <hr className="mb-4" />
        <h3 className="-mx-2 gradientAccent rounded-xl p-2">
          Düzenli Çalışmalar
        </h3>
        <p>
          Çalışmalarımız haftada 2-3 akşam Zoom ortamında yapılıyor. Her biri
          farklı formatta olan bu toplantılar, yaklaşık 2 saat sürüyor.
        </p>
        {/* <AdWorkshop /> */}
        <p>
          Giriş atölyemizi başarıyla tamamlayan arkadaşları, haftalık
          çalışmalarda aramızda görmeyi bekliyoruz.
        </p>
        {/* <p>
          Ayrıca, belirli dönemlerde farklı şehirlerde hafta sonu buluşmaları ve
          şehir dışında inziva kampları düzenlenmektedir.
        </p> */}
        <p>Sevgilerle...</p>
      </PageContent>
    </>
  );
}
