import SvgCheck from "@/components/ui/svg/check";
import ObservationCTA from "@/components/sections/home/c-12-observation-cta";

export default function Observation({ img, content }) {
  return (
    <div id="observation" className="bg-white pt-8 md:pt-16 mt-8 lg:my-16">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-center">
          <h2 className="my-4 lg:my-4 text-4xl md:text-4xl lg:text-8xl">
            {content.h2}
          </h2>
          <h4 className="my-4 text-xl md:text-4xl">{content.h3}</h4>
        </div>
        <div className="grid grid-cols-1 md:p-4 xl:grid-cols-2 gap-4 lg:mt-8 items-center bg-[#ededed] md:rounded-xl">
          <div className="mx-auto px-4 my-4 max-w-2xl ">
            <h3 className="my-2 border-b border-gray-400">
              {content.subTitle}
            </h3>
            <p className="my-2">{content.p3}</p>
            <ul className="space-y-5">
              {content.items.map((i, index) => (
                <li key={index} className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-bold text-lg">{i.title}</dt>
                    <dd className="-ml-7 mt-2 pb-2 border-b border-gray-300">
                      {i.info}
                    </dd>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto max-w-2xl xl:mx-0 p-4 shadow-xl md:rounded-b-xl order-first xl:order-last">
            <a
              href="https://www.instagram.com/reyhancetinx/p/DC_dvpdM1K_/"
              target="_blank"
            >
              <img
                src={img.src}
                alt="Kendini Gözlem - Instagram Paylaşımı Görseli"
                title="Instagram Paylaşımı - Kendini Gözlem Kaydırmalı Postu"
                width="w-full"
                height={300}
                className="rounded-xl "
              />
            </a>
          </div>
        </div>

        <ObservationCTA />
      </div>
    </div>
  );
}
