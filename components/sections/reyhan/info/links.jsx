import Link from "next/link";

import { contReyhan } from "@/content/data/hero";

export default function ReyhanInfoLinks({ id }) {
  return (
    <div className="mx-auto max-w-3xl text-center ">
      <div className="mx-8 my-8 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {contReyhan.buttons.map((b, index) => (
          <div
            key={b.id}
            className={`grid-cols-1 ${id == b.id ? "hidden" : ""}`}
          >
            <Link
              href={b.link}
              title={`${b.title} Linki`}
              className={` relative transition-all duration-200 gradientTransition btn-hero px-6 py-3 border `}
              role="button"
            >
              <span className="">{b.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
