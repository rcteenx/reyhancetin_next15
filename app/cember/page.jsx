import { Suspense } from "react";
import CircleHome from "@/components/circle/home";

export default async function Page() {
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>Bilinçli Farkındalık Çemberi - Üye Girişi</h1>
        </div>
      </section>
      <section className="">
        <div className="mx-auto py-8 px-4 md:px-8 max-w-xl shadow-xl">
          <Suspense fallback={null}>
            <CircleHome />
          </Suspense>
        </div>
      </section>
    </>
  );
}
