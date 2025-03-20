import Link from "next/link";

import { StaticPages } from "@/content/data";

export default function AdWorkshop() {
  return (
    <div className="border border-indigo/80 rounded-xl py-4 px-8 text-center">
      <h4 className="">
        <Link
          href={"/" + StaticPages[2].link + "/" + StaticPages[2].pages[0].link}
          className=""
        >
          Çalışmalara Giriş: Temel Bilinç Atölyesi
        </Link>
      </h4>
      <p>
        Her ay son hafta sonu yapılan atölyemize yeni arkadaşları davet
        ediyoruz.
      </p>
      <ul className="flex items-center justify-center gap-4">
        <li className="px-4 py-2 gradientAccent gradientTransition text-white hover:bg-indigo/80 rounded-xl cursor-pointer">
          <Link href="https://wa.me/905443087402?text=at%C3%B6lye%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%0A">
            Kayıt
          </Link>
        </li>
        <li className="px-4 py-2 border hover:bg-gray-200 rounded-xl cursor-pointer">
          <Link
            href={
              "/" + StaticPages[2].link + "/" + StaticPages[2].pages[0].link
            }
          >
            Bilgi
          </Link>
        </li>
      </ul>
    </div>
  );
}
