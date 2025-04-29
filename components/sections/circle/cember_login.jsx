"use client";

import { useMemo, useEffect, useState } from "react";
import { getUserFromCookie } from "@/lib/users";
import { useRouter } from "next/navigation";

export default function CemberLogin() {
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
      router.push("/cember"); // login sayfasına yönlendirme
    }
  }, []);

  const daysLeft = useMemo(() => {
    if (!user) {
      return null;
    }
    const startDate = new Date(user.startDate);
    const expiryDate = new Date(startDate);
    expiryDate.setMonth(expiryDate.getMonth() + 1); // 1 ay ekle

    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // milisaniyeden güne çevir

    return diffDays > 0 ? diffDays : 0;
  }, [user]);

  // Push olduğu için buraya düşmeyiz!
  if (!user) {
    return <p>Giriş yapılmadı. Lütfen giriş yapın.</p>;
  }

  return (
    <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow">
      <div className="flex flex-row justify-between">
        <h5 className="font-semibold ">{user.name} 👋</h5>
        <p className="text-sm">
          Kalan Süre: <span className="font-bold">{daysLeft} gün</span>
        </p>
      </div>
      <p>
        <a href="/cember">Çember Ana sayfa</a>
      </p>
    </div>
  );
}
