export default function WhyWeNeed({ need }) {
  return (
    <div id="info" className="mb-4 px-4 pb-4 shadow-xl">
      <div className="container mx-auto p-4 rounded-2xl gradientAccent text-white-400">
        <div className="lg:p-0 text-center">
          <h2 className="text-white">{need.h2}</h2>
          <h4 className="text-white lg:text-2xl">{need.h4}</h4>
          <p>{need.p1}</p>
          <p>{need.p2}</p>
          <p>{need.p3}</p>
        </div>
      </div>
    </div>
  );
}
