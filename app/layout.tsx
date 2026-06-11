import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <html lang="en">
      <body className="portfolio-shell min-h-screen flex flex-col antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
