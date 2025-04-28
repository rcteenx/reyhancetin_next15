import { Suspense } from "react";
import AtolyeHome from "@/components/login/home";

export default async function LoginPage() {
  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>Bilinçli Farkındalık Çalışmaları - Online Eğitimler</h1>
        </div>
      </section>
      <section className="">
        <div className="mx-auto py-8 px-4 md:px-8 max-w-xl shadow-xl">
          <Suspense fallback={null}>
            <AtolyeHome />
          </Suspense>
        </div>
      </section>
    </>
  );
}
