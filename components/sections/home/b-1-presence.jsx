import SvgCheck from "@/components/ui/svg/check";

export default function Presence({ img, content }) {
  return (
    <div id="gain" className="bg-white py-4 md:py-8">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-center">
          <h2 className="my-2 lg:my-4 text-4xl md:text-4xl lg:text-8xl">
            {content.h2}
          </h2>
          <h4 className="my-2">{content.h4}</h4>
          <p className="my-2 text-xs">{content.footnote}</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:mt-4 items-center">
          <div className="mx-auto max-w-2xl xl:mx-0 p-4 shadow-xl md:rounded-b-xl">
            <img
              src={img.src}
              alt="img colletion"
              width="w-full"
              height={400}
              className="rounded-xl "
            />
          </div>
          <div className="mx-auto px-4 max-w-2xl ">
            <h3 className="border-b">{content.h3}</h3>
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
