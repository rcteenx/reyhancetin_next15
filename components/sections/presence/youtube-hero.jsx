import { contCircleYoutube } from "@/content/data/hero";
import IconComponent from "@/components/ui/IconComponent";

export default function CircleYoutubeHero({}) {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h1>{contCircleYoutube.h1}</h1>
      </div>
      <div className="mx-auto max-w-xl text-center ">
        <h3 className="mt-4 sm:mt-8 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold">
          {contCircleYoutube.h3a}
          <br />
          <span className="px-4 py-2 shadow-xl text-primary inline-block font-thin tracking-tighter">
            {contCircleYoutube.h3b}
          </span>
        </h3>
        <div className="relative mt-4 p-4 gradientSlate sm:rounded-xl shodow-2xl">
          <IconComponent
            className="absolute left-4 top-1/2 -translate-y-1/2 z-1 opacity-40"
            name="africa"
            size={48}
            color="purple"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              Hızlı gitmek istiyorsan, yalnız git.
              <br />
              Uzağa gitmek istiyorsan, birlikte git.
            </p>
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>Africa Atasözü</em>
            </p>
          </blockquote>
        </div>
        <p className="m-4 text-xs md:text-sm">
          Tek başına hızla ilerleyebilirsin, ama hedefe varman zorlaşır. Kendini
          tanıma yolculuğuna çıktığında, bilinç ve farkındalık yolunda ilerleyen
          bir çemberin parçası olman gerekir. Yoldaşların seni destekler, çember
          seni güçlendirir.
        </p>
        <p className="my-4 text-indigo text-xs md:text-sm">
          {contCircleYoutube.cta}
        </p>
        <div className="mx-8 my-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {contCircleYoutube.buttons.map((b, index) => (
            <div key={b.id} className="grid-cols-1">
              <a
                href={b.link}
                title={b.title}
                className={` relative transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
              >
                <span className="">{b.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
