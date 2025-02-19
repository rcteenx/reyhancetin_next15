export default function PresenceMentor({ content }) {
  return (
    <div id="info" className="mb-4 sm:mx-4 pb-4 shadow-xl">
      <div className="container mx-auto p-4 sm:rounded-2xl gradientInstagram text-gray-100">
        <div className="lg:p-0 text-center">
          <h2 className="">{content.h2}</h2>
          <h4 className="lg:text-2xl">{content.h4}</h4>
          <p>{content.p1}</p>
          <p>{content.p2}</p>
          <p>{content.p3}</p>
        </div>
      </div>
    </div>
  );
}
