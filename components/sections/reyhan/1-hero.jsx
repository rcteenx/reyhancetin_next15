import Link from "next/link";

import { contReyhan } from "@/content/data/hero";
import IconComponent from "@/components/ui/IconComponent";

export default function ReyhanHero({}) {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h1>{contReyhan.h1}</h1>
      </div>
      <div className="mx-auto max-w-xl text-center ">
        <h3 className="mt-4 sm:mt-8 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold">
          {contReyhan.h3a}
          <br />
          <span className="px-4 py-2 shadow-xl text-primary inline-block font-thin tracking-tighter">
            {contReyhan.h3b}
          </span>
        </h3>
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
        <p className="my-4 text-indigo text-xs md:text-sm">{contReyhan.cta}</p>
        <div className="mx-8 my-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {contReyhan.buttons.map((b, index) => (
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
      </div>
    </section>
  );
}
