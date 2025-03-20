import ReyhanCarousel from "@/components/sections/home/b-2-reyhan-carousel";

export default function ReyhanInfo({}) {
  return (
    <div
      id="reyhan-info"
      className="gradientReyhanKim py-8 shadow-xl border-b-4 border-yellow-600"
    >
      <div className=" mx-auto sm:p-4 sm:container">
        <h2 className="text-2xl lg:text-3xl text-center text-yellow-500">
          Reyhan Çetin X: Kim ya da Ne?
        </h2>
        <div className="mx-auto sm:max-w-md p-1 sm:p-2 bgStoryReyhan sm:border-2 border-yellow-500 ">
          <ReyhanCarousel autoplayInterval={10000} />
        </div>
      </div>
    </div>
  );
}
