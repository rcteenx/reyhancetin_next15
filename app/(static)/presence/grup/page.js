import { heroPresenceGroup } from "@/content/data/hero";
import { weeksGroup } from "@/content/data/weeks";

import PageContent from "@/components/templates/pageContent";
import Weeks from "@/components/templates/weeks";
import FAQ from "@/components/templates/faq";

import ContactMe from "@/components/ui/contact-me";

import AdContent from "@/components/templates/adContent";

const faqGroup = [
  {
    id: 1,
    title:
      "Daha önce bireysel çalışmalara katılmamış olsam da gelebilir miyim?",
    content:
      "Hayır, grup çalışmaları, temel atölyemize katılmış ve çalışma için uygun olan arkadaşlara açıktır. Ortak bir dil ve anlayış oluşturmak için, herkesin giriş aşamasını tamamlamış olması gerekiyor.",
  },
  {
    id: 2,
    title: "Katılım için belli bir yaş ya da mesleki koşul var mı?",
    content:
      "Hayır. Önemli olan, içsel olarak bu yola çağrılıyor olmanızdır. Bununla beraber, ezoterik bir yolculuğa başlamak için, genel olarak, 30 ve hatta 40'lı yaşların daha uygun olduğunu belirtmek isterim.",
  },
  {
    id: 3,
    title: "Grup çalışmaları ne kadar sürecek?",
    content:
      "Belirli aralıklarla, ortalama 3 aylık döngüler planlanıyor. Sonrasında devam grupları oluşturulabilir.",
  },
  {
    id: 4,
    title: "Katılamadığım oturumlar olursa ne olacak?",
    content:
      "Grubun bütünlüğünü gözetmek için düzenli katılım önemlidir. Ancak zorunlu durumlarda kayıt ya da telafi imkanı sağlanabilir.",
  },
  {
    id: 5,
    title: "Bu çalışmalar neye dayanıyor?",
    content:
      "Gurdjieff’in Dördüncü Yol öğretisi temelinde; fakat modern psikoloji, mindfulness, somatik farkındalık gibi alanlarla da temas halinde bir çerçeveyle yürütülür.",
  },
];

export default function Page() {
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>Bilinçli Farkındalık Gözlem Grup Çalışmaları</h1>
        </div>
      </section>

      <PageContent h2Title="🌀 Bilinçli Farkındalık Gözlem Grup Çalışmaları">
        <h4 className="my-2 lg:text-xl">Gözlemci Geliştirmek</h4>
        <p>
          Bu bireysel çalışma, kişinin zihinsel, duygusal ve fiziksel
          merkezleriyle temasa geçmesini, gözlemci bir benlik geliştirmesini ve
          bilinçli yaşama adım atmasını amaçlar. Doğu öğretileri ve Gurdjieff
          sistemine dayanan bu yaklaşım, kişinin kendi üzerinde çalışabileceği
          gerçek, adım adım ilerleyen bir yapıyı sunar.
        </p>

        <h3>Neden Grup Çalışması?</h3>
        <p>
          Bireysel çaba esastır; ancak içsel gelişimin bazı eşiklerinde,
          yalnızlık yetersiz kalır. Zira insan, kendi tekrar eden davranış
          örüntülerini —makineselliğini— tek başına kolayca fark edemez.
          Diğerlerinin varlığı, ayna görevi görerek, bizde saklı kalan yönleri
          görünür kılar. Grup, bu anlamda bir tür “canlı laboratuvar” işlevi
          görür; dikkat, gözlem, hatırlama ve samimi paylaşım için bir alan
          oluşturur.
        </p>

        <h3 className="px-4 py-2 rounded-xl bg-[#f2f2f2]">
          🔹 Çalışma Aşamaları
        </h3>
        <Weeks weeks={weeksGroup} />

        <h3>Kimler Katılabilir?</h3>
        <ul>
          <li>
            Kendi içsel gelişim sürecinde artık “yalnız başına çalışmanın
            sınırlarını” görenler
          </li>
          <li>
            Gözlem, dikkat, hatırlama gibi kavramlarla aktif olarak çalışanlar
          </li>
          <li>Sessizliğe, dinlemeye, içe bakmaya gönüllü olanlar</li>
          <li>Kendi üstündeki çalışmayı bir yaşam yolu olarak görenler</li>
          <li>
            Grup alanını bir yük değil, bir armağan olarak taşıyabilecek olanlar
          </li>
        </ul>
        <h3>Grup İçinde Ne Çalışılır?</h3>
        <ul>
          <li>Kendini gözlem pratiği ve günlük yaşama taşınması</li>
          <li>Bölünmüş dikkat ve “kendini hatırlama” uygulamaları</li>
          <li>Farklı merkezlerin tanınması (zihin, duygu, beden)</li>
          <li>Otomatik tepkilerin izlenmesi ve dönüşüm alanına çekilmesi</li>
          <li>Sessizlik, şahitlik, aktif dinleme ve içsel duruş</li>
          <li>Paylaşılan deneyimlerle derinleşen farkındalık</li>
        </ul>
        <h3>Çalışma Yapısı ve Süreç</h3>
        <ul>
          <li>
            Gruplar, düzenli olarak haftalık ya da iki haftada bir toplanır.
          </li>
          <li>Her buluşma yaklaşık 1,5–2 saat sürer.</li>
          <li>
            Zoom üzerinden çevrim içi yapılır, bazen yüz yüze buluşmalar da
            düzenlenebilir.
          </li>
          <li>
            Her oturum bir tema içerir; teorik bir giriş, uygulama ve deneyim
            paylaşımı ile ilerler.
          </li>
          <li>
            Grup içinde güven, sadelik ve içtenlik esastır. Rekabet, performans
            veya gösteri alanı değil; “gerçek ben”le temas alanıdır.
          </li>
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
        <h3>Uygulama Bilgileri</h3>
        <p>Giriş atölyemiz, her ay yeni adaylar için tekrar başlatılacaktır.</p>
        <ul>
          <li>Platform: Zoom üzerinden görüntülü görüşme</li>
          <li>
            <strong>Katılım Ücreti (aylık):</strong> 1.500 TL + KDV
          </li>
          <li>
            Kayıt: Kişisel gözlem ve konuşmaların olduğu bölümler kayıt altına
            alınmaz.
          </li>
        </ul>
        <ContactMe />

        <h3>💬 Sıkça Sorulan Sorular</h3>
        <FAQ faq={faqGroup} />
      </PageContent>

      <AdContent contAd={heroPresenceGroup}>
        <div className="relative mt-8 p-4 bg-slate-50 sm:rounded-xl shodow-2xl sm:border-4 sm:border-indigo-50">
          <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
            <p>
              İnsan ancak diğerleriyle birlikte çalışarak kendini tanıyabilir.
            </p>
            <p className="mx-4 mb-0 mt-3 font-semibold text-right">
              <em>G. I. Gurdjieff</em>
            </p>
          </blockquote>
        </div>
        <p className="m-4 text-xs md:text-sm">
          Gerçek gözlem, bir başkasının bakışıyla keskinleşir; dirençlerimiz,
          tepkilerimiz ve kaçışlarımız, ancak grup içinde görünür olur.
          Gurdjieff’in de belirttiği gibi, insan kendini ancak başkalarıyla
          birlikte çalışarak tanıyabilir—çünkü başkaları bize kendimizden daha
          çok şey gösterebilir.
        </p>
        <p className="m-4 text-xs md:text-sm">
          Kendimizi yalnızca kendimizde aramak yeterli olmuyor.
        </p>
      </AdContent>
    </>
  );
}
