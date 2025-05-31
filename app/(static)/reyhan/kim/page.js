import ReyhanKim from "@/components/sections/reyhan/info/kim";
import ReyhanInfoContainer from "@/components/sections/reyhan/info/container";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

export async function generateMetadata() {
  return {
    title: {
      absolute: "Reyhan Çetin X: Kimdir ya da Nedir?",
    },
  };
}

export default function Page() {
  return (
    <>
      <ReyhanInfoContainer ReyhanInfo={ReyhanKim} id="2" />

      <PageContent h2Title="Sessiz Tanık">
        <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
          <p>
            "Sen; bedenin, zihnin, isimlerin ya da rollerin değilsin. Sen, bütün
            bunları sessizce izleyen Tanık’sın."
          </p>
          <p className="mx-4 mb-0 mt-3 font-semibold text-right">
            <em>Ramana Maharshi</em>
          </p>
          <p>Bir birimize tanık olmak için, "Merhaba"nızı bekliyorum.</p>
        </blockquote>

        <ContactMe />
      </PageContent>
    </>
  );
}
