export default function InfoBar({ info }) {
  return (
    <section className="gradientIndigo py-8 lg:py-16 text-white-400">
      <div className="container mx-auto text-center">
        <h2 className="my-0 py-1 md:py-2 lg:py-4 text-base sm:text-3xl lg:text-5xl border-b inline-block">
          {info.h2}
        </h2>
        <p className="my-1 px-8 text-indigo-light-5 text-sm sm:text-3xl lg:text-5xl">
          {info.desc}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:divide-x divide-indigo-dark-3 lg:[&>*]:pl-14 mt-4 lg:mt-8 md:text-left bg-indigo-dark-1 mx-4 p-4 rounded-xl">
          {info.items.map((i, index) => (
            <div key={index} className="text-center lg:text-left ">
              <div className="text-lg lg:text-2xl text-indigo-light-3 ">
                {i.title}
              </div>
              <div className="text-xl lg:text-5xl font-extrabold">
                {i.info} +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
