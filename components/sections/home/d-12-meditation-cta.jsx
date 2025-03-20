export default function MeditationCTA() {
  return (
    <div className="mx-auto max-w-2xl mt-4 md:mt-8 p-4 md:px-12 md:border border-purple-600 md:rounded-2xl shadow-lg text-center text-purple-300 ">
      <h3>Haftalık Zoom Meditasyonları</h3>
      <p>
        Farklı varlık halleri ve ihtiyaçlara uygun rehberli meditasyonlarla,
        bilinçli olarak içsel yolculuğunu derinleştirmen için seni bekliyoruz.
      </p>
      <ul className="my-4 flex flex-wrap items-center justify-center gap-4">
        <li>
          <Link
            href="https://wa.me/905443087402?text=meditasyonlara%20kat%C4%B1lmak%20istiyorum"
            className="relative py-3 px-6 transition-all duration-200 gradientTransition btn-hero bg-[#ab47bc] border-none text-white"
          >
            <span>👉 Katılmak İstiyorum</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/905443087402?text=meditasyonlar%20hakkinda%20bilgi%20alabilir%20miyim"
            className="relative py-3 px-6 transition-all duration-200 gradientTransition btn-hero border border-purple-600"
          >
            <span>🌿 Daha Fazla Bilgi Al</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
