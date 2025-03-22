import { whyweneed } from "@/content/data";

import WayHero from "@/components/sections/way/1-hero";
import WhyWeNeed from "@/components/sections/way/b-1-why-we-need";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

export default function Page() {
  return (
    <>
      <WayHero />
      <WhyWeNeed need={whyweneed} />

      <PageContent h2Title="UZUN İNCE BİR YOL">
        <p>
          Aşık Veysel'in sözleriyle, 'Uzun ince bir yolda' ilerliyoruz. Ancak,
          yol tek değil, birçok farklı yollar var. Üstelik, bir yol seçmeseniz
          bile, zaman akıyor ve olduğumuz yerde bile gidiyoruz gündüz gece!
        </p>
        <p>
          Bazı yollar, mekanik bir şekilde sürünün, karanlığın ve hiçliğin
          ortasında ilerlerken, bazıları ise kendimizi keşfetmeye, bilinçli ve
          farkında bir yaşam sürmeye hatta ötesine doğru ilerliyor.
        </p>
        <h3>Kendini Tanıma</h3>
        <p>
          Kendini tanıma yolculuğuna başlayan yolcular, çeşitli zorluklarla
          karşılaşıyorlar. Sahte bile olsa, eski ve tanıdık dünyaya ve sürüye
          dönmek için birçok sebep ortaya çıkıyor. sürüye dönmek için pek çok
          sebep ortaya çıkıyor.
        </p>
        <p>
          Birlikte yürüttüğümüz çalışmalarla, hem yolda ilerlemek için
          birbirimize destek oluyoruz hem de yolculuğumuz dostlarla daha keyifli
          hale geliyor.
        </p>
        <h3>Bir Varmış Bir Yokmuş</h3>
        <p>
          Yıllar önce, bir yıldan uzun süre birlikte çalıştığımız bir arkadaş,
          “Reyhan, sanki hiç ilerlemedim gibi hissediyorum,” demişti. Düşününce
          hak verdim. Gerçekten de bir arpa boyu yol almamıştık.
        </p>
        <p>
          Sonra fark ettik ki yol, mekanik bir ilerleme değil; her zaman ve her
          yerde kendimizde, bilinçli farkındalıkla kalabilmek. Tıpkı bir yoga
          duruşu gibi... Dışarıdan hareketsiz görünür, ama içeride ince bir
          çaba, sürekli bir uyanıklık ister. Kasların titrer, zihin kaçmak
          ister, ama sen orada kalırsın. Yol, işte tam da bu: Olduğun yerde,
          merkezinde ve farkında durabilmek.
        </p>
        <hr className="mb-4" />
        <h3>Düzenli Çalışmalar</h3>
        <p>
          Çalışmalarımız haftada 2-3 akşam Zoom ortamında yapılıyor. Her biri
          farklı formatta olan bu toplantılar, yaklaşık 2 saat sürüyor.
        </p>
        {/* <p>
          Giriş atölyemizi başarıyla tamamlayan arkadaşları, haftalık
          çalışmalarda aramızda görmeyi bekliyoruz.
        </p> */}
        <p>Çalışmalarla ilgileniyorsanız, "Merhaba"nızı bekliyoruz.</p>
        <ContactMe />
      </PageContent>
    </>
  );
}
