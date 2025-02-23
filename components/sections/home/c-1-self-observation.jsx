import SvgCheck from "@/components/ui/svg/check";

export default function SelfObservation({ img, content }) {
  return (
    <div id="observation" className="bg-white py-8 md:pt-16 mt-8 lg:my-16">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-center">
          <h2 className="my-2 lg:my-4 text-4xl md:text-4xl lg:text-8xl">
            {content.h2}
          </h2>
          <h3 className="my-2 text-base md:text-3xl">{content.h3}</h3>
        </div>
        <div className="grid grid-cols-1 md:p-4 xl:grid-cols-2 gap-4 lg:mt-4 items-center bg-[#ededed] md:rounded-xl">
          <div className="mx-auto px-4 my-4 max-w-2xl ">
            <h3 className="border-b my-4">{content.subTitle}</h3>
            <p className="my-2">{content.p3}</p>
            <ul className="space-y-5">
              {content.items.map((i, index) => (
                <li key={index} className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-bold text-lg">{i.title}</dt>
                    <dd className="-ml-7 mt-2 pb-2 border-b border-gray-200">
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
      </div>
    </div>
  );
}
