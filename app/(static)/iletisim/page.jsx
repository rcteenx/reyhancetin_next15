import Link from "next/link";
import { contContact } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";

import IconComponent from "@/components/ui/IconComponent";

export default function StaticPage() {
  return (
    <>
      <HeroSingle contHero={contContact}>
        <p className="my-4 text-indigo text-xs md:text-sm">{contContact.cta}</p>
        <div className="m-4 grid grid-cols-1 gap-2">
          {contContact.buttons.map((b, index) => (
            <div key={b.id} className={b.show}>
              <Link
                href={b.link}
                title={`${b.title} Linki`}
                className={`transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
              >
                <div className="w-72 flex gap-2 justify-start items-center text-left ">
                  <IconComponent name={b.icon} size={24} color={b.iconColor} />
                  <span className="">{b.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </HeroSingle>
    </>
  );
}
