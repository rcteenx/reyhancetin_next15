import Link from "next/link";

import { heroSpace as hero } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";

import IconComponent from "@/components/ui/IconComponent";

export const metadata = {
  title: hero.h1,
};

export default async function BlogsPage() {
  return (
    <>
      <HeroSingle contHero={hero}>
        <div className="relative mt-8 p-4 bg-slate-50 sm:rounded-xl shodow-2xl sm:border-4 sm:border-indigo-50">
          <IconComponent
            className="absolute left-4 top-1/2 -translate-y-1/2 z-1 opacity-40"
            name="work"
            size={48}
            color="blue"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>Çalışmayı seveni severim.</p>
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>G.I. Gurdjieff</em>
            </p>
          </blockquote>
        </div>
        <p className="px-4 mt-8 text-indigo text-xs md:text-sm">
          Gurdjieff’in bu basit ama derin ifadesi, içsel yola gönül vermiş
          olanlara yöneliktir. Bu yol, bilinen anlamda bir meslek ya da görev
          değil; kendini dönüştürmeye, farkındalığı arttırmaya ve hakikati
          aramaya adanmış bir çabadır. Gerçek çalışma; disiplin, gözlem ve içsel
          dürüstlük isteyen bir sanattır — ve bu çabayı seven, özüne yaklaşır.
        </p>
        <p className="my-4 text-indigo text-xs md:text-sm">{hero.cta}</p>
        <div className="mx-8 my-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {hero.buttons.map((b, index) => (
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
    </>
  );
}
