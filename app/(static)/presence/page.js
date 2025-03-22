import { presenceInstagram } from "@/public/assets/images";
import { contPresence, presenceMentor } from "@/content/data";

import PresenceHero from "@/components/sections/presence/1-hero";
import Presence from "@/components/sections/presence/b-1-presence";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

export default function Page() {
  return (
    <>
      <PresenceHero />

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

      <Presence img={presenceInstagram} content={contPresence} />
      {/* <PresenceMentor content={presenceMentor} /> */}

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
        <ContactMe />
      </PageContent>
    </>
  );
}
