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
    <div id="info" className="mb-4 sm:mx-4 pb-4 shadow-xl">
      <div className="sm:container mx-auto p-4 sm:rounded-2x">
        <h3 className="lg:text-xl text-center">Reyhan</h3>
        <div className="mx-auto lg:p-0 grid md:grid-cols-2 gap-8 ">
          <div className=" gradientInstagramStory p-4 sm:rounded-xl">
            <CarouselContent
              images={[rcHolgeldiniz, rcKlasikTanitim]}
              items={reyhanBio.items}
              autoplayInterval={12000}
            />
          </div>
          <div>İkinci sütun</div>
        </div>
      </div>
    </div>
  );
}
