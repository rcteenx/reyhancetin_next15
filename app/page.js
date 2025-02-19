import {
  rVideo,
  safFarkindalik,
  kendiniGozlem,
  grupCalismasi,
} from "@/public/assets/images";

import {
  barInfo,
  presence,
  presenceMentor,
  selfObservation,
  weeklyMeetings,
  conditions,
} from "@/content/data";

import Hero from "@/components/sections/home/1-hero";
import InfoBar from "@/components/sections/home/2-info-bar";

import Presence from "@/components/sections/home/b-1-presence";
import PresenceMentor from "@/components/sections/home/b-2-presence-mentor";

import SelfObservation from "@/components/sections/home/c-1-self-observation";
import Seminer from "@/components/sections/home/c-2-seminer";

import WeeklyMeetings from "@/components/sections/home/x-1-weekly-meetings";
import AttendenceContitions from "@/components/sections/home/x-2-att-conditions";

export default function Home() {
  return (
    <>
      <Hero rVideo={rVideo} />
      <InfoBar info={barInfo} />

      <Presence img={safFarkindalik} content={presence} />
      <PresenceMentor content={presenceMentor} />

      <SelfObservation img={kendiniGozlem} content={selfObservation} />
      <Seminer />
    </>
  );
}
