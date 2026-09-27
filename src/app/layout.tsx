import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Ronit Dey", template: "%s | Ronit Dey" },
  description: "CS&E student at University of Toledo. NASA Space Apps finalist and asteroid researcher.",
  keywords: ["Ronit Dey", "portfolio", "computer science", "software engineer", "Toledo"],
  authors: [{ name: "Ronit Dey" }],
  openGraph: {
    type: "website",
    siteName: "Ronit Dey",
    title: "Ronit Dey — CS&E Student & Software Engineer",
    description: "CS&E student at University of Toledo. NASA Space Apps finalist.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] bg-[#0a192f] text-[#8892b0] antialiased selection:bg-[rgba(100,255,218,0.15)] selection:text-[#64ffda]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
