import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache 1 hour

export async function GET() {
  try {
    // Try Instagram's semi-public profile info API
    const res = await fetch(
      "https://i.instagram.com/api/v1/users/web_profile_info/?username=theforge.lippspringe",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "application/json",
          "Accept-Language": "de-DE,de;q=0.9,en;q=0.8",
          "X-IG-App-ID": "936619743392459",
          "X-ASBD-ID": "129477",
          "X-IG-WWW-Claim": "0",
          "Origin": "https://www.instagram.com",
          "Referer": "https://www.instagram.com/",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return NextResponse.json({ posts: [] }, { status: 200 });
    }

    const data = await res.json();
    const edges: Array<{
      node: {
        id: string;
        shortcode: string;
        thumbnail_src: string;
        display_url: string;
        is_video: boolean;
      };
    }> =
      data?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

    const posts = edges.slice(0, 6).map((edge) => ({
      id: edge.node.id,
      thumbnailUrl: edge.node.thumbnail_src || edge.node.display_url,
      permalink: `https://www.instagram.com/p/${edge.node.shortcode}/`,
      isVideo: edge.node.is_video,
    }));

    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}
