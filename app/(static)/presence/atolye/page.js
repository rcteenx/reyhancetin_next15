import { presenceInstagram } from "@/public/assets/images";
import { contPresence, presenceMentor } from "@/content/data";

import PresenceHeroWorkshop from "@/components/sections/presence/workshop_hero";
import Presence from "@/components/sections/presence/b-1-presence";

import PageContent from "@/components/templates/pageContent";
import PresenceWeeks from "@/components/sections/presence/session_weeks";
import PresenceFAQ from "@/components/sections/presence/faq";
import ContactMe from "@/components/ui/contact-me";

export default function Page() {
  return (
    <>
      <PresenceHeroWorkshop />

      <PageContent
        h2Title="🌀 Bilinç ve Farkındalık Çalışmalarına Giriş Atölyesi
"
      >
        <h4 className="my-2 lg:text-xl">
          Dikkatin Gücüyle Uyanışa Bir Yolculuk
        </h4>
        <p>
          Günlük yaşamın karmaşası içinde çoğu zaman kim olduğumuzu, ne
          hissettiğimizi ve nasıl düşündüğümüzü fark etmeden yaşıyoruz. Bu
          seminer, otomatikliğin ötesine geçerek bilinçli farkındalığı bir yaşam
          biçimine dönüştürmek isteyenler için tasarlandı.
        </p>
        <p>
          Doğu öğretileriyle Batı’nın iç gözlem yöntemlerini birleştiren bu
          yolculuk, sizi kendi merkezinize doğru sade, derin ve uygulanabilir
          bir adım adım keşfe davet ediyor.
        </p>
        <h3>Atölyenin Amacı</h3>
        <p>
          Bu seminer, bireyin kendini gözlemleme ve bilinçli farkındalık
          becerilerini geliştirmesini hedefleyen 4 haftalık bir içsel çalışma
          programıdır. Gündelik yaşamın akışında kaybolmak yerine, anda kalmayı,
          dikkat ve gözlem gücünü artırmayı ve zihinsel süreçlere bilinçli bir
          yön verme becerisini kazandırmayı amaçlar.
        </p>
        <p>
          Gurdjieff'in Dördüncü Yol öğretisinden, Doğu’nun kadim pratiklerinden
          ve modern dikkat temelli yaklaşımlardan beslenen bu atölye, teorik
          bilgi kadar pratik uygulamalara da odaklanır.
        </p>
        <h3>Kimler Katılabilir?</h3>
        <ul>
          <li>İçsel yolculuğuna başlamış ve dönüşüm arayışında olanlar.</li>
          <li>Kendini daha derin bir farkındalıkla tanımak isteyenler.</li>
          <li>Zihin, beden ve ruh arasında denge kurmayı amaçlayanlar.</li>
          <li>Yaşamı bilinçli bir şekilde yaşamak isteyenler için.</li>
        </ul>

        <h3 className="text-center">🔹 Atölye İçeriği</h3>
        <PresenceWeeks />

        <h3>Eğitmen Hakkında</h3>
        <p>
          Reyhan Çetin X, Bilinçli farkındalık, içsel gözlem, dikkat çalışmaları
          ve Gurdjieff’in Dördüncü Yol öğretisi alanlarında uzun yıllardır
          bireysel ve grup çalışmaları yürütmektedir. Felsefi ve ruhsal
          öğretileri günlük yaşamla buluşturmayı hedefleyen yaklaşımıyla,
          katılımcılara kalıcı dönüşüm yolları sunar.
        </p>
        <hr />
        <h3>Katılım ve Kayıt</h3>
        <p>Giriş atölyemiz, her ay yeni adaylar için tekrar başlatılacaktır.</p>
        <ul>
          <li>
            <strong>Toplam Süre:</strong> 4 Hafta (Haftada 1 oturum)
          </li>
          <li>
            <strong>Saat:</strong> 21:00 - 23:00
          </li>
          <li>
            <strong>Katılım Ücreti:</strong> 1.500 TL
          </li>
        </ul>
        <ContactMe />

        <h3>💬 Sıkça Sorulan Sorular</h3>
        <PresenceFAQ />
      </PageContent>
    </>
  );
}
