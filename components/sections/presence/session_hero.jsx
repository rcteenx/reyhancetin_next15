import Link from "next/link";

import { contHeroPresenceSession } from "@/content/data/hero";
import IconComponent from "@/components/ui/IconComponent";

export default function PresenceHeroSession({}) {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h1>{contHeroPresenceSession.h1}</h1>
      </div>
      <div className="mx-auto max-w-xl text-center ">
        <h3 className="mt-4 sm:mt-8 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold">
          <span className="p-0 m-0 font-semibold">
            {contHeroPresenceSession.h3a}
          </span>
          <br />
          <span className="px-4 pb-2 shadow-xl text-primary inline-block font-thin tracking-tighter">
            {contHeroPresenceSession.h3b}
          </span>
        </h3>
        <div className="relative mt-8 p-4 bg-slate-50 sm:rounded-xl shodow-2xl sm:border-4 sm:border-indigo-50">
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              Burada sadece yönlendirebilir ve koşullar oluşturabiliriz; ama
              yardım edemeyiz!
            </p>
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>G. I. Gurdjieff</em>
            </p>
          </blockquote>
        </div>
        <p className="m-4 text-xs md:text-sm">
          Hiç kimse bir başkasının yerine çalışamaz. Yardım, sadece doğru
          koşulların yaratılmasıyla mümkündür; bu da çoğu zaman, yön
          göstermekten ve sınır çizmeyi bilmekten ibarettir. Hakiki bilgiye
          ulaşmak isteyen, önce kendi iç çabasını başlatmak zorundadır.
        </p>
        <p className="my-4 text-indigo text-xs md:text-sm">
          {contHeroPresenceSession.cta}
        </p>
        <div className="mx-8 my-4 grid grid-cols-2 gap-2">
          {contHeroPresenceSession.buttons.map((b, index) => (
            <div key={b.id}>
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
