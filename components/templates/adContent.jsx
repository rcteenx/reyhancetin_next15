import Link from "next/link";

import IconComponent from "@/components/ui/IconComponent";

export default function AdContent({ contAd, children }) {
  return (
    <section className="my-8 md:my-24 py-16 bg-slate-200 ">
      <div className="mx-auto max-w-xl text-center ">
        <h3 className="m-0 text-3xl md:text-5xl lg:text-8xl font-bold">
          <span className="p-0 m-0 font-semibold">{contAd.h3a}</span>
          <br />
          <span className="px-4 pb-2 shadow-xl text-primary inline-block font-thin tracking-tighter">
            {contAd.h3b}
          </span>
        </h3>
        {children}
        <h4>{contAd.h1}</h4>
        <p className="mb-8 text-indigo text-xs md:text-sm">{contAd.cta}</p>
        <div className="mx-8 my-4 grid grid-cols-2 gap-2">
          {contAd.buttons.map((b, index) => (
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
