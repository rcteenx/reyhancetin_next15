const steps = [
  {
    number: 1,
    title: "Seminer",
    aim: "Ortak Terminolojiye Hakim Olmak",
    description:
      "Çalışamlara temel olacak ezoterik bilgi ve felsefi kavrayışı sunuyorum.",
    color: "bg-fuchsia-500",
  },
  {
    number: 2,
    title: "Atölye",
    aim: "Objektif ve tarafsız gözlem yapmak",
    description:
      "Objektif gözlem pratiğini pratik egzersizlerle uygulamaya geçiriyoruz.",
    color: "bg-yellow-300",
  },
  {
    number: 3,
    title: "Alan Çalışmaları",
    aim: "Bilinci kristalize etmek",
    description:
      "Objektif gözlemlerimizi paylaşıyoruz ve çalışmayla varlığımıza katıyoruz.",
    color: "bg-purple-300",
  },
];

export default function WayServe() {
  return (
    <section className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 md:px-8 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
            VARLIĞIN GELİŞİMİNE HİZMET
          </h2>
          <p className="my-4 text-lg italic font-semibold">
            Kendi varlığının ve başkalarının varlığının gelişimine — en yakın,
            en erişilebilir ve en uygun olan yollarla katkıda bulunmak.
          </p>
          <p>
            İnsanın bilinçli çalışması yalnız kendisi için değildir; daha büyük
            bir düzenin sürdürülmesine ve Mutlak’ın işleyişine katkı sunar. Bu
            platform, kişinin kendini gözlemleyerek, uyanarak ve dönüşerek
            evrene destek olma sürecini — en yakın ve uygulanabilir yollarla
            desteklemek için kuruldu.
          </p>
          <p>
            Seminerler, atölyeler ve grup çalışmalarındaki amaç; kişinin kendi
            varlığını kristalize etmesi — yani değişen dış şartlarda bile bilinç
            bütünlüğünü koruyabilmesi — ve bu kristalizasyonun doğal olarak
            başkalarının varlığına da destek olmasıdır.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
          <a
            href="#calismalar"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-95"
          >
            Çalışmalara Gözat
          </a>
          <a
            href="#acik-kaynaklar"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-5 py-2.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700"
          >
            Açık Kaynaklar
          </a>
        </div>
      </div>
      <div className="container mx-auto bg-white py-16 my-16 rounded-2xl">
        <div className="max-w-3xl mx-auto text-center ">
          <h3>
            Bilinçli Etkiyle Yapılan Çalışmalar<sup>*</sup>
          </h3>
          <p className="italic text-sm">
            <sup>*</sup>Bu çalışmalarda sınırlı ve bilinçli bir enerjiyi (C
            Etkisi) kullanıyoruz; bu etki ancak doğrudan temas ve ortak dikkatle
            aktarılabilir, bu nedenle kopyalanamaz; ancak doğrudan
            deneyimlenebilir. Bilinçli Etkiyle yapılan çalışmalar, daha derin
            bir dikkat yoğunluğunu ve karşılıklı bir varlık alanını gerektirir.
          </p>
        </div>
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${step.color} p-8 rounded-xl shadow-lg hover:shadow-sm transition relative`}
              >
                {/* Küçük numara dairesi */}
                <div className="absolute top-2 left-7 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-gray-800 shadow-md">
                  {step.number}
                </div>

                <h3 className="text-2xl font-semibold text-center">
                  {step.title}
                </h3>
                <p className=" italic text-center">{step.aim}</p>
                <p className="mt-2 text-gray-700 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h3>
          Açık Kaynak Çalışmaları<sup>*</sup>
        </h3>

        <p className="italic text-sm">
          <sup>*</sup>Herkesin erişimine açık, paylaşılabilir içeriklerle
          kolektif farkındalığın gelişimine katkıda bulunmaya çalışıyorum.
        </p>
      </div>

      <div
        id="calismalar"
        className="max-w-6xl mx-auto  mt-12 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow ring-1 ring-slate-100 dark:ring-transparent">
          <div className="relative">
            <svg
              className="w-8 h-8 absolute"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="mt-0 pt-0 text-xl font-semibold">
              Youtube Sohbetleri
            </h3>
          </div>
          <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">
            Bilinç, gözlem ve varlık çalışmaları üzerine açık, samimi ve derin
            sohbetler. Pratik içgörü sunan, ücretsiz ve herkesin katılımına açık
            bir alan.
          </p>
        </article>

        <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow ring-1 ring-slate-100 dark:ring-transparent">
          <div className="relative">
            <svg
              className="w-8 h-8 absolute"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 2v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 11h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 22h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="mt-0 pt-0 text-xl font-semibold">
              Instagram Hikayeleri
            </h3>
          </div>
          <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">
            Günlük farkındalığı destekleyen kısa notlar, gözlem hatırlatmaları
            ve pratik rehberlikler. Anlık temaslarla çalışmayı gündelik hayata
            taşır.
          </p>
        </article>

        <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow ring-1 ring-slate-100 dark:ring-transparent">
          <div className="relative">
            <svg
              className="w-8 h-8 absolute"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-0 pt-0 text-xl font-semibold">E-book ve Blog</h3>
          </div>
          <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">
            Daha derin kavrayış sunan yazılar, pratik rehberler ve kapsamlı
            içerikler. Okuyanın kendi iç çalışmasını desteklemek için pratik
            bilgiler.
          </p>
        </article>
      </div>
    </section>
  );
}
