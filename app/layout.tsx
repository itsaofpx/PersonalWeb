import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Podjanin Wachirawittayakul",
  description:
    "My personal blog and portfolio documenting my journey, projects, and learning experiences.",
  icons: {
    icon: "/data/picture/bear.png",
    apple: "/data/picture/bear.png",
  },
  openGraph: {
    title: "Podjanin Wachirawittayakul",
    description:
      "My personal blog and portfolio documenting my journey, projects, and learning experiences.",
    url: "https://podjanin.com",
    siteName: "Podjanin's Portfolio",
    images: [
      {
        url: "/data/picture/bear.png",
        width: 1200,
        height: 630,
        alt: "Podjanin's Portfolio",
      },
    ],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
