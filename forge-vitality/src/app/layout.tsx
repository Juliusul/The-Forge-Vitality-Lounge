import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import TrackingScripts from "@/components/TrackingScripts";

export const metadata: Metadata = {
  title: "The Forge by Vitality Lounge – Hybrid Fitness & Krafttraining Bad Lippspringe",
  description:
    "The Forge ist dein Hybrid Fitness Studio in Bad Lippspringe. Functional Fitness, Krafttraining, Smart Gym und Physiotherapie — alles an einem Ort.",
  keywords: "Hybrid Fitness Bad Lippspringe, Functional Fitness Bad Lippspringe, Krafttraining Bad Lippspringe, Smart Gym, Vitality Lounge, Gym Bad Lippspringe, Athletiktraining, Personal Training",
  openGraph: {
    title: "The Forge by Vitality Lounge",
    description: "Hybrid Fitness & Krafttraining in Bad Lippspringe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head />
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <TrackingScripts />
      </body>
    </html>
  );
}
