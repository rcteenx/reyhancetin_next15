import { heroWorkshop as hero } from "@/content/data/hero";

import AdContent from "@/components/templates/adContent";

export default function AdWorkshop() {
  return (
    <AdContent contAd={hero}>
      <div className="relative mt-12 p-4 bg-slate-50 sm:rounded-xl shodow-2xl sm:border-4 sm:border-indigo-50">
        <blockquote className="[&>p]:text-xs sm:[&>p]:text-sm text-primary z-10">
          <p>
            İnsan, kendisini gözlemlemeye başladığı anda, uykusundan uyanmaya
            başlar.
          </p>
          <p className="mx-4 mb-0 mt-3 font-semibold text-right">
            <em>G. I. Gurdjieff</em>
          </p>
        </blockquote>
      </div>
      <p className="my-8 px-4 text-xs md:text-sm">
        İçsel uyanış bir teori değil, doğrudan deneyimle anlaşılabilen bir
        gerçektir. Gündelik yaşantımızın otomatik akışı içinde, kendimizi
        gözlemlemeye başladığımız an, bilinç kıvılcımı yanmaya başlar. Bu
        atölye, o kıvılcımı büyütmek ve sizi gerçek uyanışın eşiğine getirmek
        için hazırlandı.
      </p>
    </AdContent>
  );
}
