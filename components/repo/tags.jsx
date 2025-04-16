import slugify from "slugify";
import Link from "next/link";

import { getAllTags } from "@/lib/tags";

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div>
      <div>
        <h3 className=" mt-4 font-bold border-b">Çalışma Etiketleri</h3>
        <ul className="flex my-2 gap-2 flex-wrap">
          {tags.map((tag) => (
            <li
              className=" p-2 rounded-lg bg-teal-200 hover:bg-teal-400"
              key={tag}
            >
              <Link href={`/etiket/${slugify(tag)}${process.env.file_ext}`}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
