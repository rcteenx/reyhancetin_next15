export default function WeeklyMeetings({ content }) {
  return (
    <section className="gradientPrimaryToWhite py-4 md:px-4 md:py-16 ">
      <div className="container-p ">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
          {content.h2}
        </h2>
        <p className="my-4 text-center text-sm ">{content.p}</p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full justify-center">
            {content.meetingList.map((m) => (
              <div
                key={m.id}
                className={`p-8 md:w-96 rounded-lg shadow-lg bg-white-400 ${m.bg}`}
              >
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">{m.title}</h3>
                  <h5 className="mt1 text-xs">{m.time}</h5>
                </div>
                <p className="text-xs">{m.fulltitle}</p>
                <ul className="px-4 my-3 text-left list-disc">
                  {m.specs.map((s, index) => (
                    <li key={index} className="text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
