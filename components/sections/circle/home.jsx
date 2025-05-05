"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

import { users, lectures } from "@/content/data/circle/users";
import { setUserCookie, getUserFromCookie } from "@/lib/users";

export default function CircleHome() {
  const searchParams = useSearchParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const username = searchParams.get("username");
    const password = searchParams.get("password");

    let foundUser = null;

    // Query string ile kullanıcıyı bulmaya çalış
    if (username && password) {
      foundUser = users.find(
        (u) => u.username === username && u.password === password
      );
    }

    // Eğer query'de bulunamazsa, cookie'den dene
    if (!foundUser) {
      const cookieUser = getUserFromCookie();
      if (cookieUser) {
        foundUser = users.find(
          (u) =>
            u.username === cookieUser.username &&
            u.password === cookieUser.password
        );
      }
    }

    setUser(foundUser || null);
  }, [searchParams]);

  const dateInfo = useMemo(() => {
    if (!user?.startDate) {
      return { isExpired: true, daysLeft: null };
    }
    if (!user?.isExpire == 0) {
      return { isExpired: false, daysLeft: "Sürekli" };
    }
    const startDate = new Date(user.startDate);
    var expiryDate = new Date(startDate);

    if (user?.period) {
      expiryDate.setDate(expiryDate.getDate() + user.period);
    } else {
      expiryDate.setMonth(expiryDate.getMonth() + 1);
    }
    console.log(expiryDate);

    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return {
      isExpired: today > expiryDate,
      daysLeft: diffDays > 0 ? diffDays + " gün" : 0,
    };
  }, [user]);

  const { isExpired, daysLeft } = dateInfo;

  useEffect(() => {
    if (user && !isExpired) {
      setUserCookie(user);
    }
  }, [user, isExpired]);

  if (!user) {
    return (
      <section>
        <div className="mx-auto py-8 px-4 md:px-8 max-w-xl shadow-xl">
          <h3>Giriş Yapılamadı!</h3>
          <p>
            Eğer çember üyeliğini tamamladıysanız ve giriş yapamıyorsanız,
            whatsapp üzerinden bize ulaşın!
          </p>
        </div>
      </section>
    );
  }

  if (isExpired) {
    return (
      <section>
        <div className="mx-auto py-8 px-4 md:px-8 max-w-xl shadow-xl">
          <h3>Giriş Yapılamadı!</h3>
          <div style={{ marginTop: "10px", color: "red" }}>
            ❗️ Süreniz dolmuştur. Lütfen yöneticinizle iletişime geçin.
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section>
        <div className="mx-auto py-8 px-4 md:px-8 max-w-xl shadow-xl">
          <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow">
            <div className="flex flex-row justify-between">
              <h5 className="font-semibold">{user.name} 👋</h5>
              <p className="text-sm">
                Kalan Süre: <span className="font-bold">{daysLeft}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto py-8 px-4 md:px-8 max-w-xl shadow-xl">
          <h3>Online Çemberimiz</h3>
          <nav>
            <ul className="flex flex-col gap-2">
              {lectures.map((lesson, index) => (
                <li key={index}>
                  <a
                    href={`/${lesson.link}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {lesson.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
