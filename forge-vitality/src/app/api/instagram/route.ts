import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache 1 hour

export async function GET() {
  try {
    const res = await fetch(
      "https://feeds.behold.so/qIV7zOT0UxcIXrX3Ppyq",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ posts: [] });
    }

    const data = await res.json();

    // Behold feed returns an array of post objects
    const posts = (Array.isArray(data) ? data : data.posts ?? [])
      .slice(0, 6)
      .map((post: {
        id: string;
        mediaUrl?: string;
        thumbnailUrl?: string;
        permalink: string;
        mediaType?: string;
      }) => ({
        id: post.id,
        thumbnailUrl: post.thumbnailUrl ?? post.mediaUrl ?? "",
        permalink: post.permalink,
        isVideo: post.mediaType === "VIDEO",
      }));

    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [] });
  }
}
