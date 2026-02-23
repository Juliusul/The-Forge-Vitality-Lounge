import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Forge by Vitality Lounge – Hybrid Fitness & Krafttraining Bad Lippspringe",
  description:
    "The Forge ist dein Hybrid Fitness Studio in Bad Lippspringe. Functional Fitness, Krafttraining, Self Check Gym und Physiotherapie — alles an einem Ort.",
  keywords: "Hybrid Fitness Bad Lippspringe, Functional Fitness Bad Lippspringe, Krafttraining Bad Lippspringe, Self Check Gym, Vitality Lounge, Gym Bad Lippspringe",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@300;400;500&family=Inter:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
