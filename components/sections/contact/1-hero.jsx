import { contContact } from "@/content/data/hero";
import IconComponent from "@/components/ui/IconComponent";

export default function ContactHero({}) {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h1>{contContact.h1}</h1>
      </div>
      <div className=" max-w-xl mx-auto text-center ">
        <h3 className="mt-4 sm:mt-8 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold">
          {contContact.h3a}
          <br />
          <span className="px-4 py-2 shadow-xl text-primary inline-block font-thin">
            {contContact.h3b}
          </span>
        </h3>
        <p className="my-4 text-indigo text-xs md:text-sm">{contContact.cta}</p>
        <div className="m-4 grid grid-cols-1 gap-2">
          {contContact.buttons.map((b, index) => (
            <div key={b.id} className={b.show}>
              <a
                href={b.link}
                title={`${b.title} Linki`}
                className={` relative transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
              >
                <IconComponent name={b.icon} size={24} color={b.iconColor} />
                <span className="">{b.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
