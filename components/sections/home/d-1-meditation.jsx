import IconComponent from "@/components/ui/IconComponent";
import MeditationCTA from "@/components/sections/home/d-12-meditation-cta";

export default function Meditation({ info }) {
  return (
    <section className="gradientPurple py-8 lg:py-16 text-white-400">
      <div className="container mx-auto text-center text-purple-200 ">
        <h2 className="my-0 py-1 md:py-2 lg:py-4 text-5xl sm:text-7xl lg:text-8xl border-b border-purple-400 inline-block ">
          {info.h2}
        </h2>
        <h3 className="my-2 text-base sm:text-2xl lg:text-3xl">{info.desc}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 p-4 rounded-xl text-purple-300  ">
          {info.items.map((i, index) => (
            <div
              key={index}
              className=" p-4 text-center border border-purple-700 rounded-xl shadow-xl"
            >
              <div className="p-4 bg-purple-300 rounded-xl shadow-xl">
                <IconComponent
                  name={i.icon}
                  size={48}
                  color={i.iconColor}
                  className=" mx-auto"
                />
              </div>
              <h4 className="mt-4 mb-2 text-base lg:text-base">{i.title}</h4>
              <p className="text-sm">{i.info}</p>
            </div>
          ))}
        </div>
        {/* <MeditationCTA /> */}
      </div>
    </section>
  );
}
