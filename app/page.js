import {
  rVideo,
  safFarkindalik,
  kendiniGozlem,
  grupCalismasi,
} from "@/public/assets/images";

import {
  barInfo,
  backToSource,
  whyWork,
  selfObservation,
  weeklyMeetings,
  conditions,
} from "@/content/data";

import Hero from "@/components/sections/home/1-hero";
import InfoBar from "@/components/sections/home/2-info-bar";

import BackToSource from "@/components/sections/home/b-1-back-to-source";
import WhyWeNeed from "@/components/sections/home/b-1-why-we-need";

import SelfObservation from "@/components/sections/home/c-1-self-observation";
import Seminer from "@/components/sections/home/c-2-seminer";

import WeeklyMeetings from "@/components/sections/home/x-1-weekly-meetings";
import AttendenceContitions from "@/components/sections/home/x-2-att-conditions";

export default function Home() {
  return (
    <>
      <Hero rVideo={rVideo} />
      <InfoBar info={barInfo} />

      <BackToSource img={safFarkindalik} content={backToSource} />
      <WhyWeNeed need={whyWork} />

      <SelfObservation img={kendiniGozlem} content={selfObservation} />
      <Seminer />

      <WeeklyMeetings content={weeklyMeetings} />
      <AttendenceContitions img={grupCalismasi} con={conditions} />
    </>
  );
}
