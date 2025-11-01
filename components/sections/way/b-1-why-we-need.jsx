export default function WhyWeNeed({ need }) {
  return (
    <div id="info" className="mx-auto sm:px-4 sm:py-8 max-w-7xl">
      <div className="container mx-auto p-4 sm:rounded-2xl gradientAccent text-white-400">
        <div className="lg:p-0 text-center">
          <h2 className=" text-yellow-200">{need.h2}</h2>
          <p className="text-base md:text-2xl  font-medium mb-4">{need.h4}</p>
          <p className="mx-auto max-w-2xl text-sm md:text-base  leading-relaxed mb-6">
            {need.p}
          </p>
        </div>
      </div>
    </div>
  );
}
