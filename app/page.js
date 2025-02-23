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

import Presence from "@/components/sections/home/x-1-presence";
import PresenceMentor from "@/components/sections/home/x-2-presence-mentor";

import Observation from "@/components/sections/home/c-1-observation";

import WeeklyMeetings from "@/components/sections/home/x-1-weekly-meetings";
import AttendenceContitions from "@/components/sections/home/x-2-att-conditions";

import ReyhanCarousel from "@/components/sections/home/b-reyhan-carousel";

import Meditation from "@/components/sections/home/d-1-meditation";

export default function Home() {
  return (
    <>
      <Hero rVideo={rVideo} />
      <InfoBar info={barInfo} />
      <ReyhanCarousel />
      {/* 
      <Presence img={presenceInstagram} content={presence} />
      <PresenceMentor content={presenceMentor} /> */}
      <Observation img={kendiniGozlem} content={selfObservation} />

      <Meditation info={meditationInfo} />
    </>
  );
}
