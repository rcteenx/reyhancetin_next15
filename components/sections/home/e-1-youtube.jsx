const youtubeVideos = [
  {
    id: "eDZ9rOXxspc",
    title: "1-Bilinçli Farkındalığa Nasıl Ulaşılır?",
    date: "16 Ocak 2025",
    link: "https://www.youtube.com/watch?v=eDZ9rOXxspc&list=PLt-ePdgjqE-hOV9ycE0wQq9vl7cHG-Mvl&index=1",
  },
  {
    id: "rAYZ5XgnSH8",
    title: "2-Hayatı, İçeriden Dışarı mı Yoksa Dışarıdan İçeri mi Yaşıyoruz?",
    date: "8 Mart 2025",
    link: "https://www.youtube.com/watch?v=rAYZ5XgnSH8&list=PLt-ePdgjqE-hOV9ycE0wQq9vl7cHG-Mvl&index=2",
  },
  {
    id: "yGEfaNbfs6I",
    title: "3-Bilinç-Farkındalık ve 'Ben' Nasıl Doğru Algılanır?",
    date: "12 Nisan 2025",
    link: "https://www.youtube.com/watch?v=yGEfaNbfs6I&list=PLt-ePdgjqE-hOV9ycE0wQq9vl7cHG-Mvl&index=3",
  },
  {
    id: "TdtlDSiL6mk",
    title: "4-En Yüksek Zeka, Yargısız Gözleme Yetisidir",
    date: "10 Mayıs 2025",
    link: "https://www.youtube.com/watch?v=TdtlDSiL6mk&list=PLt-ePdgjqE-hOV9ycE0wQq9vl7cHG-Mvl&index=4",
  },
  {
    id: "Z6bSKiNFvvA",
    title: "5-İnsan Makinedir. Ancak Bunu Kabul Ettiğinde Değişebilir",
    date: "7 Haziran 2025",
    link: "https://www.youtube.com/watch?v=Z6bSKiNFvvA&list=PLt-ePdgjqE-hOV9ycE0wQq9vl7cHG-Mvl&index=5",
  },
  {
    id: "RsbOYkOD_64",
    title: "6-İnsan Makinedir. Ancak Bunu Kabul Ettiğinde Değişebilir",
    date: "5 Temmuz 2025",
    link: "https://www.youtube.com/watch?v=RsbOYkOD_64&list=PLWBceeMTxirYSgVHV2eDajHNKi88hU5b4&index=8",
  },
  {
    id: "LAICAmjq7mU",
    title: "7-Her Şeyin Doğması İçin Üç Ayrı Kuvvet Gerekir",
    date: "18 Temmuz 2025",
    link: "https://www.youtube.com/watch?v=LAICAmjq7mU&list=PLWBceeMTxirYSgVHV2eDajHNKi88hU5b4&index=9",
  },
  {
    id: "M-Zx9jqLTLg",
    title: "8-Ruhsal Uyanışta Varlık Katları - Merkezler",
    date: "25 Temmuz 2025",
    link: "https://www.youtube.com/watch?v=M-Zx9jqLTLg&list=PLWBceeMTxirYSgVHV2eDajHNKi88hU5b4&index=11",
  },
  {
    id: "M-JZtPe40AIBQ",
    title: "9-Bilinçli Bencillik Nedir?",
    date: "8 Ağustos 2025",
    link: "https://www.youtube.com/watch?v=JZtPe40AIBQ&list=PLWBceeMTxirYSgVHV2eDajHNKi88hU5b4&index=12",
  },
  {
    id: "M-SGbR-DRPGDw",
    title: "10-Ruhsal Uyanış Önce Özgür Olmadığımızın Kabulüyle Başlar",
    date: "1 Eylül 2025",
    link: "https://www.youtube.com/watch?v=SGbR-DRPGDw&list=PLWBceeMTxirYSgVHV2eDajHNKi88hU5b4&index=13",
  },
  {
    id: "XLe987zPH5w",
    title: "11-Hakikati Bilmek İstiyorsan, Önce Kendi Yalanlarını Gör",
    date: "19 Eylül 2025",
    link: "https://www.youtube.com/watch?v=XLe987zPH5w&list=PLWBceeMTxirYSgVHV2eDajHNKi88hU5b4&index=14",
  },
  {
    id: "GbnbZoPE6Go",
    title: "12-Kendini Gözlemlemeyen Bir İnsan, Gerçekte Var Değildir",
    date: "9 Ekim 2025",
    link: "https://www.youtube.com/watch?v=GbnbZoPE6Go&list=PLWBceeMTxirYSgVHV2eDajHNKi88hU5b4&index=15",
  },
  {
    id: "Hf7Yf4QwXW0",
    title: "13-Gerçek Duyguları Gizlemek Akışta Kalmak mıdır?",
    date: "17 Ekim 2025",
    link: "https://www.youtube.com/watch?v=Hf7Yf4QwXW0&list=PLqISVgbMiJNG-7iBcI5IcT9D28xhLPtrh",
  },
  {
    id: "0n4HI56vg7E",
    title: "14-İlişkiler, Benliği Arıtma ve Olgunlaşma İçin Anahtardır",
    date: "31 Ekim 2025",
    link: "https://www.youtube.com/watch?v=0n4HI56vg7E&list=PLqISVgbMiJNG-7iBcI5IcT9D28xhLPtrh&index=2",
  },
];

export default function YoutubeGrid() {
  const featuredVideos = youtubeVideos.slice(0, 3); // İlk 3
  const listVideos = youtubeVideos.slice(3, youtubeVideos.length - 4); // Ortadaki liste
  const thumbnailVideos = youtubeVideos.slice(-4); // Son 6 video
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-8 md:py-16 px-6 md:px-20 mx-auto">
      <h2 className="mx-auto text-3xl sm:text-5xl lg:text-6xl text-center">
        YOUTUBE SOHBETLERİ
      </h2>

      {/* İlk 3 büyük video */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:my-16">
        {featuredVideos.map((video) => (
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
            <h3 className="text-xl md:text-2xl font-semibold text-purple-700 mb-2">
              {video.title}
            </h3>
            <p className="text-sm text-gray-400">{video.date}</p>
          </a>
        ))}
      </div>

      {/* Ortadaki liste */}
      <div className="flex justify-center my-8 sm:my-16">
        <ul className="space-y-3 max-w-xl w-full text-center">
          {listVideos.map((video) => (
            <li key={video.id}>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:underline"
              >
                {video.title}{" "}
                <span className="text-gray-400 text-sm">({video.date})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* En alttaki thumbnail grid */}
      <div className="flex justify-center">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl">
          {thumbnailVideos.map((video) => (
            <li
              key={video.id}
              className="flex items-center bg-white p-2 rounded-xl shadow-sm border border-purple-200 hover:shadow-md transition-shadow"
            >
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-64 h-auto rounded-lg object-cover hover:scale-105 transition-transform"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
