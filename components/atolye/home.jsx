"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { users } from "@/content/users";

const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "1234";

export default function AtolyeHome() {
  const searchParams = useSearchParams();

  const user = useMemo(() => {
    const username = searchParams.get("username");
    const password = searchParams.get("password");
    return users.find(
      (u) => u.username === username && u.password === password
    );
  }, [searchParams]);

  if (!user) {
    return <p>Boş Ekran - Giriş yapılmadı!</p>;
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
      <h3>Merhaba, {user.name}!</h3>
      <div style={{ marginTop: "10px", color: "green" }}>
        ✅ Başarılı giriş yaptınız.
      </div>
      <div style={{ marginTop: "10px" }}>
        📅 Kalan süreniz: <strong>{daysLeft} gün</strong>
      </div>
      {/* Süre azaldıysa özel uyarı */}
      {!isExpired && daysLeft !== null && daysLeft <= 5 && daysLeft > 0 && (
        <div style={{ marginTop: "10px", color: "orange", fontWeight: "bold" }}>
          ⚠️ Dikkat! Süreniz bitmek üzere.
        </div>
      )}
    </>
  );
}
