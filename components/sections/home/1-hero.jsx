import Link from "next/link";

import { contHome } from "@/content/data/hero";
import IconComponent from "@/components/ui/IconComponent";

const Hero = ({ rVideo }) => {
  return (
    <section
      id="heroHome"
      className="md:container-p max-w-7xl mx-auto my-4 xl:my-8 flex flex-col xl:flex-row justify-center items-center gap-0"
    >
      <div className="xl:w-1/2 xl:pr-2 text-center xl:text-left ">
        <h1 className="mt-4 mb-0 text-3xl md:text-5xl lg:text-7xl font-bold text-indigo">
          <span className="px-4 xl:pr-8 xl:-ml-4 xl:bg-white xl:whitespace-nowrap relative z-10 rounded-full  xl:rounded-l-none shadow-lg ">
            {contHome.h1a}
          </span>
          <br />
          <span className="text-primary inline-block mt-2 sm:mt-4 font-thin tracking-tighter">
            {contHome.h1b}
          </span>
        </h1>
        <div className="mx-auto max-w-2xl">
          <p className="my-4 px-6 md:px-0 text-primary text-xs md:text-sm leading-6 ">
            {/* {contHome.desc} */}
            <Link href="#" className="border-b">
              Bilinç ve farkındalık çalışmalarına giriş atölyemizle,
            </Link>{" "}
            "Ben" algınızın kaynağa yolculuğuna rehberlik ediyoruz. Ayrıca,
            Instagram paylaşımları ve YouTube sohbetleriyle bilinç ve
            farkındalık yolculuğuna açık kaynak desteğimizi sunuyoruz.
          </p>
          <p className="my-2 block text-indigo text-center text-xs md:text-sm">
            {contHome.cta}
          </p>
        </div>
        <div className="my-4 flex flex-row flex-wrap space-x-4 justify-center">
          {contHome.buttons.map((b, index) => (
            <div key={b.icon} className={b.show}>
              <Link
                href={b.link}
                title={`${b.title} Linki`}
                className={` relative transition-all duration-200 gradientTransition btn-hero ${b.gradiant}`}
                role="button"
                target="_blank"
              >
                <IconComponent name={b.icon} size={24} color={b.iconColor} />
                <span className="hidden md:block">{b.title}</span>
              </Link>
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
            <h4 className="m-6 px-4 py-2 text-white text-center font-normal bg-black opacity-60 rounded-xl hover:opacity-100">
              <Link
                href="https://www.youtube.com/watch?v=SeHM1y5p7WQ&t=2185s"
                target="_blank"
              >
                Youtube Sohbeti
                <br />
                Bilinçli Farkındalığa Nasıl Ulaşılır?
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
