import IconComponent from "@/components/ui/IconComponent";

export default function Seminer() {
  return (
    <section id="atolye" className="">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl p-12 m-4 md:border rounded-2xl shadow-lg text-center text-black">
          <h3>Kendini-Gözlem Semineri</h3>
          <p className="">Her ay açılan aşlangıç seminerimiz</p>
          <div className="text-base">
            <div className="border p-4 my-4 rounded-md shadow-md bg-white">
              Haftada 2 saat, 4 hafta
              <ul className="my-4 flex items-center justify-center gap-4">
                <li>
                  <a
                    href="https://wa.me/905443087402?text=Kendini-G%C3%B6zlem%20seminerine%20kat%C4%B1lmak%20istiyorum"
                    className="relative transition-all duration-200 gradientTransition btn-hero gradientWhatsapp"
                  >
                    <IconComponent name="whatsapp" size={24} color="white" />
                    <span>Katılmak İstiyorum</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/905443087402?text=Kendini-G%C3%B6zlem%20semineri%20hakkinda%20bilgi%20alabilir%20miyim"
                    className="relative transition-all duration-200 gradientTransition btn-hero border"
                  >
                    <span>Bilgi Al</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
