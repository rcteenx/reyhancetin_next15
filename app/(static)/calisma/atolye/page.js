import { heroWorkshop as hero } from "@/content/data/hero";
import { getLastBlogs } from "@/lib/blogs";

import { weeksWorkshop } from "@/content/data/weeks";

import PageContent from "@/components/templates/pageContent";
import Weeks from "@/components/templates/weeks";
import FAQ from "@/components/templates/faq";
import ContactMe from "@/components/ui/contact-me";

import AdWorkshop from "@/components/sections/work/adWorkshop";
import BlogList from "@/components/repo/blog/blogs";

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

export const metadata = {
  title: hero.h1,
};

export default async function Page() {
  const blogs = await getLastBlogs(10);
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>{hero.h1}</h1>
        </div>
      </section>
      <PageContent h2Title="🌀 Bilinç ve Farkındalık Çalışmalarına Giriş Atölyesi">
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

        <h3 className="px-4 py-2 rounded-xl bg-[#f2f2f2]">🔹 Atölye İçeriği</h3>
        <Weeks weeks={weeksWorkshop} />
        <h3>Kimler Katılabilir?</h3>
        <ul>
          <li>İçsel yolculuğuna başlamış ve dönüşüm arayışında olanlar.</li>
          <li>Kendini daha derin bir farkındalıkla tanımak isteyenler.</li>
          <li>Zihin, beden ve ruh arasında denge kurmayı amaçlayanlar.</li>
          <li>Yaşamı bilinçli bir şekilde yaşamak isteyenler için.</li>
        </ul>

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
            <strong>Katılım Ücreti:</strong> 1.500 TL + KDV
          </li>
        </ul>
        <ContactMe />

        <h3>💬 Sıkça Sorulan Sorular</h3>
        <FAQ faq={faqWorkshop} />
      </PageContent>
      <AdWorkshop />
      <BlogList h2Title="İlgili Blog Yazılarım" blogs={blogs} />
    </>
  );
}
