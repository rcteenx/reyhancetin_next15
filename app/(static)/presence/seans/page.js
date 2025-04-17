import { heroPresenceSession } from "@/content/data/hero";
import { weeksSession } from "@/content/data/weeks";

import PageContent from "@/components/templates/pageContent";
import Weeks from "@/components/templates/weeks";
import FAQ from "@/components/templates/faq";
import ContactMe from "@/components/ui/contact-me";

import AdContent from "@/components/templates/adContent";

const faqWorkshop = [
  {
    id: 1,
    title: "Bu seminer için önceden bir deneyimim olması gerekir mi?",
    content:
      "Hayır, önceden herhangi bir deneyim gerekmiyor. Farkındalık ve içsel gözlem konularında yeni başlayanlar için de uygundur. Katılım için tek şart, bu yolculuğa açık bir zihinle başlamak istemenizdir.",
  },
  {
    id: 2,
    title: "Her hafta yapılan oturumlar kaydedilecek mi?",
    content:
      "Evet, her oturum kaydedilecek ve katılımcılarla paylaşılacaktır. Eğer bir oturumu kaçırırsanız, kaydı izleyebilirsiniz.",
  },
  {
    id: 3,
    title: "Seminer sadece çevrimiçi mi olacak?",
    content:
      "Evet, seminer çevrimiçi olarak gerçekleştirilecektir. Her hafta, Zoom üzerinden canlı katılım sağlayabilirsiniz.",
  },
  {
    id: 4,
    title: "Seminerin sonunda bir sertifika alacak mıyım?",
    content:
      "Bu seminerde odak noktamız, bilgi edinmekten çok içsel bir dönüşüm süreci yaşamaktır. Bu nedenle, seminer sonunda sertifika verilmeyecektir.",
  },
  {
    id: 5,
    title: "Katılım ücreti ne zaman ödenmelidir?",
    content:
      "Katılım ücreti, kayıt işlemi sırasında ödenmelidir. Ödeme bilgilerini size özel olarak ileteceğiz.",
  },
];

export default function Page() {
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>Bilinçli Farkındalık Bireysel Rehberlik Seanları</h1>
        </div>
      </section>

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
        <Weeks weeks={weeksSession} />

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
          <li>Ücret: 10.000 TL + KDV (5 seans toplamı)</li>
          <li>
            Kayıt: Tüm seanslar kayda alınacak ve katılımcıyla paylaşılacaktır
          </li>
        </ul>
        <ContactMe />

        <h3>💬 Sıkça Sorulan Sorular a</h3>
        <FAQ faq={faqWorkshop} />
      </PageContent>

      <AdContent contAd={heroPresenceSession}>
        <div className="relative mt-8 p-4 bg-slate-50 sm:rounded-xl shodow-2xl sm:border-4 sm:border-indigo-50">
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              Burada sadece yönlendirebilir ve koşullar oluşturabiliriz; ama
              yardım edemeyiz!
            </p>
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>G. I. Gurdjieff</em>
            </p>
          </blockquote>
        </div>
        <p className="m-4 text-xs md:text-sm">
          Hiç kimse bir başkasının yerine çalışamaz. Yardım, sadece doğru
          koşulların yaratılmasıyla mümkündür; bu da çoğu zaman, yön
          göstermekten ve sınır çizmeyi bilmekten ibarettir. Hakiki bilgiye
          ulaşmak isteyen, önce kendi iç çabasını başlatmak zorundadır.
        </p>
      </AdContent>
    </>
  );
}
