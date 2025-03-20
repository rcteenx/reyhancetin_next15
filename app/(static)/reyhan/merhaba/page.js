import ReyhanMerhaba from "@/components/sections/reyhan/info/merhaba";
import ReyhanInfoContainer from "@/components/sections/reyhan/info/container";

import PageContent from "@/components/templates/pageContent";

export default function Page() {
  return (
    <>
      <ReyhanInfoContainer ReyhanInfo={ReyhanMerhaba} />

      <PageContent h2Title="Uzun İnce bir Yol">
        <p>Gözlemci, Sessiz Tanık, Saf Farkındalık, Presence</p>
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
