import Link from "next/link";
import { cont500 } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";

export async function generateMetadata() {
  return {
    title: { absolute: "Reyhan Çetin X - 500: " + cont500.p },
  };
}

export default function StaticPage() {
  return (
    <>
      <HeroSingle contHero={cont404}>
        <p className="my-4 text-indigo text-xs md:text-sm">{cont500.p}</p>
        <h4 className="my-4 text-indigo">
          <Link href="https://www.reyhancetin.org.tr/">{cont500.cta}</Link>
        </h4>
      </HeroSingle>
    </>
  );
}
