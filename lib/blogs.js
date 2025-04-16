import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import slugify from "slugify";

export async function getAllBlogSlugs() {
  const files = await readdir("./content/blogs");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getBlog(slug) {
  const text = await readFile(`./content/blogs/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, description, tags },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, description, tags, body };
}

export async function getBlogs() {
  const slugs = await getAllBlogSlugs();
  const blogs = [];
  for (const slug of slugs) {
    const blog = await getBlog(slug);
    blogs.push(blog);
  }
  blogs.sort((a, b) => b.date.localeCompare(a.date));
  return blogs;
}

export async function getLastBlogs(num) {
  const blogs = await getBlogs();
  return blogs.slice(0, num);
}

export async function getBlogsByTag(tagSlug) {
  const blogs = await getBlogs();
  let tempStorage = [];
  blogs.map((blog) => {
    blog.tags.map((tag) => {
      if (tagSlug === slugify(tag)) {
        const tagBlog = {
          title: blog.title,
          description: blog.description,
          slug: blog.slug,
        };
        tempStorage.push(tagBlog);
      }
    });
  });
  return tempStorage;
}
