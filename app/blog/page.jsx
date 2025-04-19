import Link from "next/link";

import { heroBlog as hero } from "@/content/data/hero";
import { getLastBlogs } from "@/lib/blogs";

import HeroSingle from "@/components/templates/hero";
import BlogList from "@/components/repo/blog/blogs";

export const metadata = {
  title: {
    absolute: "Reyhan Çetin X - Blog: Kaptan'ın Seyir Defteri",
  },
};

export default async function BlogsPage() {
  const blogs = await getLastBlogs(10);
  return (
    <>
      <HeroSingle contHero={hero}>
        <div className="px-4 mt-8 text-indigo text-xs md:text-sm">
          <ul>
            <li>Bu blog, Kaptan'ın seyir defteridir.</li>
            <li>Reyhan'ın yolculuğundaki gözlem ve deneyimleri paylaşır.</li>
            <li>
              Bilinmeze yapılan yolculukta, hazır bir haritası ya da
              yolumuzu aydınlatacak ışık yok. Bunları her birimiz kendisi için
              inşa etmek durumunda.
            </li>
            <li>Bireysel yolculuklarınıza eşlik etmesi dileğiyle.</li>
          </ul>
        </div>
        <p className="my-4 text-indigo text-xs md:text-sm">{hero.cta}</p>
        <div className="mx-8 my-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {hero.buttons.map((b, index) => (
            <div key={b.id} className="grid-cols-1">
              <Link
                href={b.link}
                title={`${b.title} Linki`}
                className={` relative transition-all duration-200 gradientTransition btn-hero px-6 py-3 ${b.gradiant}`}
                role="button"
              >
                <span className="">{b.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </HeroSingle>
      <BlogList h2Title="Son 10 Blog Yazım" blogs={blogs} />
    </>
  );
}
