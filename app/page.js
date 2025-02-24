import {
  rVideo,
  presenceInstagram,
  kendiniGozlem,
  grupCalismasi,
} from "@/public/assets/images";

import {
  barInfo,
  presence,
  presenceMentor,
  selfObservation,
  meditationInfo,
  weeklyMeetings,
  conditions,
} from "@/content/data";

import Hero from "@/components/sections/home/1-hero";
import InfoBar from "@/components/sections/home/2-info-bar";

import ReyhanCarousel from "@/components/sections/home/b-1-reyhan-info";

import Observation from "@/components/sections/home/c-1-observation";

import Meditation from "@/components/sections/home/d-1-meditation";

export default function Home() {
  return (
    <>
      <Hero rVideo={rVideo} />
      <InfoBar info={barInfo} />

      <ReyhanCarousel />

      <Observation img={kendiniGozlem} content={selfObservation} />

      <Meditation info={meditationInfo} />
    </>
  );
}
