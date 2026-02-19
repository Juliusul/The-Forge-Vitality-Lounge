import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Forge by Vitality Lounge – Premium Performance Club Bad Lippspringe",
  description:
    "The Forge ist ein Premium Performance Health Club in Bad Lippspringe. Functional Training, Self Check Gym und Physiotherapie unter einem Dach.",
  keywords: "Fitness, Performance, Bad Lippspringe, Functional Training, Gym, Physiotherapie, Vitality Lounge",
  openGraph: {
    title: "The Forge by Vitality Lounge",
    description: "Premium Performance Health Club in Bad Lippspringe",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@200;300;400;500&display=swap"
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
