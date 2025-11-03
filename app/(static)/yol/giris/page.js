import { heroWayContract as hero } from "@/content/data/hero";

import ModalWayPath from "@/components/ui/modal/way-path";

export const metadata = {
  title: hero.h1,
};

export default function Page() {
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>{hero.h1}</h1>
        </div>
        <p id="h1p">{hero.p}</p>
        <ModalWayPath currentStep={1} />
      </section>

      <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Bu Yola Girmeden Önce
          </h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            İçsel çalışmaya katılmak bir bilgi edinme sürecinden öte, kendi
            varlığınla doğrudan karşılaşmayı gerektirir. Bu sayfa sana
            çalışmanın niteliğini, alanın sınırlarını ve niyetimizi açıklar.
          </p>

          <div className="prose text-gray-700 mb-6">
            <p>
              <strong>Neden bu hazırlık?</strong> Çünkü güvenli ve saygılı bir
              alan oluşturmak, herkesin yararınadır. Sözleşme maddeleri sert
              görünse de amaç alanın niteliğini korumaktır.
            </p>

            <p>
              <strong>Ne olacak?</strong> Sonraki sayfada sözleşmeyi detaylıca
              okuyacak ve her bölümü onaylayacaksınız. Tüm onaylar tamamlanınca
              başvuru formuna geçilecektir.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition">
              Devam Et — Sözleşmeye Geç
            </button>

            <button className="px-6 py-3 border border-purple-200 rounded-lg text-purple-700 bg-white hover:bg-purple-50 transition">
              Geri
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
