import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akande Ezra | Frontend Engineer",
  description: "High-performance, accessible, and SEO-optimized digital portfolio of Akande Ezra.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akande Ezra",
  jobTitle: "Software Engineer",
  url: "https://akandeezra.com", // Assuming final domain
  sameAs: [
    "https://github.com",
    "https://linkedin.com"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white selection:bg-neutral-800 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
