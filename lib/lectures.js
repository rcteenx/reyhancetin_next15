import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import slugify from "slugify";

export async function getAllLectureSlugs() {
  const files = await readdir("./content/lectures");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getLecture(slug) {
  const text = await readFile(`./content/lectures/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, description, tags },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, description, tags, body };
}

export async function getLectures() {
  const slugs = await getAllLectureSlugs();
  const lectures = [];
  for (const slug of slugs) {
    const lecture = await getLecture(slug);
    lectures.push(lecture);
  }
  lectures.sort((a, b) => b.date.localeCompare(a.date));
  return lectures;
}

export async function getLastLectures(num) {
  const lectures = await getLectures();
  return lectures.slice(0, num);
}

export async function getLecturesByTag(tagSlug) {
  const lectures = await getLectures();
  let tempStorage = [];
  lectures.map((lecture) => {
    lecture.tags.map((tag) => {
      if (tagSlug === slugify(tag)) {
        const tagLecture = {
          title: lecture.title,
          description: lecture.description,
          slug: lecture.slug,
        };
        tempStorage.push(tagLecture);
      }
    });
  });
  return tempStorage;
}
