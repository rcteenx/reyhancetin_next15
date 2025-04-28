"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useEffect } from "react";

import { users } from "@/content/users";
import { setUserCookie } from "@/lib/users"; // Ortak fonksiyonları import ettik

export default function LoginHome() {
  const searchParams = useSearchParams();

  const user = useMemo(() => {
    const username = searchParams.get("username");
    const password = searchParams.get("password");
    return users.find(
      (u) => u.username === username && u.password === password
    );
  }, [searchParams]);

  if (!user) {
    return (
      <>
        <p>Boş Ekran - Giriş yapılmadı!</p>
        <p>
          Eğer bir sorun olduğunu düşünüyorsanız, lütfen whatsapp üzerinden bize
          yazın!
        </p>
      </>
    );
  }

  const dateInfo = useMemo(() => {
    if (!user.startDate) {
      return { isExpired: false, daysLeft: null };
    }
    const startDate = new Date(user.startDate);
    const expiryDate = new Date(startDate);
    expiryDate.setMonth(expiryDate.getMonth() + 1); // 1 ay ekle

    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // milisaniyeden güne çevir

    return {
      isExpired: today > expiryDate,
      daysLeft: diffDays > 0 ? diffDays : 0,
    };
  }, [user]);

  const { isExpired, daysLeft } = dateInfo;

  // Giriş başarılıysa, user'ı cookie'ye kaydediyoruz
  useEffect(() => {
    if (user && !isExpired) {
      setUserCookie(user);
    }
  }, [user, isExpired]);

  if (isExpired) {
    return (
      <>
        <p>Giriş yapıldı!</p>
        <div style={{ marginTop: "10px", color: "red" }}>
          ❗️ Süreniz dolmuştur. Lütfen yöneticinizle iletişime geçin.
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-lg font-semibold ">Merhaba, {user.name}👋</div>
          <div className="text-sm mt-2 md:mt-0">
            Kalan Süre: <span className="font-bold">{daysLeft} gün</span>
          </div>
        </div>
      </div>

      {/* Dersler Menüsü */}
      <h3>Online Dersleriniz</h3>
      <nav>
        <ul className="flex flex-wrap gap-4">
          {user.courses.map((lesson, index) => (
            <li key={index}>
              <a
                href={`/login/${lesson.link}`}
                className="text-blue-600 hover:underline text-sm"
              >
                {lesson.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
