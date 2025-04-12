import { presenceInstagram } from "@/public/assets/images";
import { contPresence, presenceMentor } from "@/content/data";

import PresenceHeroSession from "@/components/sections/presence/group_hero";
import Presence from "@/components/sections/presence/b-1-presence";

import PageContent from "@/components/templates/pageContent";
import PresenceWeeks from "@/components/sections/presence/group_weeks";
import PresenceFAQ from "@/components/sections/presence/group_faq";
import ContactMe from "@/components/ui/contact-me";

export default function Page() {
  return (
    <>
      <PresenceHeroSession />
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

        <h3 className="text-center">🔹 Çalışma Aşamaları</h3>
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
