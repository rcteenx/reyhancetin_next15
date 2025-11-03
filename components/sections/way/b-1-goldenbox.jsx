export default function WayGoldenbox() {
  return (
    <section className="max-w-5xl mx-auto sm:px-4 sm:py-8 ">
      <div className="p-4 sm:p-8 sm:rounded-2xl gradientAccent ">
        <div className="lg:p-0 text-center">
          <h2 className="mb-0 text-yellow-200">BİLİNÇ YOLCULUĞU</h2>
          <p className="text-base md:text-2xl font-medium mb-4 text-white-200">
            Eve Dönüş Hikayemizi Birlikte Yazalım ✨
          </p>
          <dl className="flex flex-col gap-2 max-w-2xl mx-auto text-center">
            <dt className="-my-2 font-semibold">Kendi Işığını Keşfet:</dt>
            <dd className="mb-2">Kendini gözlem ve bilinç çalışmaları</dd>
            <dt className="-my-2 font-semibold">Objektif Gerçekliği Gör:</dt>
            <dd className="mb-2">Yeni bilgi ve yol haritası</dd>
            <dt className="-my-2 font-semibold">
              Ortak Deneyim Alanına Katıl:
            </dt>
            <dd className="mb-2">
              Deneyimli yoldaşlarla farkındalık paylaşımı
            </dd>
          </dl>
          <p className="my-4">
            <a
              href="/yol/katilim"
              className="inline-block my-2 px-8 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Yol Arkadaşlığına Katıl
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
