import { heroWayContract as hero } from "@/content/data/hero";

import PageContent from "@/components/templates/pageContent";
import WayAttendenceModal from "@/components/sections/way/attendence";

export const metadata = {
  title: hero.h1,
};

export default function Page() {
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>{hero.h1}</h1>
        </div>
        <p id="h1p">{hero.p}</p>
      </section>

      <PageContent h2Title="🌀 Yol Arkadaşlığına Katılım">
        <p className="text-lg text-gray-800 leading-relaxed">
          Bu metin, Bilinç Yolculuğu çalışmalarına katılmadan önce okunması
          zorunlu olan bilgilendirme ve sözleşme dokümanıdır. Burada çalışmanın
          kapsamı, katılımcı sorumlulukları, etik ilkeler ve grup içi kurallar
          açıkça belirtilmiştir.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-2">
          Lütfen tüm maddeleri dikkatle inceleyiniz.
          <strong>“Okudum, Anladım ve Kabul Ediyorum”</strong> onayı verilmeden
          başvuru yapılamaz.
        </p>

        <hr />

        <WayAttendenceModal />

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
          <li>Ücret: 10.000 TL + KDV (5 seans toplamı)</li>
          <li>
            Kayıt: Tüm seanslar kayda alınacak ve katılımcıyla paylaşılacaktır
          </li>
        </ul>
      </PageContent>
    </>
  );
}
