import CarouselContent from "@/components/ui/carousel_story_reyhan";

export default function ReyhanCarousel({}) {
  return (
    <div
      id="info"
      className="gradientInstagramStory pb-4 shadow-xl border-t-4 border-yellow-600"
    >
      <div className=" mx-auto my-8 sm:my-16 p-8 sm:container">
        <h2 className="text-2xl lg:text-4xl text-center">
          Ben Kimim ya da Ne?
        </h2>
        <div className=" max-w-xl mx-auto p-8 bgStoryReyhan border-2 border-yellow-500 ">
          <CarouselContent autoplayInterval={60000} />
        </div>
      </div>
    </div>
  );
}
