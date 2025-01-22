import { contHero, StaticPages } from "@/content/data";

import IconComponent from "@/components/ui/IconComponent";
const Hero = ({ rVideo }) => {
  return (
    <section
      id="hero"
      className="md:container-p max-w-7xl mx-auto my-4 xl:my-8 flex flex-col xl:flex-row justify-center gap-0"
    >
      <div className="xl:w-1/2 xl:pr-2 text-center xl:text-left ">
        <h2 className="mt-8 font-light text-center xl:text-left text-2xl lg:text-3xl text-primary">
          <span className="border-b border-indigo xl:border-primary">
            {contHero.h2a}
          </span>
          <br />
          <span className="font-normal text-xs md:text-sm lg:text-base">
            {contHero.h2b}
          </span>
        </h2>
        <h1 className="mt-4 mb-0 text-4xl md:text-5xl lg:text-6xl font-bold text-indigo">
          <span className="px-4 xl:pr-8 xl:-ml-4 xl:bg-white xl:whitespace-nowrap relative z-10 rounded-full  xl:rounded-l-none shadow-lg ">
            {contHero.h1a}
          </span>
          <br />
          <span className="text-primary inline-block mt-4 xl:mt-8 font-thin">
            {contHero.h1b}
          </span>
        </h1>
        <p className="my-8 mx-auto px-4 md:mx-0 md:px-0  text-indigo-gray">
          {contHero.desc}
        </p>
        <div className="flex my-2 flex-row space-x-8 justify-center md:justify-start">
          <div className="relative inline-flex group">
            <div className="absolute transitiona-all duration-1000 opacity-80 -inset-px gradientInstagramBlur rounded-2xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="https://www.instagram.com/reyhancetinx/"
              title="Instagram Linki"
              className="relative text-white transition-all duration-200 gradientInstagram gradientTransition btn-hero"
              role="button"
              target="_blank"
            >
              <IconComponent name="instagram" size={18} color="white" />
              {contHero.btn1}
            </a>
          </div>
          <div className="relative inline-flex group">
            <a
              href="https://www.youtube.com/@reyhancetinx"
              title="Youtube Linki"
              className="relative  transition-all duration-200 btn-hero bg-white text-black border gradientTransition "
              role="button"
              target="_blank"
            >
              <IconComponent name="youtube" size={24} color="#CD201F" />
              {contHero.btn2}
            </a>
          </div>
          {/* <a
            href={
              "/" + StaticPages[2].link + "/" + StaticPages[2].pages[0].link
            }
            className="btn-hero font-semibold text-lg border-0 hover:text-indigo-light-3"
          >
            <span>{contHero.btn3}</span>
          </a> */}
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
