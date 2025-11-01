import { whyweneed } from "@/content/data";
import { heroWay as hero } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";
import WhyWeNeed from "@/components/sections/way/b-1-why-we-need";

import PageContent from "@/components/templates/pageContent";

import FAQ from "@/components/sections/way/b-x-faq";

import IconComponent from "@/components/ui/IconComponent";

const steps = [
  {
    number: 1,
    title: "Seminer",
    aim: "Ortak Terminolojiye Hakim Olmak",
    description:
      "Çalışamlara temel olacak ezoterik bilgi ve felsefi kavrayışı sunuyorum.",
    color: "bg-fuchsia-500",
  },
  {
    number: 2,
    title: "Atölye",
    aim: "Objektif ve tarafsız gözlem yapmak",
    description:
      "Objektif gözlem pratiğini pratik egzersizlerle uygulamaya geçiriyoruz.",
    color: "bg-yellow-300",
  },
  {
    number: 3,
    title: "Alan Çalışmaları",
    aim: "Bilinci kristalize etmek",
    description:
      "Objektif gözlemlerimizi paylaşıyoruz ve çalışmayla varlığımıza katıyoruz.",
    color: "bg-purple-300",
  },
];

const testimonials = [
  {
    quote:
      "Bu yolculuk, içimde sessiz bir alan açtı; her adımda kendimle daha derin bir şekilde karşılaştım.",
    author: "Anonim Katılımcı",
  },
  {
    quote:
      "Alan çalışmaları sayesinde yalnız olmadığımı hissettim; yolumu görmek ve ilerlemek çok daha kolaylaştı.",
    author: "Anonim Katılımcı",
  },
  {
    quote:
      "Atölyeler ve seminerler bana sadece bilgi değil, deneyimleyerek öğrenme fırsatı sundu.",
    author: "Anonim Katılımcı",
  },
  {
    quote:
      "Tek bir odada yaşadığımı sanırken varlığımda daha birçok oda olabileceğini fark ettim.",
    author: "Anonim Katılımcı",
  },
  {
    quote:
      "Bir şeyi fark ettiğimizde onu artık görmezden gelemiyoruz; yol kendiliğinden devam ediyor.",
    author: "Anonim Katılımcı",
  },
  {
    quote:
      "Bu çalışma, insanı kendi gerçekliğine hızlı ve dürüst bir şekilde yaklaştıran, çok sağlam bir alan.",
    author: "Anonim Katılımcı",
  },
  {
    quote:
      "Hayatın görünürde olandan daha fazlasını taşıdığını sezmek; olayların bize bir şey anlatabileceğini görmek için güçlü bir ortam.",
    author: "Anonim Katılımcı",
  },
  {
    quote:
      "Rehberin ve yol arkadaşlarının paylaşımları, benzer süreçlerden geçenleri duymak, başkalarının deneyimlerinden öğrenmek… Yalnız olmadığını görmek çok motive edici.",
    author: "Anonim Katılımcı",
  },
  {
    quote:
      "Bu çalışma, kendi mekanikliğimi ve otomatik tepkilerimi gözlemlememe; zihinsel, duygusal ve bedensel olarak daha geniş bir perspektife yerleşmeme yardımcı oluyor.",
    author: "Anonim Katılımcı",
  },
];

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
        <div className="text-center mt-8">
          <p className="text-xl font-semibold text-gray-900">
            Yolu Sormadan Önce Ne Aradığını Sorguladın Mı?
          </p>
        </div>

        {/* Blok 4: CTA */}
        <div className="text-center">
          <p className="my-2 px-4 text-gray-500 text-sm italic">
            Olağan hayatın bir yere götürmediğini anladığımızda, bilincin
            yolculuğu başlar.
          </p>
          <a
            href="/yolculuga-basla"
            className="inline-block my-2 px-8 py-2 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 transition-colors"
          >
            Yolculuğa Başla
          </a>
        </div>
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
            Gölgeler arasındaki arayışlar anlamını yitirdiğinde
            <br />— ancak hâlâ bulma umudunu kaybetmediysen —<br />
            kaynağa bilinçli yolculuk başlar.
          </p>
        </div>
      </section>
      <WhyWeNeed need={whyweneed} />

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

      <section className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 md:px-8 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              VARLIĞIN GELİŞİMİNE HİZMET
            </h2>
            <p className="my-4 text-lg italic font-semibold">
              Kendi varlığının ve başkalarının varlığının gelişimine — en yakın,
              en erişilebilir ve en uygun olan yollarla katkıda bulunmak.
            </p>
            <p>
              İnsanın bilinçli çalışması yalnız kendisi için değildir; daha
              büyük bir düzenin sürdürülmesine ve Mutlak’ın işleyişine katkı
              sunar. Bu platform, kişinin kendini gözlemleyerek, uyanarak ve
              dönüşerek evrene destek olma sürecini — en yakın ve uygulanabilir
              yollarla desteklemek için kuruldu.
            </p>
            <p>
              Seminerler, atölyeler ve grup çalışmalarındaki amaç; kişinin kendi
              varlığını kristalize etmesi — yani değişen dış şartlarda bile
              bilinç bütünlüğünü koruyabilmesi — ve bu kristalizasyonun doğal
              olarak başkalarının varlığına da destek olmasıdır.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
            <a
              href="#calismalar"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-95"
            >
              Çalışmalara Gözat
            </a>
            <a
              href="#acik-kaynaklar"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-5 py-2.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              Açık Kaynaklar
            </a>
          </div>
        </div>
        <div className="bg-white py-16 my-16 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center ">
            <h3>
              Bilinçli Etkiyle Yapılan Çalışmalar<sup>*</sup>
            </h3>
            <p className="italic text-sm">
              <sup>*</sup>Bu çalışmalarda sınırlı ve bilinçli bir enerjiyi (C
              Etkisi) kullanıyoruz; bu etki ancak doğrudan temas ve ortak
              dikkatle aktarılabilir, bu nedenle kopyalanamaz; ancak doğrudan
              deneyimlenebilir. Bilinçli Etkiyle yapılan çalışmalar, daha derin
              bir dikkat yoğunluğunu ve karşılıklı bir varlık alanını
              gerektirir.
            </p>
          </div>
          <div className="max-w-6xl mx-auto p-4">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`${step.color} p-8 rounded-xl shadow-lg hover:shadow-sm transition relative`}
                >
                  {/* Küçük numara dairesi */}
                  <div className="absolute top-2 left-7 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-gray-800 shadow-md">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-semibold text-center">
                    {step.title}
                  </h3>
                  <p className=" italic text-center">{step.aim}</p>
                  <p className="mt-2 text-gray-700 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3>
            Açık Kaynak Çalışmaları<sup>*</sup>
          </h3>

          <p className="italic text-sm">
            <sup>*</sup>Herkesin erişimine açık, paylaşılabilir içeriklerle
            kolektif farkındalığın gelişimine katkıda bulunmaya çalışıyorum.
          </p>
        </div>

        <div
          id="calismalar"
          className="mt-12 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow ring-1 ring-slate-100 dark:ring-transparent">
            <div className="relative">
              <svg
                className="w-8 h-8 absolute"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3 className="mt-0 pt-2 text-lg font-semibold">
                Youtube Sohbetleri
              </h3>
            </div>
            <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">
              Bilinç, gözlem ve varlık çalışmaları üzerine açık, samimi ve derin
              sohbetler. Pratik içgörü sunan, ücretsiz ve herkesin katılımına
              açık bir alan.
            </p>
          </article>

          <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow ring-1 ring-slate-100 dark:ring-transparent">
            <div className="relative">
              <svg
                className="w-8 h-8 absolute"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 2v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 11h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 22h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3 className="mt-0 pt-2 text-lg font-semibold">
                Instagram Paylaşımları
              </h3>
            </div>
            <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">
              Günlük farkındalığı destekleyen kısa notlar, gözlem hatırlatmaları
              ve pratik rehberlikler. Anlık temaslarla çalışmayı gündelik hayata
              taşımayı amaçlar.
            </p>
          </article>

          <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow ring-1 ring-slate-100 dark:ring-transparent">
            <div className="relative">
              <svg
                className="w-8 h-8 absolute"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-0 pt-2 text-lg font-semibold">
                E-book ve Blog Yazıları
              </h3>
            </div>
            <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">
              Daha derin kavrayış sunan yazılar, pratik rehberler ve kapsamlı
              içerikler. Okuyanın kendi iç çalışmasını desteklemek için sade,
              uygulanabilir bilgiler.
            </p>
          </article>
        </div>
      </section>

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

      <section className="bg-purple-100 py-16">
        <div className="max-w-2xl mx-auto px-6">
          {/* Başlık */}
          <h2 className="text-3xl md:text-5xl font-bold text-purple-900 text-center">
            ÇALIŞMA SÜRECİ
          </h2>
          <p className="my-4 text-xl text-purple-800 text-center italic">
            Yolculukta Seni Hangi Aşamalar Bekliyor?
          </p>

          {/* Alt not */}
          <p className="my-8 text-center ">
            Aşamaların farkında olarak yolculuğundan en yüksek değeri
            alabilirsin.
          </p>

          <ul className="my-8 space-y-4 list-disc list-inside">
            <li>
              <span className="font-semibold">Temel Seminer (4 hafta)</span>
              <ul className="mt-2 ml-6 list-disc list-inside space-y-1">
                <li>Yolculuğun ilk adımı</li>
                <li>Temel bilgiler verilir</li>
                <li>Bazı çalışmalar önerilir</li>
              </ul>
            </li>

            <li>
              <span className="font-semibold">
                Kendini Gözlem Atölyesi (4–8 hafta)
              </span>
              <ul className="mt-2 ml-6 list-disc list-inside space-y-1">
                <li>Kafasına yatan ve isteyenlerle devam edilir</li>
                <li>
                  Pratik odaklı; gözlem yapmayı ve objektif olmayı öğrenme
                </li>
                <li>Katılımcı kendi ritminde deneyim kazanır</li>
              </ul>
            </li>

            <li>
              <span className="font-semibold">Grup Çalışmaları</span>
              <ul className="mt-2 ml-6 list-disc list-inside space-y-1">
                <li>Deneyim paylaşımı ve birlikte yol alma</li>
                <li>Motivasyonu canlı tutar</li>
                <li>Birbirimizin farkındalığını derinleştirir</li>
              </ul>
            </li>
          </ul>
          <p className="text-center">
            Her aşama, seni kendine bir adım daha yaklaştıracak.
          </p>
        </div>
      </section>

      <section className="bg-purple-50 py-12 px-6 md:px-20">
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
              <p className="text-right font-semibold text-purple-700">
                - {t.author}
              </p>
            </div>
          ))}
        </div>
      </section>
      <FAQ />
    </>
  );
}
