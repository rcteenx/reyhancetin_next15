import SvgCheck from "@/components/ui/svg/check";

export default function WhatWeGain({ img, gain }) {
  return (
    <div id="gain" className="bg-white py-8 md:py-16">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2 className="md:text-3xl lg:text-6xl">{gain.h2}</h2>
          <p>{gain.p1}</p>
          <p>{gain.p2}</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:mt-4 items-center">
          <div className="p-4 shadow-xl rounded-b-xl">
            <img
              src={img.src}
              alt="img colletion"
              width="w-full"
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="px-4">
            <h3>{gain.h3}</h3>
            <p>{gain.p3}</p>
            <ul className="space-y-5">
              {gain.items.map((i, index) => (
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
        </div>
      </div>
    </div>
  );
}
