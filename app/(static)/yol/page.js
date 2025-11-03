import { heroWay as hero } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";
import WayGoldenbox from "@/components/sections/way/b-1-goldenbox";

import WayServe from "@/components/sections/way/b-1-serve";

import PageContent from "@/components/templates/pageContent";

import WayProcess from "@/components/sections/way/b-1-process";
import TestimonialsSection from "@/components/sections/way/b-x-exp";

import FAQ from "@/components/sections/way/b-x-faq";

import IconComponent from "@/components/ui/IconComponent";

export async function generateMetadata() {
  return {
    title: hero.h1,
  };
}

export default function Page() {
  return (
    <>
      <HeroSingle contHero={hero}>
        <div className="relative mt-4 p-6 bg-slate-100 sm:rounded-xl shodow-2xl">
          <IconComponent
            className="absolute bottom-2 left-2 z-1 opacity-20 sm:opacity-40"
            name="cat"
            size={48}
            color="purple"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              <span className="font-bold text-gray-800">Alice:</span> "Lütfen
              hangi yöne gitmem gerektiğini söyler misin?"
            </p>
            <p>
              <span className="font-bold text-gray-800">Cheshire Kedisi:</span>
              "Bu, büyük ölçüde nereye gitmek istediğine bağlı."
            </p>
            <p>
              <span className="font-bold text-gray-800">Alice:</span> "Aslında
              nereye gittiğim pek de umurumda değil..."
            </p>
            <p>
              <span className="font-bold text-gray-800">Cheshire Kedisi:</span>{" "}
              "O halde hangi yoldan gittiğinin de bir önemi yok."
            </p>
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>Alice Harikalar Diyarında, Lewis Carroll</em>
            </p>
          </blockquote>
        </div>
        {/* Blok 2: Ana mesaj */}
        <h3 className="text-xl md:text-2xl font-semibold mt-8">
          "yol"u sormadan önce:
          <br />
          Ne Aradığını Sorguladın Mı?
        </h3>
        <p className="my-2 px-4 text-gray-500 text-sm">
          Olağan hayatın bir yere götürmediğini anladığımızda, bilincin
          yolculuğu başlar.
        </p>

        <p className="my-2 px-4 italic">
          Bu sorgulama başladıysa, doğru yerdesiniz 👉
        </p>
      </HeroSingle>

      <section className="text-center mt-8 p-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <blockquote className="mx-auto ">
              <p
                id="yunus-title"
                className="text-xl md:text-2xl font-serif italic  leading-relaxed mb-4 text-purple-700"
              >
                Sufilere sohbet gerek
                <br />
                Ahilere ahret gerek
                <br />
                Mecnunlara Leyla gerek
                <br />
                <span className="font-bold ">Bana seni gerek seni</span>
              </p>
            </blockquote>

            <figcaption className="mt-2 text-sm text-purple-700 italic">
              — Yunus Emre —
            </figcaption>
          </div>
          <p className="my-4 md:text-lg  leading-relaxed">
            Gölgeler arasındaki arayış anlamını yitirdiğinde
            <br />— ancak kaynağın çağrısını hala duyuyorsak —<br />
            bilincin eve dönüş yolculuğuna hazır oluruz.
          </p>
        </div>
      </section>

      <WayGoldenbox />

      <section className="text-center my-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-light italic  mb-6">
            “Bir yer var, biliyorum; her şeyi söylemek mümkün.”
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Hepimiz o yere doğru yürüyoruz — farkında olalım ya da olmayalım. Bu
            yolculukta bazen ilerlemiyor gibi görünürüz, ama derinlerde bir şey
            sessizce olgunlaşır.
          </p>
        </div>
      </section>

      <WayServe />

      <PageContent h2Title="UZUN İNCE BİR YOL">
        <p>
          Aşık Veysel’in sözleriyle, "Uzun ince bir yolda" ilerliyoruz. Yol tek
          değil; bazı yollar sürünün içinde yarı-uykuda devam ediyor, bazıları
          ise kendini keşfetmeye, bilinçli bir yaşam sürmeye ve ötesine
          açılıyor.
        </p>
        <p>
          Yıllar önce bir arkadaş, ‘Sanki hiç ilerlemedim,’ demişti. Sonra fark
          ettik ki yol, mekanik ilerleme değil; her yerde, her zaman, bilinçle
          kalabilmekmiş. Tıpkı bir yoga duruşu gibi: Dışarıdan hareketsiz
          görünür; içeride sürekli bir uyanıklık vardır.
        </p>
        <hr />
        <h4>Bu Yol Kimin İçin?</h4>
        <p className="italic mb-0 py-0">
          Bu yol, yalnızca bir arayış değil; kendine bakmayı göze alanlar için:
        </p>
        <ul>
          <li>
            <span className="text-green-500">✔</span> Kendine karşı dürüstlük
            cesaretine sahip olanlar için.
          </li>
          <li>
            <span className="text-green-500">✔</span> Teoride değil, deneyimde
            dönüşmek isteyenler için.
          </li>
          <li>
            <span className="text-green-500">✔</span> Bilinç çalışmalarını bir
            emek alanı olarak görenler için.
          </li>
          <li>
            <span className="text-green-500">✔</span> Kendini gözlemlemeye,
            çalışmaya istekli olanlar için.
          </li>
          <li>
            <span className="text-green-500">✔</span> Kendini kandırmadan
            ilerlemek isteyenler için.
          </li>
        </ul>
        <p>
          Bu çalışma terapi, koçluk veya danışmanlık değildir.
          <br />
          İçsel pratik ve bilinç farkındalığı alanında bir yoldur.
        </p>
        <hr />
        <h4>Bu Yolculukta Ne Kazanacaksın?</h4>
        <p className="italic my-0 py-0 ">Somut ve içsel dönüşümler olacak:</p>
        <ul>
          <li>⭐ Duygusal ve tepkisel otomatiklikten çıkarsın.</li>
          <li>
            ⭐ Günlük hayatında uyanıklık artar ve farkındalık derinleşir.
          </li>
          <li>⭐ Kendini gözlemleme ve farkındalık yetin güçlenir.</li>
          <li>
            ⭐ Kendi iç motivasyonlarını ve bilinçsiz alışkanlıklarını fark
            eder.
          </li>
          <li>
            ⭐ Sakin, dengeli ve kendine karşı şefkatli bir duruş kazanırsın.
          </li>
        </ul>
      </PageContent>

      <WayProcess />

      <TestimonialsSection />
      <FAQ />
    </>
  );
}
