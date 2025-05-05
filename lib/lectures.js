import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

// Dynamic - lectureSlug is the folder Name
export async function getAllLectureSlugs(lecutureSlug) {
  const files = await readdir(`./content/circle/${lecutureSlug}`);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getLecture(lecutureSlug, slug) {
  const text = await readFile(
    `./content/circle/${lecutureSlug}/${slug}.md`,
    "utf8"
  );
  const {
    content,
    data: { title, date, description, tags },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, description, tags, body };
}
