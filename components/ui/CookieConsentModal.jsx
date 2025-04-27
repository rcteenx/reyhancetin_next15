"use client";

import { useState, useEffect } from "react";

export default function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [marketingAllowed, setMarketingAllowed] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      "cookie_consent",
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    sendConsentEvent({ analytics: true, marketing: true });
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem(
      "cookie_consent",
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    );
    sendConsentEvent({ analytics: false, marketing: false });
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem(
      "cookie_consent",
      JSON.stringify({
        necessary: true,
        analytics: analyticsAllowed,
        marketing: marketingAllowed,
      })
    );
    sendConsentEvent({
      analytics: analyticsAllowed,
      marketing: marketingAllowed,
    });
    setIsVisible(false);
  };

  const sendConsentEvent = ({ analytics, marketing }) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookie_consent_updated",
        consent: {
          analytics_storage: analytics ? "granted" : "denied",
          ad_storage: marketing ? "granted" : "denied",
        },
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transition-all">
        {!showSettings ? (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Çerezleri Kullanıyoruz
            </h2>
            <p className="mb-6 text-gray-600 text-sm">
              Web sitemizi daha iyi hale getirmek için çerez kullanıyoruz.
              İstersen çerez tercihlerini değiştirebilirsin.
            </p>
            <div className="flex flex-col space-y-2">
              <button
                onClick={acceptAll}
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Tümünü Kabul Et
              </button>
              <button
                onClick={acceptNecessary}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 rounded"
              >
                Sadece Gerekli Olanları Kabul Et
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="text-blue-600 hover:underline text-sm mt-2"
              >
                Çerez Ayarlarını Değiştir
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Çerez Ayarları</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between items-center">
                <span>Gerekli Çerezler</span>
                <span className="text-green-600 font-semibold">Zorunlu</span>
              </div>
              <div className="flex justify-between items-center">
                <span>İstatistik (Analytics)</span>
                <input
                  type="checkbox"
                  checked={analyticsAllowed}
                  onChange={() => setAnalyticsAllowed(!analyticsAllowed)}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Pazarlama (Marketing)</span>
                <input
                  type="checkbox"
                  checked={marketingAllowed}
                  onChange={() => setMarketingAllowed(!marketingAllowed)}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-6">
              <button
                onClick={savePreferences}
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Tercihleri Kaydet
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:underline text-sm"
              >
                Geri Dön
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
