import Link from "next/link";
import { heroContact } from "@/content/data/hero";
import { StaticPages } from "@/content/data";

import HeroSingle from "@/components/templates/hero";

import IconComponent from "@/components/ui/IconComponent";

export default function StaticPage() {
  const colorMap = [
    "border-l-blue-500 border-b-blue-500",
    "border-l-green-500 border-b-green-500",
    "border-l-red-500 border-b-red-500",
    "border-l-purple-500 border-b-purple-500",
    "border-l-yellow-500 border-b-yellow-500",
    "border-l-pink-500",
    "border-l-orange-500",
  ];
  return (
    <>
      <HeroSingle contHero={heroContact}>
        <p className="my-4 text-indigo text-xs md:text-sm">{heroContact.cta}</p>
        <div className="m-4 grid grid-cols-1 gap-2">
          {heroContact.buttons.map((b, index) => (
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

      <div className="mx-auto my-8 p-2 text-center max-w-sm">
        <h3 className="my-2 border-b">Site Haritası</h3>
        <ol className="my-0 py-0 flex flex-col items-start gap-4 text-left list-decimal font-semibold">
          {StaticPages.map((category, catIndex) => {
            const borderColor = colorMap[catIndex % colorMap.length];

            return (
              <li
                key={category.id}
                className={`my-2 pb-4 w-full border-l-8 shadow-xl ${borderColor}`}
              >
                <h4
                  className={`py-0 hover:text-primary pl-2 pb-1 border-b-4 shadow-xl ${borderColor}`}
                >
                  <a href={`/${category.link}`}>{category.titleLong}</a>
                </h4>
                <ul className={`ml-4 mt-4 pl-4 list-disc font-normal`}>
                  {category.pages.map((page) => (
                    <li key={page.id}>
                      <a
                        href={
                          category.id == 9 && page.id < 3
                            ? page.link
                            : "/" + category.link + "/" + page.link
                        }
                        className="hover:text-blue-600 hover:underline"
                      >
                        {page.title}
                      </a>

                      {/* 3. seviye varsa */}
                      {page.pages && (
                        <ul className="ml-6 mt-1 space-y-1 list-[circle] text-sm text-gray-600 font-light">
                          {page.pages.map((subPage) => (
                            <li key={subPage.id}>
                              <a
                                href={`/${category.link}/${page.link}/${subPage.link}`}
                                className="hover:text-blue-600 hover:underline"
                              >
                                {subPage.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
