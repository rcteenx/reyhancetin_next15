import Link from "next/link";
import PageContent from "@/components/templates/pageContent";

export default async function BlogList({ h2Title, blogs, blogHome = 0 }) {
  return (
    <article>
      <h2>{h2Title}</h2>
      <ol className="px-4 list-decimal text-left">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ol>
      {blogHome == 0 ? (
        <div>
          <p>
            <a href="/blog">👈 Blog Anasayfa - Kaptan'ın Seyir Defteri</a>
          </p>
        </div>
      ) : (
        ""
      )}
    </article>
  );
}
