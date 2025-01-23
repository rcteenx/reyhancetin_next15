import { rVideo, safFarkindalik } from "@/public/assets/images";

import { barInfo, selfObservation, gozlemSemineri } from "@/content/data";

import Hero from "@/components/sections/home/1-hero";
import InfoBar from "@/components/sections/home/2-info-bar";

import SelfObservation from "@/components/sections/home/b-1-self-observation";
import WhyWeNeed from "@/components/sections/home/b-1-why-we-need";

export default function Home() {
  return (
    <>
      <Hero rVideo={rVideo} />
      <InfoBar info={barInfo} />
      <SelfObservation img={safFarkindalik} content={selfObservation} />
      <WhyWeNeed need={gozlemSemineri} />
    </>
  );
}
