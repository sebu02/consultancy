import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Iceberg Consultancy",
  description: "Modern strategic consultancy uncovering hidden value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-brand-gray text-brand-black flex flex-col font-sans">
        <Header />
        <main className="flex-grow flex flex-col pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
