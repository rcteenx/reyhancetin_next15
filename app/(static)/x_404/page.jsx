import Link from "next/link";
import { cont404 } from "@/content/data/hero";

import HeroSingle from "@/components/templates/hero";

export async function generateMetadata() {
  return {
    title: { absolute: "Reyhan Çetin X - 404: " + cont404.p },
  };
}

export default function StaticPage() {
  return (
    <>
      <HeroSingle contHero={cont404}>
        <p className="my-4 text-indigo text-xs md:text-sm">{cont404.p}.</p>
        <h4 className="my-4 text-indigo">
          <Link href="https://www.reyhancetin.org.tr/">{cont404.cta}</Link>
        </h4>
      </HeroSingle>
    </>
  );
}
