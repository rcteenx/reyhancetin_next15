import Link from "next/link";

import { contWay } from "@/content/data/hero";
import IconComponent from "@/components/ui/IconComponent";

export default function WayHero({}) {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h1>{contWay.h1}</h1>
      </div>
      <div className=" max-w-xl mx-auto text-center ">
        <h3 className="mt-4 sm:mt-8 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold">
          {contWay.h3a}
          <br />
          <span className="px-4 py-2 shadow-xl text-primary inline-block font-thin tracking-tighter">
            {contWay.h3b}
          </span>
        </h3>
        <div className="relative mt-4 p-4 bg-slate-100 sm:rounded-xl shodow-2xl">
          <IconComponent
            className="absolute bottom-2 left-2 z-1 opacity-20 sm:opacity-40"
            name="cat"
            size={48}
            color="purple"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              <span className="font-bold text-gray-800">Alice:</span> "Lütfen
              bana buradan hangi yöne gitmem gerektiğini söyler misin?"
            </p>
            <p>
              <span className="font-bold text-gray-800">Cheshire Kedisi:</span>{" "}
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
        <p className="my-4 text-xs md:text-sm">
          Önce kendimizi ve objektif gerçekliği anlamalıyız.
          <br />
          Bilinçli yolculuk, ancak nereye gideceğimizin farkına vardığımızda
          başlar.
        </p>
        {/* <p className="my-4 text-indigo text-xs md:text-sm">{contWay.cta}</p>
        <div className="m-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {contWay.buttons.map((b, index) => (
            <div key={b.id} className={b.show}>
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
        </div> */}
      </div>
    </section>
  );
}
