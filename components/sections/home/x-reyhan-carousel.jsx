import {
  rcHolgeldiniz,
  rcKlasikTanitim,
  rcKapak,
} from "@/public/assets/images/reyhan";

import { reyhanBio } from "@/content/data";

import Carousel from "@/components/ui/carousel";
import CarouselContent from "@/components/ui/carousel_content";

export default function ReyhanCarousel({}) {
  return (
    <div
      id="info"
      className="gradientInstagramStory pb-4  shadow-xl border-t-4 border-yellow-600"
    >
      <div className="sm:container mx-auto p-4 sm:rounded-2x">
        <h2 className="text-2xl lg:text-4xl text-center">
          Ben Kimim ya da Ne?
        </h2>
        <div className=" max-w-xl mx-auto bgStoryReyhan border border-yellow-500 p-2">
          <CarouselContent
            images={[rcHolgeldiniz, rcKlasikTanitim]}
            items={reyhanBio.items}
            autoplayInterval={12000}
          />
        </div>
      </div>
    </div>
  );
}
