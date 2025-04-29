import { Suspense } from "react";

import {
  getLastLectures,
  getLecture,
  getAllLectureSlugs,
} from "@/lib/lectures";

import CemberLogin from "@/components/sections/circle/cember_login";

// For static export
export async function generateStaticParams() {
  const slugs = await getAllLectureSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const serviceParams = await params;
  const { slug } = serviceParams;
  const lecture = await getLecture(slug);
  return {
    title: lecture.title,
    description: lecture.description + ". " + lecture.title,
  };
}

export default async function ExPage({ params }) {
  const serviceParams = await params;
  const { slug } = serviceParams;
  const lecture = await getLecture(slug);
  const lectures = await getLastLectures(10);
  const artiveContent =
    "<p class='date'>" +
    lecture.date +
    "</p><h2>" +
    lecture.title +
    "</h2><h4 class='desc'>" +
    lecture.description +
    "</h4>" +
    lecture.body;

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
      <br />
      <section className="mx-auto my-2 px-4 max-w-xl">
        <div className=""></div>
      </section>
      <article dangerouslySetInnerHTML={{ __html: artiveContent }} />
    </>
  );
}
