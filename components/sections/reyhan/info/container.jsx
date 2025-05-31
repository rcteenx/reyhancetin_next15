import ReyhanInfoLinks from "@/components/sections/reyhan/info/links";

export default function ReyhanInfoContainer({ ReyhanInfo, id = 1 }) {
  return (
    <>
      <div
        id="reyhan-info"
        className="gradientReyhanKim py-8 shadow-xl border-b-4 border-yellow-600"
      >
        <div className="mx-auto sm:p-4 sm:container">
          <h2 className="text-2xl lg:text-3xl text-center text-yellow-500">
            Reyhan X: Kimdir ya da Nedir?
          </h2>
          <div className="mx-auto sm:max-w-md p-1 sm:p-2 bgStoryReyhan sm:border-2 border-yellow-500 ">
            <div className="relative">
              <div className="carousel overflow-hidden">
                <div className="carousel-inner h-[520px] sm:h-[600px] text-yellow-300 flex transition-transform duration-500 text-center w-full ">
                  <ReyhanInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReyhanInfoLinks id={id} />
      </div>
    </>
  );
}
