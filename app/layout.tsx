import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kesav Bonthu | Technical Product Manager & AI Product Leader",
    template: "%s | Kesav Bonthu",
  },
  description:
    "Portfolio of Kesav Bonthu, a technical product manager and UW Foster MBA candidate with experience across FinTech, healthcare AI, enterprise platforms, MBA consulting, and AI product development.",
  keywords: [
    "Kesav Bonthu",
    "Technical Product Manager",
    "AI Product Manager",
    "Product Manager MBA",
    "UW Foster MBA",
    "FinTech Product Manager",
    "Healthcare AI Product Manager",
    "Technical Program Manager",
    "Product Portfolio",
    "Enterprise Product Management",
    "AI Workflow Automation",
  ],
  authors: [{ name: "Kesav Bonthu" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Kesav Bonthu | Technical Product Manager & AI Product Leader",
    description:
      "Portfolio of Kesav Bonthu, a technical product manager and UW Foster MBA candidate.",
    siteName: "Kesav Bonthu Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
