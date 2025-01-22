import { rVideo } from "@/public/assets/images";

import { barInfo } from "@/content/data";

import Hero from "@/components/sections/home/1-hero";
import InfoBar from "@/components/sections/home/2-info-bar";

export default function Home() {
  return (
    <>
      <Hero rVideo={rVideo} />
      <InfoBar info={barInfo} />
    </>
  );
}
