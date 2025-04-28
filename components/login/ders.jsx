"use client";

import { useMemo, useEffect, useState } from "react";
import { getUserFromCookie } from "@/lib/users"; // Ortak fonksiyonları import ettik
import { useRouter } from "next/navigation"; // useRouter'ı 'next/navigation' ile import ettik

import LecturePage from "./lecture";

export default function DersHome() {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Yönlendirme için router'ı burada tanımlıyoruz

  useEffect(() => {
    // Cookie'den kullanıcı bilgilerini alıyoruz
    const loggedInUser = getUserFromCookie();
    console.log(loggedInUser); // Debugging için console.log ekleyelim
    if (loggedInUser) {
      setUser(loggedInUser); // Eğer kullanıcı varsa state'e ekle
    } else {
      // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
      router.push("/login"); // login sayfasına yönlendirme
    }
  }, []);

  const dateInfo = useMemo(() => {
    if (!user) {
      return { daysLeft: null };
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

  if (!user) {
    return <p>Giriş yapılmadı. Lütfen giriş yapın.</p>;
  }

  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div className="text-lg font-semibold ">Merhaba, {user.name}👋</div>
          <div className="text-sm mt-2 md:mt-0">
            Kalan Süre: <span className="font-bold">{daysLeft} gün</span>
          </div>
        </div>
      </div>
      <LecturePage />
    </>
  );
}
