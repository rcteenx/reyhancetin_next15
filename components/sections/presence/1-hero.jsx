export default function PresenceHero({ img, content }) {
  return (
    <section
      aria-label="Presence Hero"
      className="rounded-b-2xl py-8 px-8 md:pt-32 md:pb-24 bg-gradient-to-b from-[#fdfcf9] to-[#f4f1eb] border border-t-0 border-gray-200/30 shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)]"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight">
          PRESENCE
        </h1>
        <p className="mt-5 text-2xl md:text-3xl font-serif text-center leading-snug">
          Sessiz Tanığın Varlık Alanı
        </p>

        <div className="w-14 h-[2px] bg-gray-500/40 mx-auto my-8"></div>

        <p className="text-lg md:text-xl font-serif italic text-center max-w-2xl mx-auto leading-relaxed">
          bilincin ötesinde bir alan
          <br />
          zaten oradayız
        </p>
      </div>
    </section>
  );
}
