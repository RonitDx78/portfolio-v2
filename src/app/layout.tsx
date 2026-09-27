import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Ronit Dey | Portfolio", template: "%s | Ronit Dey" },
  description:
    "CS&E student at University of Toledo. NASA Space Apps finalist, asteroid researcher, and aspiring software engineer.",
  keywords: ["Ronit Dey", "portfolio", "computer science", "software engineer", "University of Toledo"],
  authors: [{ name: "Ronit Dey" }],
  openGraph: {
    type: "website",
    siteName: "Ronit Dey Portfolio",
    title: "Ronit Dey | CS&E Student & Software Engineer",
    description: "CS&E student at University of Toledo. NASA Space Apps finalist, asteroid researcher.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#080c14] text-[#f0f4ff] antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
