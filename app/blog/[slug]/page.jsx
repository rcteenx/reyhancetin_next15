import { getLastBlogs, getBlog, getAllBlogSlugs } from "@/lib/blogs";

import AdWorkshop from "@/components/sections/work/adWorkshop";
import BlogList from "@/components/repo/blog/blogs";

// For static export
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const serviceParams = await params;
  const { slug } = serviceParams;
  const blog = await getBlog(slug);
  return {
    title: blog.title,
    description: blog.description + ". " + blog.title,
  };
}

export default async function ExPage({ params }) {
  const serviceParams = await params;
  const { slug } = serviceParams;
  const blog = await getBlog(slug);
  const blogs = await getLastBlogs(10);
  const artiveContent =
    "<p class='blogDate'>" +
    blog.date +
    "</p><h1 class='blogTitle'>" +
    blog.title +
    "</h1><h4 class='blogDesc'>" +
    blog.description +
    "</h4>" +
    blog.body;

  return (
    <>
      <section className="mx-auto my-2 px-4 max-w-xl">
        <div className="">
          {/* <h4 className="text-center">{blog.description}</h4> */}
          {/* <div className="border-t pt-2 text-right">
            <h3 className="inline-block">Etiketler</h3>
            <ul className="flex gap-2 border-b justify-end ">
              {blog.tags.map((tag) => (
                <li className=" bg-teal-200 rounded-lg p-1 my-2" key={tag}>
                  <a href={`/etiket/${slugify(tag)}`}>{tag}</a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </section>
      <article dangerouslySetInnerHTML={{ __html: artiveContent }} />
      <AdWorkshop />
      <BlogList h2Title="İlgili Blog Yazılarım" blogs={blogs} />
    </>
  );
}
