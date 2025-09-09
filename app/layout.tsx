import type { Metadata } from "next";
import { Geist, Geist_Mono, Righteous } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export const metadata: Metadata = {
  title: "AristoByte UI",
  description: "Smart | Scalable | Seamless",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
