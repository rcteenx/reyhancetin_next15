import Link from "next/link";

import { getLastBlogs } from "@/lib/blogs";

export default async function BlogGridX() {
  const blogPosts = await getLastBlogs(3);

  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-purple-800">
          Blog ve Paylaşımlar
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              style={{ animationDelay: `${index * 0.15}s` }}
              className={`opacity-0 animate-fadeUp bg-white p-6 rounded-2xl shadow-lg border border-purple-200`}
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.description}</p>

              <a
                href={post.link}
                className="inline-block text-white bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Devamını Oku
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
          >
            Kaptan'ın Seyir Defteri'ne Git
          </a>
        </div>
      </div>
    </section>
  );
}
