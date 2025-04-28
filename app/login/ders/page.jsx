import { Suspense } from "react";
import DersHome from "@/components/login/ders";
import Lecture from "@/components/templates/lecture";
import { lecture1 } from "@/content/lecture";

export default async function DersPage() {
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
            {/* <DersHome /> */}
            <Lecture lecture={lecture1[0]} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
