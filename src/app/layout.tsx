import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yosei Suzuki — Infrastructure & Web Engineer",
  description: "インフラエンジニア × Webエンジニア志望 鈴木陽生のポートフォリオ。React / Next.js / TypeScript を中心に個人開発を行っています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display+SC:wght@400;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
