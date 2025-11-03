"use client";

const youtubeVideos = [
  {
    id: "eDZ9rOXxspc",
    title: "Sohbet 1: Bilinç ve Farkındalık",
    date: "01 Kasım 2025",
    link: "https://www.youtube.com/watch?v=eDZ9rOXxspc",
  },
  {
    id: "rAYZ5XgnSH8",
    title: "Sohbet 2: Presence ve Gözlem",
    date: "10 Kasım 2025",
    link: "https://www.youtube.com/watch?v=rAYZ5XgnSH8",
  },
  {
    id: "yGEfaNbfs6I",
    title: "Sohbet 3: Bilinç Yolculuğu",
    date: "20 Kasım 2025",
    link: "https://www.youtube.com/watch?v=yGEfaNbfs6I",
  },
];

export default function YoutubeGrid() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-purple-800">
        YouTube Sohbetleri
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {youtubeVideos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-card bg-white p-4 rounded-2xl shadow-lg border border-purple-200 transition-transform duration-500 transform hover:scale-105"
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="rounded-xl mb-4 w-full aspect-video object-cover"
            />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              {video.title}
            </h3>
            <p className="text-sm text-gray-400">{video.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
