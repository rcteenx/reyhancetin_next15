import { rVideo, kendiniGozlem } from "@/public/assets/images";

import smd from "@/content/data/siteMetaData";
import { barInfo, selfObservation, meditationInfo } from "@/content/data";

import Hero from "@/components/sections/home/1-hero";

import WorkProcess from "@/components/sections/home/2-work-process";

import InfoBar from "@/components/sections/home/3-info-bar";

import ReyhanCarousel from "@/components/sections/home/b-1-reyhan-info";

import Observation from "@/components/sections/home/c-1-observation";

import Meditation from "@/components/sections/home/d-1-meditation";
import BlogSection from "@/components/sections/home/e-2-blog";
import YoutubeGrid from "@/components/sections/home/e-1-youtube";

export const metadata = {
  title: `Anasayfa | ${smd.title}`,
};

export default function Page() {
  return (
    <>
      <Hero rVideo={rVideo} />
      <WorkProcess />
      <InfoBar info={barInfo} />

      <ReyhanCarousel />

      <Observation img={kendiniGozlem} content={selfObservation} />

      <Meditation info={meditationInfo} />
      <YoutubeGrid />
      <BlogSection />
    </>
  );
}
