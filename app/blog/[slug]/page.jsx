import slugify from "slugify";
import { getBlog, getAllBlogSlugs } from "@/lib/blogs";

import PageContent from "@/components/templates/pageContent";

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
  };
}

export default async function ExPage({ params }) {
  const serviceParams = await params;
  const { slug } = serviceParams;
  const blog = await getBlog(slug);

  return (
    <>
      <section id="hero">
        <div className="gradientIndigo">
          <h1>{blog.title}</h1>
        </div>
      </section>
      <PageContent h2Title={blog.title}>
        <h4>{blog.description}</h4>
        {/* <p>{blog.date}</p>
        <h4>{blog.description}</h4>
        <div className="border-t pt-2 text-right">
          <h3 className="inline-block">Etiketler</h3>
          <ul className="flex gap-2 border-b justify-end ">
            {blog.tags.map((tag) => (
              <li className=" bg-teal-200 rounded-lg p-1 my-2" key={tag}>
                <a href={`/etiket/${slugify(tag)}`}>{tag}</a>
              </li>
            ))}
          </ul>
        </div> */}
        <article dangerouslySetInnerHTML={{ __html: blog.body }} />
      </PageContent>
    </>
  );
}
