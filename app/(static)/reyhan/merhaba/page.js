import ReyhanMerhaba from "@/components/sections/reyhan/info/merhaba";
import ReyhanInfoContainer from "@/components/sections/reyhan/info/container";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

export async function generateMetadata() {
  return {
    title: {
      absolute: "Reyhan Çetin X: Merhaba",
    },
  };
}

export default function Page() {
  return (
    <>
      <ReyhanInfoContainer ReyhanInfo={ReyhanMerhaba} id="1" />

      <PageContent h2Title="Merhaba Kapıları Açar">
        <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
          <p>
            "Her yeni dostluk, bir merhaba ile başlar; ve o merhaba, bazen
            kalbin kapısını aralar."
          </p>
          <p className="mx-4 mb-0 mt-3 font-semibold text-right">
            <em>Mevlana</em>
          </p>
          <p>Yeni kapıları açmak için, "Merhaba"nızı bekliyorum.</p>
        </blockquote>
        <ContactMe />
      </PageContent>
    </>
  );
}
