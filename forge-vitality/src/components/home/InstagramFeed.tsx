"use client";

import { useEffect, useState, useRef } from "react";
import SectionLabel from "@/components/SectionLabel";

const INSTAGRAM_URL = "https://www.instagram.com/theforge.lippspringe/";

interface Post {
  id: string;
  thumbnailUrl: string;
  permalink: string;
  isVideo: boolean;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.posts ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  const showPlaceholder = !loading && posts.length === 0;

  return (
    <section className="bg-[#111110] py-24 lg:py-36 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
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

          {/* Scroll arrows */}
          {posts.length > 0 && (
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 border border-[#c19255]/30 text-[#c19255] flex items-center justify-center hover:bg-[#c19255]/10 transition-colors"
                aria-label="Zurück"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 border border-[#c19255]/30 text-[#c19255] flex items-center justify-center hover:bg-[#c19255]/10 transition-colors"
                aria-label="Weiter"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Feed */}
        {loading ? (
          <div className="flex gap-px">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="flex-shrink-0 w-[260px] h-[260px] bg-[#181816] animate-pulse" />
            ))}
          </div>
        ) : showPlaceholder ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#c19255]/10">
            {Array.from({ length: 4 }, (_, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-[#181816] flex flex-col items-center justify-center gap-3 hover:bg-[#1e1e1c] transition-colors group"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#c19255]/40 group-hover:text-[#c19255] transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                <span className="text-[#5a5a55] group-hover:text-[#8a8a82] text-[9px] tracking-[0.18em] uppercase transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  @theforge.lippspringe
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-px overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[260px] h-[260px] relative group overflow-hidden snap-start"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnailUrl}
                  alt="Instagram Post"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0d0d0b]/40 group-hover:bg-transparent transition-colors duration-500" />
                {post.isVideo && (
                  <div className="absolute top-3 right-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" opacity="0.8">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-lg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </div>
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
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
