import { Suspense } from "react";
import CemberLogin from "@/components/sections/circle/cember_login";
import CircleIntro from "@/components/sections/circle/intro";

export default async function Page() {
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>Bilinçli Farkındalık Çalışmaları - Giriş Atölyesi</h1>
        </div>
      </section>
      <section className="">
        <div className="mx-auto py-8 px-4 md:px-8 max-w-xl shadow-xl">
          <Suspense fallback={null}>
            <CemberLogin />
          </Suspense>
        </div>
      </section>
      <section className="">
        <div className="mx-auto py-8 px-4 md:px-8 max-w-2xl shadow-xl">
          <Suspense fallback={null}>
            <CircleIntro />
          </Suspense>
        </div>
      </section>
    </>
  );
}
