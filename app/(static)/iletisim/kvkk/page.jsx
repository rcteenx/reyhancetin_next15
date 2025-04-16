import Link from "next/link";
import { contContact } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";
import PageContent from "@/components/templates/pageContent";

import IconComponent from "@/components/ui/IconComponent";

export default function StaticPage() {
  return (
    <>
      <HeroSingle contHero={contContact}>
        <p className="my-4 text-indigo text-xs md:text-sm">{contContact.cta}</p>
        <div className="m-4 grid grid-cols-1 gap-2">
          {contContact.buttons.map((b, index) => (
            <div key={b.id} className={b.show}>
              <Link
                href={b.link}
                title={`${b.title} Linki`}
                className={`transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
              >
                <div className="w-72 flex gap-2 justify-start items-center text-left ">
                  <IconComponent name={b.icon} size={24} color={b.iconColor} />
                  <span className="">{b.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </HeroSingle>
      <PageContent h2Title="Aydınlatma Metni">
        <div className="text-gray-600 ">
          <h3>1. Veri Sorumlusu Kimliği</h3>
          <p>
            Bu aydınlatma metni, [Şirket Adınız] ("Şirket") tarafından, 6698
            sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel
            verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek
            amacıyla hazırlanmıştır.
          </p>

          <h3>2. Kişisel Verilerin Hangi Amaçla İşleneceği</h3>
          <p>
            Toplanan kişisel verileriniz, aşağıdaki amaçlar doğrultusunda
            işlenmektedir:
          </p>
          <ul>
            <li>Hizmetlerimizin sunulması ve hizmet kalitesinin artırılması</li>
            <li>
              Müşteri ilişkilerinin yönetimi ve müşteri memnuniyetinin
              sağlanması
            </li>
            <li>Yasal ve idari yükümlülüklerin yerine getirilmesi</li>
            <li>Ticari faaliyetlerin planlanması ve icrası</li>
            <li>Pazarlama ve reklam faaliyetlerinin yürütülmesi</li>
            <li>Bilgi güvenliği süreçlerinin yönetimi</li>
            <li>İnsan kaynakları süreçlerinin yürütülmesi</li>
          </ul>

          <h3>
            3. Kişisel Verilerin Aktarılabileceği Taraflar ve Aktarım Amaçları
          </h3>
          <p>
            Kişisel verileriniz, yukarıda belirtilen amaçlarla ve KVKK'nın 8. ve
            9. maddelerine uygun olarak, aşağıda belirtilen taraflara
            aktarılabilecektir:
          </p>
          <ul>
            <li>
              Yasal düzenlemeler kapsamında yetkili kamu kurum ve kuruluşlarına
            </li>
            <li>İş ortaklarımıza ve hizmet aldığımız tedarikçilere</li>
            <li>Yetkilendirilmiş üçüncü taraflara</li>
            <li>
              Yurtiçinde veya yurtdışında bulunan sunuculara ve bulut bilişim
              hizmet sağlayıcılarına
            </li>
          </ul>

          <h3>4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h3>
          <p>
            Kişisel verileriniz, çeşitli kanallardan (internet sitesi, mobil
            uygulama, çağrı merkezi vb.) ve otomatik veya otomatik olmayan
            yöntemlerle toplanabilir. Kişisel verilerinizin işlenmesi, KVKK'nın
            5. ve 6. maddelerinde belirtilen hukuki sebepler doğrultusunda
            gerçekleştirilir.
          </p>

          <h3>5. Kişisel Veri Sahibi Olarak Haklarınız</h3>
          <p>
            KVKK’nın 11. maddesi uyarınca, kişisel veri sahipleri olarak
            aşağıdaki haklara sahipsiniz:
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>
              Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
            </li>
            <li>
              Kişisel verilerinizin işlenme amacını ve bu amaca uygun kullanılıp
              kullanılmadığını öğrenme
            </li>
            <li>
              Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı
              üçüncü kişileri bilme
            </li>
            <li>
              Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde
              bunların düzeltilmesini isteme
            </li>
            <li>
              KVKK’nın 7. maddesi uyarınca kişisel verilerinizin silinmesini
              veya yok edilmesini isteme
            </li>
            <li>
              Kişisel verilerinizin düzeltilmesi veya silinmesi durumunda bu
              işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere
              bildirilmesini isteme
            </li>
            <li>
              İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
              edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz
              etme
            </li>
            <li>
              Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle
              zarara uğramanız halinde zararın giderilmesini talep etme
            </li>
          </ul>

          <h3>6. İletişim</h3>
          <p>
            Kişisel verilerinizle ilgili haklarınızı kullanmak veya herhangi bir
            sorunuz için bizimle iletişime geçebilirsiniz:
          </p>

          <h3>7. Kişisel Verilerin Saklanma Süresi</h3>
          <p>
            Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca veya
            ilgili mevzuatın öngördüğü süre kadar saklanır. Bu sürelerin
            sonunda, kişisel verileriniz KVKK'ya uygun olarak silinir, yok
            edilir veya anonim hale getirilir.
          </p>

          <h3>8. Gizlilik ve Güvenlik</h3>
          <p>
            Kişisel verilerinizin gizliliği ve güvenliği bizim için önemlidir.
            Verilerinizin korunması amacıyla, gerekli teknik ve idari tedbirleri
            almaktayız. Ancak, internetin doğası gereği tamamen güvenli bir
            ortam sağlamanın mümkün olmadığını unutmamanız gerekir.
          </p>
          <p>* Çerez politikası, ChatGPT desteği ile hazırlanmıştır.</p>
        </div>
      </PageContent>
    </>
  );
}
