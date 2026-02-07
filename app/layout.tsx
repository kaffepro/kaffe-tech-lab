import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaffe Tech | Minimalist Coffee Lab",
  description: "Japanese-inspired minimalist coffee technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-stone-900 font-sans">
        {children}
      </body>
    </html>
  );
}
