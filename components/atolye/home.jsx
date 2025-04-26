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
    return <p>Boş Ekran - Giriş yapılmadı!</p>;
  }
  return <p>Giriş Yapıldı</p>;
}
