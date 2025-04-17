import Link from "next/link";
import { heroReyhan } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";
import ReyhanCarousel from "@/components/sections/home/b-1-reyhan-info";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

import IconComponent from "@/components/ui/IconComponent";

export default function Page() {
  return (
    <>
      <HeroSingle contHero={heroReyhan}>
        <div className="relative mt-4 p-4 gradientSlate sm:rounded-xl shodow-2xl">
          <IconComponent
            className="absolute -bottom-5 left-1/4 -translate-x-1/4 z-1"
            name="me"
            size={48}
            color="#333366"
          />
          <IconComponent
            className="absolute -bottom-5 left-3/4 -translate-x-3/4 z-1"
            name="me"
            size={48}
            color="purple"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              Sakın dışarıya bakma, içeriye bak!
              <br />
              İçindeki yolculuk, dışarıdaki tüm yolculuklardan daha gerçektir.
            </p>
            <p className="mx-4 mt-3 mb-0 font-semibold text-right">
              <em>Rumi</em>
            </p>
          </blockquote>
        </div>
        <p className="mx-4 mt-8 text-xs md:text-sm">
          Dış dünyada aradığımız birçok cevap, aslında içimizde saklı. Ancak
          gözlerimizi sürekli dışa çevirdiğimizde, kendimizi ve gerçek doğamızı
          görmemiz zorlaşır. İçine bakmak, yüzeydeki yanılsamaları aşarak özüne
          yaklaşmak demektir. En derin ve en gerçek yolculuk, dışarıda değil,
          içimizde başlar.
        </p>
        <p className="my-4 text-indigo text-xs md:text-sm">{heroReyhan.cta}</p>
        <div className="mx-8 my-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {heroReyhan.buttons.map((b, index) => (
            <div key={b.id} className="grid-cols-1">
              <Link
                href={b.link}
                title={`${b.title} Linki`}
                className={` relative transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
              >
                <span className="">{b.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </HeroSingle>
      <ReyhanCarousel />

      <PageContent h2Title="Merhabanızı Bekliyorum">
        <p>
          Elimden geldiğince, kabul edilebilir sınırlar içinde Reyhan’ı
          anlatmaya çalıştım. Yukarıda paylaştıklarım umarım çoğunuz için
          yeterlidir. Ama itiraf etmeliyim, hiçbirini tam içime sindiremedim.
          Neredeyse bir yıl uğraştıktan sonra, yapabildiğimin en iyisi bu :)
        </p>
        <p>
          İçeriye doğru yürüdükçe, “ben” sandığım Reyhan’dan uzaklaşıyorum. Her
          katmanda yeni bir Reyhan çıkıyor karşıma. Onunla bir süre kalıyorum,
          sonra o da geride kalıyor.
        </p>
        <p>
          Aşağıda artık bir “Reyhan” olmayan, ama zaman zaman “ben” hissinin
          yerleştiği farkındalık hallerim var:
        </p>
        <p>Gözlemci, Sessiz Tanık, Saf Farkındalık, Presence</p>
        <p>
          Bunları burada anlatmak kolay değil. <br />
          Ama eğer merak ediyorsanız, bir “Merhaba” gönderin.
          <br />
          Bakalım yol ve sohbet bizi nereye götürecek :)
        </p>
        <p>Sevgilerle...</p>
        <ContactMe />
      </PageContent>
    </>
  );
}
