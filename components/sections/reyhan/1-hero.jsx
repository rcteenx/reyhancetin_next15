import { contReyhan } from "@/content/data";
import IconComponent from "@/components/ui/IconComponent";

const ReyhanHero = ({}) => {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h3 className="mx-auto px-4 sm:px-8 lg:px-12 py-2 max-w-7xl text-left">
          Bilinç ve Farkındalık Çemberi
        </h3>
      </div>
      <div className="mx-auto max-w-xl text-center ">
        <h1 className="mt-4 sm:mt-8 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold text-indigo">
          {contReyhan.h1a}
          <br />
          <span className="px-4 py-2 shadow-xl text-primary inline-block font-thin">
            {contReyhan.h1b}
          </span>
        </h1>
        <div className="relative mt-4 p-8 gradientSlate sm:rounded-xl shodow-2xl">
          <IconComponent
            className="absolute bottom-4 left-1/4 -translate-x-1/4 z-1 opacity-40"
            name="me"
            size={48}
            color="black"
          />
          <IconComponent
            className="absolute bottom-4 left-3/4 -translate-x-3/4 z-1 opacity-40"
            name="me"
            size={48}
            color="purple"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              Sakın dışarıya bakma, içeriye bak!
              <br />
              İçindeki yolculuk, dışarıdaki tüm yolculuklardan daha gerçektir."
            </p>
            <p className="mx-4 mt-3 pb-2 font-semibold text-right">
              <em>Rumi</em>
            </p>
          </blockquote>
        </div>
        <p className="m-4 text-xs md:text-sm">
          Tek başına hızla ilerleyebilirsin, ama hedefe varman zorlaşır. Kendini
          tanıma yolculuğuna çıktığında, bilinç ve farkındalık yolunda ilerleyen
          bir çemberin parçası olman gerekir. Yoldaşların seni destekler, çember
          seni güçlendirir.
        </p>
        <p className="my-4 text-indigo text-xs md:text-sm">{contReyhan.cta}</p>
        <div className="mx-8 my-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {contReyhan.buttons.map((b, index) => (
            <div key={b.id} className="grid-cols-1">
              <a
                href={b.link}
                title="Instagram Linki"
                className={` relative transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
                target="_blank"
              >
                <span className="">{b.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReyhanHero;
