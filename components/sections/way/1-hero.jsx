import { contWay } from "@/content/data";
import IconComponent from "@/components/ui/IconComponent";

const WayHero = ({}) => {
  return (
    <section id="hero" className="bg-slate-200 pb-8 sm:pb-16">
      <div className="gradientIndigo">
        <h3 className="mx-auto px-4 sm:px-8 lg:px-12 py-2 max-w-7xl text-left">
          Kendini Tanıma Yolculuğu
        </h3>
      </div>
      <div className=" max-w-xl mx-auto text-center ">
        <h1 className="mt-8 sm:mt-16 mb-0 text-3xl md:text-5xl lg:text-8xl font-bold text-indigo">
          bilinçli
          <br />
          <span className="px-4 py-2 shadow-xl text-primary inline-block font-thin">
            YOLCULUK
          </span>
        </h1>
        <div className="relative mt-8 p-4 bg-slate-100 sm:rounded-xl ">
          <IconComponent
            className="absolute bottom-2 left-2 z-1 opacity-40"
            name="cat"
            size={64}
            color="purple"
          />
          <blockquoteote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              <span className="font-bold text-gray-800">Alice:</span> "Lütfen
              bana buradan hangi yöne gitmem gerektiğini söyler misin?"
            </p>
            <p>
              <span className="font-bold text-gray-800">Cheshire Kedisi:</span>{" "}
              "Bu, büyük ölçüde nereye gitmek istediğine bağlı."
            </p>
            <p>
              <span className="font-bold text-gray-800">Alice:</span> "Aslında
              nereye gittiğim pek de umurumda değil..."
            </p>
            <p>
              <span className="font-bold text-gray-800">Cheshire Kedisi:</span>{" "}
              "O halde hangi yoldan gittiğinin de bir önemi yok."
            </p>
            <p className="mx-4 sm:mx-8 mt-3 font-semibold text-right">
              <em>Alice Harikalar Diyarında, Lewis Carroll</em>
            </p>
          </blockquoteote>
        </div>
        <p className="my-4 text-xs md:text-sm">
          Önce kendimizi ve şu anki durumumuzu anlamalıyız. Bilinçli yolculuk,
          ancak nereye gideceğimizin farkına vardığımızda başlar.
        </p>
        <p className="my-4 text-indigo text-xs md:text-sm">{contWay.cta}</p>
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
                <span className="">{b.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WayHero;
