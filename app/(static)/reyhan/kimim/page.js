import ReyhanKimim from "@/components/sections/reyhan/info/kimim";
import ReyhanInfoContainer from "@/components/sections/reyhan/info/container";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

export async function generateMetadata() {
  return {
    title: "Reyhan Çetin X Kim?",
  };
}

export default function Page() {
  return (
    <>
      <ReyhanInfoContainer ReyhanInfo={ReyhanKimim} id="2" />

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
