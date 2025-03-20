import Link from "next/link";

import { contPresence } from "@/content/data/hero";
import IconComponent from "@/components/ui/IconComponent";

export default function PresenceHero({}) {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h1>{contPresence.h1}</h1>
      </div>
      <div className="mx-auto max-w-xl text-center ">
        <h3 className="mt-4 sm:mt-8 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold">
          <span className="p-0 m-0 font-semibold">{contPresence.h3a}</span>
          <br />
          <span className="px-4 pb-2 shadow-xl text-primary inline-block font-thin tracking-tighter">
            {contPresence.h3b}
          </span>
        </h3>
        <div className="relative mt-8 p-4 bg-slate-50 sm:rounded-xl shodow-2xl sm:border-4 sm:border-indigo-50">
          <IconComponent
            className="absolute left-4 top-1/2 -translate-y-1/2 z-1 opacity-40"
            name="presence"
            size={48}
            color="purple"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              Saf farkındalık yalnızca bireyin iç dünyasında değil,
              <br />
              varlığının tüm çevresi üzerinde bir etki yaratır.
            </p>
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>Ramana Maharshi</em>
            </p>
          </blockquote>
        </div>
        <p className="m-4 text-xs md:text-sm">
          Saf farkındalık, kütle kazandığında, sadece bireyin içsel deneyimiyle
          sınırlı kalmaz. Bulunduğu alanı ve kapsadığı insanları da
          dönüştürebilir. Sessiz ama güçlü bir etkiyle, presence çevreye yayılır
          ve bir dönüşüm alan yaratır.
        </p>
        <p className="my-4 text-indigo text-xs md:text-sm">
          {contPresence.cta}
        </p>
        <div className="mx-8 my-4 grid grid-cols-2 gap-2">
          {contPresence.buttons.map((b, index) => (
            <div key={b.icon}>
              <Link
                href={b.link}
                title={`${b.title} Linki`}
                className={` m-auto max-w-48 relative transition-all duration-200 gradientTransition btn-hero ${b.gradiant}`}
                role="button"
                target="_blank"
              >
                <IconComponent name={b.icon} size={24} color={b.iconColor} />
                <span className="">{b.title}</span>
                {/* <span className="hidden md:block">{b.title}</span> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
