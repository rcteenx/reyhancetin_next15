import { presenceInstagram } from "@/public/assets/images";
import { contPresence, presenceMentor } from "@/content/data";

import PresenceHero from "@/components/sections/presence/1-hero";
import Presence from "@/components/sections/presence/b-1-presence";
import PresenceMentor from "@/components/sections/presence/b-2-presence-mentor";

export default function Page() {
  return (
    <>
      <PresenceHero />
      <Presence img={presenceInstagram} content={contPresence} />
      <PresenceMentor content={presenceMentor} />
    </>
  );
}
