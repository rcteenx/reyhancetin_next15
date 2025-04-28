// Cookie'den kullanıcı bilgisini almak için fonksiyon
export function getUserFromCookie() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("user=")) {
      const userData = cookie.substring("user=".length);
      return JSON.parse(decodeURIComponent(userData)); // JSON'dan tekrar objeye çevir
    }
  }
  return null; // Eğer cookie bulunmazsa
}

// Cookie'yi temizleme fonksiyonu
export function clearUserCookie() {
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

// Yeni kullanıcı bilgilerini cookie'ye kaydetme fonksiyonu
export function setUserCookie(user) {
  // Eğer daha önce bir user cookie'si varsa, önce onu sil
  clearUserCookie();

  // Kullanıcı bilgisini JSON formatına çevir
  const userData = JSON.stringify(user);

  // 30 gün geçerlilik süresi
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1);

  // JSON verisini cookie'ye kaydet
  document.cookie = `user=${encodeURIComponent(
    userData
  )}; expires=${expiryDate.toUTCString()}; path=/`;
}
