import { whyweneed } from "@/content/data";
import { heroWay as hero } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";
import WhyWeNeed from "@/components/sections/way/b-1-why-we-need";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

import IconComponent from "@/components/ui/IconComponent";

export async function generateMetadata() {
  return {
    title: hero.h1,
  };
}

export default function Page() {
  return (
    <>
      <HeroSingle contHero={hero}>
        <div className="relative mt-4 p-4 bg-slate-100 sm:rounded-xl shodow-2xl">
          <IconComponent
            className="absolute bottom-2 left-2 z-1 opacity-20 sm:opacity-40"
            name="cat"
            size={48}
            color="purple"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
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
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>Alice Harikalar Diyarında, Lewis Carroll</em>
            </p>
          </blockquote>
        </div>
        <p className="my-4 text-xs md:text-sm">
          Önce kendimizi ve objektif gerçekliği anlamalıyız.
          <br />
          Çünkü bilinçli bir yolculuk, ancak nereye gittiğimizi fark ettiğimizde
          başlayabilir.
        </p>
        {/* <p className="my-4 text-indigo text-xs md:text-sm">{hero.cta}</p>
        <div className="m-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {hero.buttons.map((b, index) => (
            <div key={b.id} className={b.show}>
              <Link
                href={b.link}
                title={`${b.title} Linki`}
                className={` relative transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
              >
                <span className="">{b.title}</span>
              </Link>
            </div>
          ))}
        </div> */}
      </HeroSingle>

      <WhyWeNeed need={whyweneed} />

      <PageContent h2Title="UZUN İNCE BİR YOL">
        <p>
          Aşık Veysel’in sözleriyle, "Uzun ince bir yolda" ilerliyoruz. Ama yol
          tek değil; birçok farklı yol var. Üstelik bir yol seçmeseniz bile,
          zaman akıyor—ve olduğumuz yerde duruyor gibi görünsek de, gidiyoruz
          gündüz gece!
        </p>
        <p>
          Bazı yollar, sürünün içinde, mekanik bir karanlığa doğru ilerler;
          bazılarıysa kendini keşfetmeye, bilinçli ve farkında bir yaşam
          sürmeye, hatta ötesine uzanır.
        </p>
        <h3>Kendini Tanıma</h3>
        <p>
          Birlikte yürüttüğümüz çalışmalar sayesinde hem yolda birbirimize
          destek oluruz hem de bu yolculuk, dostlukla daha anlamlı ve keyifli
          hale gelir.
        </p>
        <p>
          Birlikte yürüttüğümüz çalışmalarla, hem yolda ilerlemek için
          birbirimize destek oluyoruz hem de yolculuğumuz dostlarla daha keyifli
          hale geliyor.
        </p>
        <h3>Bir Varmış Bir Yokmuş</h3>
        <p>
          Yıllar önce, bir yıldan uzun süre birlikte çalıştığımız bir arkadaş,
          “Reyhan, sanki hiç ilerlemedim gibi hissediyorum,” demişti. Düşününce
          hak verdim; gerçekten de bir arpa boyu yol almamıştık.
        </p>
        <p>
          Sonra fark ettik ki yol, mekanik bir ilerleme değilmiş; her zaman ve
          her yerde, kendimizde bilinçli farkındalıkla kalabilmekmiş. Tıpkı bir
          yoga duruşu gibi... Dışarıdan hareketsiz görünür, ama içeride ince bir
          çaba, sürekli bir uyanıklık vardır. Kasların titrer, zihin kaçmak
          ister; ama sen orada kalırsın. Yol, işte tam da bu: Olduğun yerde,
          merkezinde ve farkında durabilmek.
        </p>
        <hr className="mb-4" />
        <h3>Düzenli Grup Çalışmaları</h3>
        <p>
          Kendi üzerimizde çalışmaya başladıktan kısa bir süre sonra, bize
          kendimizi gösterecek ve birlikte yol alabileceğimiz bir arkadaş
          grubuna ihtiyaç duymaya başlarız. Bu noktada, ya var olan bir gruba
          katılmamız ya da kendi grubumuzu kurmamız gerekir.
        </p>
        <p>
          Haftada bir kez, ister yüz yüze ister çevrim içi olarak yapılacak grup
          çalışmaları, hem çalışma motivasyonunun canlı kalmasına hem de farklı
          kişilerin "fotoğraflarıyla" kendimizi daha net görmemize yardımcı
          olur.
        </p>
      </PageContent>
    </>
  );
}
