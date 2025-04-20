import Link from "next/link";
import PageContent from "@/components/templates/pageContent";

export default async function BlogList({ h2Title, blogs }) {
  return (
    <PageContent h2Title={h2Title}>
      <ol className="px-4 list-decimal text-left">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ol>
      <div>
        <p>
          <a href="/blog">👈 DÖN: Blog Anasayfa - Kaptan'ın Seyir Defteri</a>
        </p>
      </div>
    </PageContent>
  );
}
