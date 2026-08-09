import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { profile } from "@/lib/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — Full-Stack Developer`,
  description:
    "Portfolio of Rohan Patil, a MERN stack full-stack web developer building realtime, production-shaped web applications with React, Node.js, Express and MongoDB.",
  keywords: [
    "Rohan Patil",
    "MERN stack developer",
    "full-stack developer",
    "React developer",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: `${profile.name} — Full-Stack Developer`,
    description:
      "MERN stack developer building realtime, full-stack web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-[#07070b] text-white selection:bg-violet-500/30">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
