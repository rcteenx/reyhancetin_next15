export default function WayProcess() {
  return (
    <section className="bg-purple-100 py-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Başlık */}
        <h2 className="text-3xl md:text-5xl font-bold text-purple-900 text-center">
          ÇALIŞMA SÜRECİ
        </h2>
        <p className="my-4 text-xl text-purple-800 text-center italic">
          Yolculukta Seni Hangi Aşamalar Bekliyor?
        </p>

        {/* Alt not */}
        <p className="my-8 text-center ">
          Aşamaların farkında olarak yolculuğundan en yüksek değeri alabilirsin.
        </p>

        <ul className="my-8 space-y-4 list-disc list-inside">
          <li>
            <span className="font-semibold">Temel Seminer (4 hafta)</span>
            <ul className="mt-2 ml-6 list-disc list-inside space-y-1">
              <li>Yolculuğun ilk adımı</li>
              <li>Temel bilgiler verilir</li>
              <li>Bazı çalışmalar önerilir</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">
              Kendini Gözlem Atölyesi (4–8 hafta)
            </span>
            <ul className="mt-2 ml-6 list-disc list-inside space-y-1">
              <li>Kafasına yatan ve isteyenlerle devam edilir</li>
              <li>Pratik odaklı; gözlem yapmayı ve objektif olmayı öğrenme</li>
              <li>Katılımcı kendi ritminde deneyim kazanır</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Grup Çalışmaları</span>
            <ul className="mt-2 ml-6 list-disc list-inside space-y-1">
              <li>Deneyim paylaşımı ve birlikte yol alma</li>
              <li>Motivasyonu canlı tutar</li>
              <li>Birbirimizin farkındalığını derinleştirir</li>
            </ul>
          </li>
        </ul>
        <p className="text-center">
          Her aşama, seni kendine bir adım daha yaklaştıracak.
        </p>
      </div>
    </section>
  );
}
