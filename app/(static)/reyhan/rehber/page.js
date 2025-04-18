import ReyhanRehber from "@/components/sections/reyhan/info/rehber";
import ReyhanInfoContainer from "@/components/sections/reyhan/info/container";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

export async function generateMetadata() {
  return {
    title: {
      absolute: "Bilinç ve Farkındalık Rehberi ve Öğretmen - Reyhan Çetin X",
    },
  };
}

export default function Page() {
  return (
    <>
      <ReyhanInfoContainer ReyhanInfo={ReyhanRehber} id="4" />

      <PageContent h2Title="İnsan Bir Hapishanedir">
        <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
          <p>
            "Sen hapishanedesin. Eğer bu hapishaneden çıkmak istiyorsan, önce
            hapishanede olduğunu fark etmelisin. Özgür olduğunu düşünüyorsan,
            asla kaçamazsın."
          </p>
          <p className="mx-4 mb-0 mt-3 font-semibold text-right">
            <em>G.I. Gurdjieff</em>
          </p>
          <p>Birlikte kaçmak için, "Merhaba"nızı bekliyorum.</p>
        </blockquote>
        <ContactMe />
      </PageContent>
    </>
  );
}
