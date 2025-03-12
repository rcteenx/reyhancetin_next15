import WayHero from "@/components/sections/way/1-hero";
import PageContent from "@/components/templates/pageContent";
import AdWorkshop from "@/components/ui/ad-workshop";

export default function Page() {
  return (
    <>
      <WayHero />
      <PageContent h2Title="Uzun İnce bir Yol">
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
        <h3 className="-mx-2 gradientIndigo rounded-xl p-2">Kendini Tanıma</h3>
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
        <hr className="mb-4" />
        <h3 className="-mx-2 gradientAccent rounded-xl p-2">
          Düzenli Çalışmalar
        </h3>
        <p>
          Çalışmalarımız haftada 2-3 akşam Zoom ortamında yapılıyor. Her biri
          farklı formatta olan bu toplantılar, yaklaşık 2 saat sürüyor.
        </p>
        <AdWorkshop />
        <p>
          Giriş atölyemizi başarıyla tamamlayan arkadaşları, haftalık
          çalışmalarda aramızda görmeyi bekliyoruz.
        </p>
        {/* <p>
          Ayrıca, belirli dönemlerde farklı şehirlerde hafta sonu buluşmaları ve
          şehir dışında inziva kampları düzenlenmektedir.
        </p> */}
        <p>Sevgilerle...</p>
      </PageContent>
    </>
  );
}
