import Link from "next/link";

export default function HeroSingle({ contHero, children }) {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h1>{contHero.h1}</h1>
      </div>
      <div className=" max-w-xl mx-auto text-center ">
        <h3 className="mt-4 sm:mt-8 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold">
          {contHero.h3a}
          <br />
          <span className="px-4 py-2 shadow-xl text-primary inline-block font-thin">
            {contHero.h3b}
          </span>
        </h3>
        {children}
      </div>
    </section>
  );
}
