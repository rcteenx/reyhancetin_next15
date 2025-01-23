import SvgCheck from "@/components/ui/svg/check";

export default function SelfObservation({ img, content }) {
  return (
    <div id="gain" className="bg-white py-8 md:py-16">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl">{content.h2}</h2>
          <p>{content.p1}</p>
          <p>{content.p2}</p>
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
            <h3>{content.h3}</h3>
            <p>{content.p3}</p>
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
        </div>
      </div>
    </div>
  );
}
