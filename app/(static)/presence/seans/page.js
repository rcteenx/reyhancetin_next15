import { presenceInstagram } from "@/public/assets/images";
import { contPresence, presenceMentor } from "@/content/data";

import PresenceHeroSession from "@/components/sections/presence/session_hero";
import Presence from "@/components/sections/presence/b-1-presence";

import PageContent from "@/components/templates/pageContent";
import PresenceWeeks from "@/components/sections/presence/workshop_weeks";
import PresenceFAQ from "@/components/sections/presence/faq";
import ContactMe from "@/components/ui/contact-me";

export default function Page() {
  return (
    <>
      <PresenceHeroSession />

      <PageContent h2Title="🌀 Bilinçli Farkındalık Bireysel Rehberlik Seanları">
        <h4 className="my-2 lg:text-xl">Gözlemci Geliştirmek</h4>
        <p>
          Bu bireysel çalışma, kişinin zihinsel, duygusal ve fiziksel
          merkezleriyle temasa geçmesini, gözlemci bir benlik geliştirmesini ve
          bilinçli yaşama adım atmasını amaçlar. Doğu öğretileri ve Gurdjieff
          sistemine dayanan bu yaklaşım, kişinin kendi üzerinde çalışabileceği
          gerçek, adım adım ilerleyen bir yapıyı sunar.
        </p>
        <h3>Çalışmaların Amacı</h3>
        <p>
          Bu çalışmanın amacı, kişinin kendi iç işleyişini doğrudan
          gözlemleyerek “şimdi ve burada” yaşama yetisini geliştirmesi, bir
          gözlemci benlik inşa etmesi ve bilinçli farkındalık kapasitesini
          artırmasıdır. Katılımcı, ilk aşamanın sonunda kendisini, düşünce ve
          duygularından ayırarak, dikkatini yönlendirme, bölme ve bilinçli
          kullanma becerisi kazanacaktır.
        </p>
        <h3>Kimler Katılabilir?</h3>
        <ul>
          <li>İçsel yolculuğuna başlamış ve dönüşüm arayışında olanlar.</li>
          <li>Kendini daha derin bir farkındalıkla tanımak isteyenler.</li>
          <li>Zihin, beden ve ruh arasında denge kurmayı amaçlayanlar.</li>
          <li>Yaşamı bilinçli bir şekilde yaşamak isteyenler.</li>
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
        <h3>Uygulama Bilgileri</h3>
        <p>Giriş atölyemiz, her ay yeni adaylar için tekrar başlatılacaktır.</p>
        <ul>
          <li>Toplam Süre: 4+1 hafta</li>
          <li>
            Seanslar: Her biri 40+40 dakikalık iki bölüm, 10 dakika ara ile
            toplam 90 dakika
          </li>
          <li>Platform: Zoom üzerinden görüntülü görüşme</li>
          <li>Ücret: 10.000 TL (5 seans toplamı)</li>
          <li>
            Kayıt: Tüm seanslar kayda alınacak ve katılımcıyla paylaşılacaktır
          </li>
        </ul>
        <ContactMe />

        <h3>💬 Sıkça Sorulan Sorular</h3>
        <PresenceFAQ />
      </PageContent>
    </>
  );
}
