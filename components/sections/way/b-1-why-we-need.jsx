export default function WhyWeNeed({ need }) {
  return (
    <div id="info" className="mt-16 lg:mt-24 px-4 pb-8 shadow-lg">
      <div className="container mx-auto p-4 rounded-2xl gradientAccent text-white-400">
        <div className="lg:p-0 text-left xl:text-center">
          <h2 className="text-white">{need.h2}</h2>
          <h4 className="text-white">{need.h4}</h4>
          <p>{need.p}</p>
          <p>{need.p2}</p>
        </div>
      </div>
    </div>
  );
}
