"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export type ConsentState = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "cookie-consent";

function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event("consent-updated"));
}

export function useConsent(): ConsentState | null {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    setConsent(getConsent());
    const handler = () => setConsent(getConsent());
    window.addEventListener("consent-updated", handler);
    return () => window.removeEventListener("consent-updated", handler);
  }, []);

  return consent;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({ essential: true, analytics: true, marketing: true });
    setVisible(false);
  }, []);

  const declineAll = useCallback(() => {
    saveConsent({ essential: true, analytics: false, marketing: false });
    setVisible(false);
  }, []);

  const saveSelection = useCallback(() => {
    saveConsent({ essential: true, analytics, marketing });
    setVisible(false);
  }, [analytics, marketing]);

  if (!visible) return null;

  const labelClass = "text-[#f8f7f2] text-[11px] font-medium uppercase tracking-[0.12em]";
  const descClass = "text-[#8a8a82] text-[10px] font-light leading-relaxed mt-0.5";
  const fontInter = { fontFamily: "'Inter', sans-serif" } as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#181816] border-t border-[#c19255]/20 px-6 py-6 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <p
          className="text-[#b8b8b0] text-[12px] leading-relaxed font-light mb-5"
          style={fontInter}
        >
          Wir nutzen Cookies, um unsere Website zu verbessern und Werbung zu personalisieren.
          Du kannst selbst entscheiden, welche Kategorien du zulassen möchtest. Details findest du in unserer{" "}
          <Link href="/datenschutz" className="text-[#c19255] hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>

        {showDetails && (
          <div className="mb-5 flex flex-col gap-3">
            {/* Essential — always on */}
            <div className="flex items-start gap-3 p-3 border border-[#c19255]/10 bg-[#111110]">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-0.5 accent-[#c19255]"
              />
              <div>
                <p className={labelClass} style={fontInter}>Notwendig</p>
                <p className={descClass} style={fontInter}>
                  Erforderlich für die Grundfunktionen der Website. Immer aktiv.
                </p>
              </div>
            </div>

            {/* Analytics */}
            <label className="flex items-start gap-3 p-3 border border-[#c19255]/10 bg-[#111110] cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 accent-[#c19255] cursor-pointer"
              />
              <div>
                <p className={labelClass} style={fontInter}>Statistik</p>
                <p className={descClass} style={fontInter}>
                  Google Analytics — hilft uns zu verstehen, wie die Website genutzt wird.
                </p>
              </div>
            </label>

            {/* Marketing */}
            <label className="flex items-start gap-3 p-3 border border-[#c19255]/10 bg-[#111110] cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 accent-[#c19255] cursor-pointer"
              />
              <div>
                <p className={labelClass} style={fontInter}>Marketing</p>
                <p className={descClass} style={fontInter}>
                  Meta Pixel &amp; Google Tag Manager — für personalisierte Werbung und Conversion-Tracking.
                </p>
              </div>
            </label>
          </div>
        )}

        <div className="flex flex-wrap gap-3 items-center">
          <button
            onClick={declineAll}
            className="text-[#8a8a82] text-[10px] tracking-[0.16em] uppercase font-medium px-5 py-2.5 border border-[#8a8a82]/20 hover:border-[#8a8a82]/40 transition-colors cursor-pointer"
            style={fontInter}
          >
            Alle ablehnen
          </button>
          {showDetails ? (
            <button
              onClick={saveSelection}
              className="text-[#f8f7f2] text-[10px] tracking-[0.16em] uppercase font-medium px-5 py-2.5 border border-[#c19255]/40 hover:border-[#c19255] transition-colors cursor-pointer"
              style={fontInter}
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="text-[#f8f7f2] text-[10px] tracking-[0.16em] uppercase font-medium px-5 py-2.5 border border-[#c19255]/40 hover:border-[#c19255] transition-colors cursor-pointer"
              style={fontInter}
            >
              Einstellungen
            </button>
          )}
          <button
            onClick={acceptAll}
            className="bg-[#c19255] text-[#0d0d0b] text-[10px] tracking-[0.16em] uppercase font-semibold px-5 py-2.5 hover:bg-[#d4ab74] transition-colors cursor-pointer"
            style={fontInter}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
