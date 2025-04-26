import { Suspense } from "react";
import AtolyeHome from "@/components/atolye/home";

export default async function BlogsPage() {
  return (
    <>
      <Suspense fallback={null}>
        <section className="">
          <div className="">
          <h2>Atölye İçerik</h2>
            <AtolyeHome />
          </div>
        </section>
      </Suspense>
    </>
  );
}
