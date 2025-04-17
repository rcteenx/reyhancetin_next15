import Link from "next/link";

import { getLastBlogs } from "@/lib/blogs";
import { heroBlog } from "@/content/data/hero";

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
      <HeroSingle contHero={heroBlog}>
        <p className="px-4 my-4 text-indigo text-xs md:text-sm">
          Beynimizde, duyularımızla dış dünyadan gelen izlenimleri yorumlayan
          bir sistem var. Bu sistem sayesinde çevremizi algılıyor ve
          anlamlandırıyoruz. Ancak bu anlamlandırma, aynı zamanda bizi
          sınırlayan bir çerçeve, bir tür zihinsel hapishane oluşturuyor. Bu
          çerçevenin ötesine geçebilmek için, içimizdeki sessiz tanığın
          dikkatini bu işleyişe yönlendirmemiz gerekiyor.!!
        </p>
      </HeroSingle>
      <BlogList h2Title="Son 10 Blog Yazım" blogs={blogs} />
    </>
  );
}
