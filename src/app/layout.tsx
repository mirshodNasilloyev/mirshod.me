import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: `Portfolio | ${personalInfo.name}`,
  description: personalInfo.bio,
  keywords: [
    "mirshod nasilloyev",
    "portfolio",
    "qa engineer",
    "go developer",
    "backend developer",
  ],
  openGraph: {
    title: `Portfolio | ${personalInfo.name}`,
    description: personalInfo.bio,
    images: [personalInfo.avatarUrl],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
