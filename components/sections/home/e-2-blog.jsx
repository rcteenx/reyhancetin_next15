"use client";

import { useEffect, useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Bilinçli Gözlem Pratiği",
    summary:
      "Günlük yaşamda kendini gözlemleyerek farkındalığını artırmanın yolları.",
    date: "03 Kasım 2025",
    link: "/blog/bilincli-gozlem",
  },
  {
    id: 2,
    title: "Anda Kalma Teknikleri",
    summary: "Bedende ve nefeste kalmayı öğrenmek için basit meditasyonlar.",
    date: "28 Ekim 2025",
    link: "/blog/anda-kalma-teknikleri",
  },
  {
    id: 3,
    title: "Saf Farkındalık Deneyimleri",
    summary: "Presence alanında yapılan grup çalışmaları ve deneyim paylaşımı.",
    date: "20 Ekim 2025",
    link: "/blog/saf-farkindalik",
  },
  {
    id: 4,
    title: "Zihnin Otomatik Akışını İzlemek",
    summary: "Meta-bilinç geliştirmek ve otomatik tepkileri fark etmek.",
    date: "15 Ekim 2025",
    link: "/blog/otomatik-aksiyonlar",
  },
];

export default function BlogGrid() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, entry.target.dataset.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".fade-card")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-purple-800">
        Blog ve Paylaşımlar
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            data-id={post.id}
            className={`fade-card bg-white p-6 rounded-2xl shadow-lg border border-purple-200 transition-transform duration-500 transform ${
              visible.includes(post.id.toString())
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            } hover:scale-105`}
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <p className="text-sm text-gray-400 mb-4">{post.date}</p>
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
          Tüm Yazılara Git
        </a>
      </div>
    </section>
  );
}
