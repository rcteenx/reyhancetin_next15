"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { users } from "@/content/users";

const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "1234";

export default function AtolyeHome() {
  const searchParams = useSearchParams();

  const isAuthenticated = useMemo(() => {
    const username = searchParams.get("username");
    const password = searchParams.get("password");

    return users.some(
      (user) => user.username === username && user.password === password
    );
  }, [searchParams]);

  if (!isAuthenticated) {
    return (
      <section className="">
        {" "}
        1
        <div className="">
          <h2>Atölye İçerik</h2>
          <p>Boş Ekran</p>
        </div>
      </section>
    );
  }
  return (
    <section className="">
      <div className="">
        <h2>Atölye İçerik</h2>
        <p>Giriş Yapıldı</p>
      </div>
    </section>
  );
}
