import Link from "next/link";

export default function ObservationCTA() {
  return (
    <div className="mx-auto max-w-2xl mt-8 md:mt-16 p-4 md:px-12 md:border md:rounded-2xl shadow-lg text-center ">
      <h3>Kendini-Gözlem Semineri</h3>
      <p>💫 Kendini gözlemlemeye başlamaya hazır mısın?</p>

      <ul>
        <li>Çalışmaları Tanıma ve Başlangıç</li>
        <li>Haftada 2 saat, toplam 4 hafta</li>
      </ul>
      <ul className="my-4 flex flex-wrap items-center justify-center gap-4">
        <li>
          <Link
            href="https://wa.me/905443087402?text=Kendini-G%C3%B6zlem%20seminerine%20kat%C4%B1lmak%20istiyorum"
            className="relative py-3 px-6 transition-all duration-200 gradientTransition btn-hero gradientWhatsapp"
          >
            <span>👉 Katılmak İstiyorum</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/905443087402?text=Kendini-G%C3%B6zlem%20semineri%20hakkinda%20bilgi%20alabilir%20miyim"
            className="relative py-3 px-6 transition-all duration-200 gradientTransition btn-hero border"
          >
            <span>🌿 Bilgi Al</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
