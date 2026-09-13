import { Geist } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Kesav Bonthu",
    template: "%s | Kesav Bonthu",
  },
  description:
    "Portfolio of Kesav Bonthu, a technical product manager with experience across financial services, healthcare AI, enterprise platforms, and AI product development.",
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
    title: "Kesav Bonthu",
    description:
      "Portfolio of Kesav Bonthu, a technical product manager with experience across AI, enterprise products, and financial services.",
    siteName: "Kesav Bonthu Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var theme=localStorage.getItem("portfolio-theme");document.documentElement.classList.toggle("dark",theme==="dark"||(!theme&&matchMedia("(prefers-color-scheme: dark)").matches));}catch(e){}})();` }} />
      </head>
      <body className="portfolio-shell min-h-screen flex flex-col antialiased font-sans">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
