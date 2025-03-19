import ReyhanHero from "@/components/sections/reyhan/1-hero";
import ReyhanCarousel from "@/components/sections/home/b-1-reyhan-info";

import PageContent from "@/components/templates/pageContent";

export default function Page() {
  return (
    <>
      <ReyhanHero />
      <ReyhanCarousel />

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
        <p>Sevgilerle...</p>
      </PageContent>
    </>
  );
}
