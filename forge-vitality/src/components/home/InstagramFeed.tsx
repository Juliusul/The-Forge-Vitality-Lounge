"use client";

import { useEffect, useState, useRef } from "react";
import SectionLabel from "@/components/SectionLabel";

const INSTAGRAM_URL = "https://www.instagram.com/theforge.lippspringe/";

interface Post {
  id: string;
  thumbnailUrl: string;
  permalink: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch recent posts via public profile scraping endpoint
    // Falls back to placeholder tiles that link to the profile
    async function fetchPosts() {
      try {
        const res = await fetch(
          `https://www.instagram.com/theforge.lippspringe/?__a=1&__d=dis`,
          { mode: "cors" }
        );
        if (res.ok) {
          const data = await res.json();
          const edges =
            data?.graphql?.user?.edge_owner_to_timeline_media?.edges ?? [];
          const fetched = edges.slice(0, 6).map(
            (edge: { node: { id: string; thumbnail_src: string; shortcode: string } }) => ({
              id: edge.node.id,
              thumbnailUrl: edge.node.thumbnail_src,
              permalink: `https://www.instagram.com/p/${edge.node.shortcode}/`,
            })
          );
          if (fetched.length > 0) {
            setPosts(fetched);
            setLoading(false);
            return;
          }
        }
      } catch {
        // Silent fallback
      }

      // Fallback: show placeholder tiles linking to profile
      setPosts(
        Array.from({ length: 4 }, (_, i) => ({
          id: `placeholder-${i}`,
          thumbnailUrl: "",
          permalink: INSTAGRAM_URL,
        }))
      );
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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

          {/* Scroll arrows — desktop only */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-[#c19255]/30 text-[#c19255] flex items-center justify-center hover:bg-[#c19255]/10 transition-colors"
              aria-label="Zurück scrollen"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 4L6 8L10 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-[#c19255]/30 text-[#c19255] flex items-center justify-center hover:bg-[#c19255]/10 transition-colors"
              aria-label="Weiter scrollen"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable feed */}
        <div
          ref={scrollRef}
          className="flex gap-px overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loading
            ? Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[260px] h-[260px] bg-[#181816] animate-pulse snap-start"
                />
              ))
            : posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[260px] h-[260px] relative group overflow-hidden snap-start"
                >
                  {post.thumbnailUrl ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.thumbnailUrl}
                        alt="Instagram Post"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#0d0d0b]/30 group-hover:bg-transparent transition-colors duration-500" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-[#181816] flex items-center justify-center group-hover:bg-[#1e1e1c] transition-colors">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-[#c19255]/30 group-hover:text-[#c19255]/60 transition-colors"
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
                    </div>
                  )}

                  {/* Hover overlay with Instagram icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white drop-shadow-lg"
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
                  </div>
                </a>
              ))}
        </div>

        {/* Follow link */}
        <div className="mt-8 text-center md:text-left">
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
