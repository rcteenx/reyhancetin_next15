import { Suspense } from "react";
import CircleLogin from "@/components/sections/circle/home";

export default async function Page() {
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>Bilinçli Farkındalık Çemberi - Üye Girişi</h1>
        </div>
      </section>
      <Suspense fallback={null}>
        <CircleLogin />
      </Suspense>
    </>
  );
}
