"use client";

import { useEffect } from "react";
import SectionLabel from "@/components/SectionLabel";

const INSTAGRAM_URL = "https://www.instagram.com/theforge.lippspringe/";

// Behold.so Feed-ID — wird eingetragen sobald Account verbunden ist
// Setup: https://behold.so → Instagram verbinden → Feed erstellen → ID hier eintragen
const BEHOLD_FEED_ID = ""; // z.B. "abc123xyz"

export default function InstagramFeed() {
  useEffect(() => {
    if (!BEHOLD_FEED_ID) return;
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-[#111110] py-24 lg:py-36 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionLabel>Folge uns</SectionLabel>
            <h2
              className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              <span className="text-[#c19255]">@</span>theforge.lippspringe
            </h2>
          </div>
        </div>

        {/* Behold Feed or Placeholder */}
        {BEHOLD_FEED_ID ? (
          <div className="[&_behold-widget_img]:grayscale [&_behold-widget_img]:hover:grayscale-0 [&_behold-widget_img]:transition-all [&_behold-widget_img]:duration-500">
            {/* @ts-expect-error custom element */}
            <behold-widget feed-id={BEHOLD_FEED_ID} />
          </div>
        ) : (
          /* Placeholder — zeigt Kacheln solange BEHOLD_FEED_ID leer ist */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#c19255]/10">
            {Array.from({ length: 4 }, (_, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-[#181816] flex flex-col items-center justify-center gap-3 hover:bg-[#1e1e1c] transition-colors group"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#c19255]/40 group-hover:text-[#c19255] transition-colors"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                <span
                  className="text-[#5a5a55] group-hover:text-[#8a8a82] text-[9px] tracking-[0.18em] uppercase font-medium transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  @theforge.lippspringe
                </span>
              </a>
            ))}
          </div>
        )}

        {/* Follow link */}
        <div className="mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#c19255] text-[11px] tracking-[0.18em] uppercase font-semibold hover:text-[#d4ab74] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Auf Instagram folgen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
