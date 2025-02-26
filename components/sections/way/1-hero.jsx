import { contWay } from "@/content/data";
const WayHero = ({}) => {
  return (
    <section id="hero" className="bg-slate-200 pb-16">
      <div className="gradientIndigo">
        <h3 className="mx-auto px-4 md:px-8 lg:px-12 py-2 max-w-7xl text-left">
          Kendini Tanıma Yolculuğu
        </h3>
      </div>
      <div className=" max-w-xl mx-auto text-center ">
        <h1 className="mt-8 sm:mt-16 mb-0 text-2xl md:text-4xl lg:text-6xl font-bold text-indigo ">
          {contWay.h1a}
          <br />
          <span className="text-primary inline-block mt-2 md:mt-4 xl:mt-6 font-thin">
            {contWay.h1b}
          </span>
        </h1>
        <div className="mx-auto max-w-2xl">
          <p className="my-4 md:my-6 px-6 md:px-0 text-primary text-xs md:text-sm leading-5 md:leading-6">
            {contWay.desc}
          </p>
          <p className="my-2 block text-indigo text-center text-xs md:text-sm">
            {contWay.cta}
          </p>
        </div>
        <div className="my-4 flex flex-row flex-wrap space-x-4 justify-center">
          {contWay.buttons.map((b, index) => (
            <div key={b.id} className={b.show}>
              <a
                href={b.link}
                title="Instagram Linki"
                className={` relative transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
                target="_blank"
              >
                <span className="hidden md:block">{b.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WayHero;
