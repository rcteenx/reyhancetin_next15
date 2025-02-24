import ReyhanCarousel from "@/components/sections/home/b-2-reyhan-carousel";

export default function ReyhanInfo({}) {
  return (
    <div
      id="reyhan-info"
      className="gradientInstagramStory pb-4 shadow-xl border-t-4 border-yellow-600"
    >
      <div className=" mx-auto my-16 sm:p-4 sm:container">
        <h2 className="text-2xl lg:text-4xl text-center text-yellow-500">
          Reyhan Çetin: Kim ya da Ne?
        </h2>
        <div className=" max-w-xl mx-auto p-4 sm:p-4 bgStoryReyhan border-2 border-yellow-500 ">
          <ReyhanCarousel autoplayInterval={600000} />
        </div>
      </div>
    </div>
  );
}
