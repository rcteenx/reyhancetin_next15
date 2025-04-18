import ReyhanOzgecmis from "@/components/sections/reyhan/info/ozgecmis";
import ReyhanInfoContainer from "@/components/sections/reyhan/info/container";

import PageContent from "@/components/templates/pageContent";
import ContactMe from "@/components/ui/contact-me";

export async function generateMetadata() {
  return {
    title: "Klasik Özgeçmiş",
  };
}

export default function Page() {
  return (
    <>
      <ReyhanInfoContainer ReyhanInfo={ReyhanOzgecmis} id="3" />

      <PageContent h2Title="Akmak Ne Hoş">
        <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
          <p>
            Her gün bir yerden göçmek ne iyi;
            <br />
            Her gün bir yere konmak ne güzel.
            <br />
            Bulanmadan, donmadan akmak ne hoş;
            <br />
            Dünle beraber gitti cancağızım,
            <br />
            Ne kadar söz varsa düne ait,
            <br />
            Şimdi yeni şeyler söylemek lazım.
          </p>
          <p className="mx-4 mb-0 mt-3 font-semibold text-right">
            <em>Mevlana</em>
          </p>
          <p>Her beraber akmak için, "Merhaba"nızı bekliyorum.</p>
        </blockquote>
        <ContactMe />
      </PageContent>
    </>
  );
}
