export default function PresenceMentor({ content }) {
  return (
    <div id="info" className="mb-4 sm:mx-4 pb-4 shadow-xl">
      <div className="container mx-auto p-4 sm:rounded-2x">
        <h3 className="lg:text-xl text-center">{content.h4}</h3>
        <div className="mx-auto lg:p-0 max-w-2xl text-left sm:text-center">
          <h2 className="border-b ">{content.h2}</h2>
          <h4 className="lg:text-xl">{content.px}</h4>
          <p>{content.p1}</p>
          <p>{content.p2}</p>
        </div>
      </div>
    </div>
  );
}
