import { StaticPages } from "@/content/data";

export default function Seminer() {
  return (
    <section id="atolye" className="">
      <div className="container mx-auto">
        <div className="gradientAccent p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
          <h3>Temel Kendini-Gözlem Semineri</h3>
          <p className="text-indigo-dark-5">
            Her ay düzenlenen ve 4 hafta süren seminerimiz hakkında bilgi almak
            için
          </p>
          <div className="text-indigo text-base">
            <div className="border p-4 my-4 rounded-md shadow-md bg-white">
              Seminer her hafta 2 saat sürecek. Toplam 4 hafta - 8 saat olacak.
              <ul className="my-4 flex items-center justify-center gap-4  ">
                <li className="px-4 py-2 gradientAccent gradientTransition  rounded-xl cursor-pointer">
                  <a
                    href="https://wa.me/905443087402?text=seminer%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F
"
                  >
                    Whatsapp
                  </a>
                </li>
                <li className="px-4 py-2 border hover:bg-gray-200 rounded-xl cursor-pointer">
                  <a
                    href={
                      "/" +
                      StaticPages[2].link +
                      "/" +
                      StaticPages[2].pages[0].link
                    }
                  >
                    Bilgi
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
