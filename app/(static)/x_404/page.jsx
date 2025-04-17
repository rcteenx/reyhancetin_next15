import Link from "next/link";
import { hero404 } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";

export async function generateMetadata() {
  return {
    title: { absolute: "Reyhan Çetin X - 404: " + hero404.p },
  };
}

export default function StaticPage() {
  return (
    <>
      <HeroSingle contHero={hero404}>
        <p className="my-4 text-indigo text-xs md:text-sm">{hero404.p}.</p>
        <h4 className="my-4 text-indigo">
          <Link href="https://www.reyhancetin.org.tr/">{hero404.cta}</Link>
        </h4>
      </HeroSingle>
    </>
  );
}
