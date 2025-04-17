export default function WhyWeNeed({ need }) {
  return (
    <div id="info" className="mx-auto sm:px-4 sm:py-16 max-w-7xl">
      <div className="container mx-auto p-4 sm:rounded-2xl gradientAccent text-white-400">
        <div className="lg:p-0 text-center">
          <h2 className="text-white">{need.h2}</h2>
          <h4 className="text-white">{need.h4}</h4>
          <p>{need.p}</p>
          <p>{need.p2}</p>
        </div>
      </div>
    </div>
  );
}
