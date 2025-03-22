import ReyhanHero from "@/components/sections/reyhan/1-hero";
import ReyhanCarousel from "@/components/sections/home/b-1-reyhan-info";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

export default function Page() {
  return (
    <>
      <ReyhanHero />
      <ReyhanCarousel />

      <PageContent h2Title="Merhabanızı Bekliyorum">
        <p>
          Elimden geldiğince, kabul edilebilir sınırlar içinde Reyhan’ı
          anlatmaya çalıştım. Yukarıda paylaştıklarım umarım çoğunuz için
          yeterlidir. Ama itiraf etmeliyim, hiçbirini tam içime sindiremedim.
          Neredeyse bir yıl uğraştıktan sonra, yapabildiğimin en iyisi bu :)
        </p>
        <p>
          İçeriye doğru yürüdükçe, “ben” sandığım Reyhan’dan uzaklaşıyorum. Her
          katmanda yeni bir Reyhan çıkıyor karşıma. Onunla bir süre kalıyorum,
          sonra o da geride kalıyor.
        </p>
        <p>
          Aşağıda artık bir “Reyhan” olmayan, ama zaman zaman “ben” hissinin
          yerleştiği farkındalık hallerim var:
        </p>
        <p>Gözlemci, Sessiz Tanık, Saf Farkındalık, Presence</p>
        <p>
          Bunları burada anlatmak kolay değil. <br />
          Ama eğer merak ediyorsanız, bir “Merhaba” gönderin.
          <br />
          Bakalım yol ve sohbet bizi nereye götürecek :)
        </p>
        <p>Sevgilerle...</p>
        <ContactMe />
      </PageContent>
    </>
  );
}
