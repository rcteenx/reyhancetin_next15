import { contHero, StaticPages } from "@/content/data";

import IconComponent from "@/components/ui/IconComponent";
const Hero = ({ rVideo }) => {
  return (
    <section
      id="hero"
      className="md:container-p max-w-7xl mx-auto my-4 xl:my-8 flex flex-col xl:flex-row justify-center gap-0"
    >
      <div className="xl:w-1/2 xl:pr-2 text-center xl:text-left ">
        <h2 className="mt-12 font-light text-center xl:text-left text-2xl lg:text-3xl text-primary leading-6">
          <span className="border-b border-indigo xl:border-primary">
            {contHero.h2a}
          </span>
          <br />
          <span className="font-normal text-xs md:text-sm lg:text-base  ">
            {contHero.h2b}
          </span>
        </h2>
        <h1 className="mt-2 mb-0 text-3xl md:text-5xl lg:text-7xl font-bold text-indigo">
          <span className="px-4 xl:pr-8 xl:-ml-4 xl:bg-white xl:whitespace-nowrap relative z-10 rounded-full  xl:rounded-l-none shadow-lg ">
            {contHero.h1a}
          </span>
          <br />
          <span className="text-primary inline-block mt-2 md:mt-4 xl:mt-6 font-thin">
            {contHero.h1b}
          </span>
        </h1>
        <div className="mx-auto max-w-2xl">
          <p className="my-6 px-8 md:px-0 text-primary text-xs md:text-sm">
            {contHero.desc}
          </p>
        </div>
        <div className="my-4 flex flex-row flex-wrap space-x-4 justify-center">
          {contHero.buttons.map((b, index) => (
            <div key={b.icon} className={b.show}>
              <a
                href={b.link}
                title="Instagram Linki"
                className={` relative transition-all duration-200 gradientTransition btn-hero ${b.gradiant}`}
                role="button"
                target="_blank"
              >
                <IconComponent name={b.icon} size={24} color={b.iconColor} />
                <span>{b.title}</span>
                {/* <span className="hidden md:block">{b.title}</span> */}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto px-4 md:py-0 flex flex-col justify-end">
        <div className="p-4 shadow-xl rounded-b-xl relative">
          <img
            src={rVideo.src}
            alt="img colletion"
            width="w-full"
            height={400}
            className="rounded-xl"
          />
          <div className="absolute inset-0 flex items-end justify-center">
            <h3 className="m-6 px-4 py-2 text-white text-center text-base font-normal bg-black opacity-60 rounded-xl hover:opacity-100">
              <a
                href="https://www.youtube.com/watch?v=SeHM1y5p7WQ&t=2185s"
                target="_blank"
              >
                Youtube Sohbeti
                <br />
                Bilinçli Farkındalığa Nasıl Ulaşılır?
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
