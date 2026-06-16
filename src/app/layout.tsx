import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Sahoo — Full-Stack Developer",
  description:
    "Full-stack developer specializing in the MERN stack — React, Node.js, and Express, building production-grade web apps and AI-integrated products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-ink text-paper antialiased font-body">
        {children}
      </body>
    </html>
  );
}
