import Link from "next/link";

import { heroPresence as hero } from "@/content/data/hero";
import { presenceInfo, presenceMentor } from "@/content/data";

import { presenceInstagram } from "@/public/assets/images";

import HeroSingle from "@/components/templates/hero";
import Presence from "@/components/sections/presence/b-1-presence";

import PageContent from "@/components/templates/pageContent";

import PresenceMentor from "@/components/sections/presence/b-2-presence-mentor";

import IconComponent from "@/components/ui/IconComponent";

export const metadata = {
  title: hero.h1,
};

export default function Page() {
  return (
    <>
      <HeroSingle contHero={hero}>
        <div className="relative mt-8 p-4 bg-slate-50 sm:rounded-xl shodow-2xl sm:border-4 sm:border-indigo-50">
          <IconComponent
            className="absolute left-4 top-1/2 -translate-y-1/2 z-1 opacity-40"
            name="presence"
            size={48}
            color="purple"
          />
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              Saf farkındalık yalnızca bireyin iç dünyasında değil,
              <br />
              varlığının tüm çevresi üzerinde bir etki yaratır.
            </p>
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>Ramana Maharshi</em>
            </p>
          </blockquote>
        </div>
        <p className="m-4 text-xs md:text-sm">
          Saf farkındalık, kütle kazandığında, sadece bireyin içsel deneyimiyle
          sınırlı kalmaz. Bulunduğu alanı ve kapsadığı insanları da
          dönüştürebilir. Sessiz ama güçlü bir etkiyle, presence çevreye yayılır
          ve bir dönüşüm alan yaratır.
        </p>
        <p className="my-4 text-indigo text-xs md:text-sm">{hero.cta}</p>
        <div className="mx-8 my-4 grid grid-cols-3 gap-2">
          {hero.buttons.map((b, index) => (
            <div key={b.id}>
              <Link
                href={b.link}
                title={`${b.title} Linki`}
                className={` m-auto max-w-48 relative transition-all duration-200 gradientTransition btn-hero ${b.gradiant}`}
                role="button"
                target={`${b.target == 1 ? "_blank" : "_self"}`}
              >
                <IconComponent name={b.icon} size={24} color={b.iconColor} />
                <span className="">{b.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </HeroSingle>

      <section className="bg-[#f7f7f7] px-4 py-8 md:py-12  text-center">
        <h2 className="mx-auto border-b-2 inline-block">İŞTE HİKAYEMİZ</h2>
        <p>
          Hepimiz, saf farkındalığın kaynağı olan '<strong>öz benlik</strong>'
          sayesinde bedenli ve bilinçli bir varlık olarak ortaya çıktık.
        </p>
        <p>
          Kendimizi tekrar fark ettiğimizde, yolculuğun çoktan başladığını
          gördük!
        </p>
        <div className="gradientAccent mx-auto mt-8 p-4 rounded-xl max-w-xl">
          <h3 className="font-normal">Peki Nereye Gidiyoruz?</h3>
          <p>Tüm yolculuğumuz bir kaynağa dönüş hikayesi</p>
          <p>
            Bedenin, duyguların, zihnin ötesine, önce bilince ve sonra da saf
            farkındalığa geri dönüş
          </p>
        </div>
      </section>
      <section className="bg-indigo2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="mx-auto border-b-2 inline-block">MİSYONUMUZ</h2>
        <p>
          Kaynağa dönüş yolculuğumuzda öz benliklerimizin birbirine
          kavuşmasıdır.
        </p>
      </section>

      <Presence img={presenceInstagram} content={presenceInfo} />
      <PresenceMentor content={presenceMentor} />

      <PageContent h2Title="PRESENCE MENTOR">
        <h4 className="my-2 lg:text-xl">
          Presence Mentor ve Öğretmeni olarak, mindfulness temelli bilinç
          çalışmalarında varlık geliştirmiş arkadaşların, sonraki aşamaya
          geçişlerine bilgi ve deneyimlerimle rehber oluyorum.
        </h4>
        <p>
          Presence, Gurdjieff’in öğretmediği dördüncü bilinç halidir. Bu varoluş
          seviyesi, gözlemcinin devamında gelişen ve irade sahibi olan bilincin,
          yani kahyanın, hizmet ettiği efendidir. Kendi varlığını hisseden ve
          alana aktaran en yüksek ve saf farkındalık seviyesidir.
        </p>
        <p>
          Saf farkındalığınızı, yani kendinizi, hemen/şimdi keşfetmeyi istiyor
          olabilirsiniz. Ancak, bu pek mümkün değil. Öncelikle dikkat
          meditasyonları ve hayatın içinde gözlem ile başlayabilirsiniz.
          Sonrasında mindfulness temelli bilinç çalışmalarıyla, presence'ı
          taşıyabilecek sağlam bir temel geliştirebilirsiniz.
        </p>
        <p>Birebir Mentorlük istiyorsanız, "Merhaba"nızı bekliyoruz.</p>
      </PageContent>
    </>
  );
}
