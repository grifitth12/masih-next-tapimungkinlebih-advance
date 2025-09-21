import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import FooterYes from "./components/footer";
import getSettings from "./queris/getSetting";

const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: {
      template: `%s | ${settings.siteName}`,
      default: settings.siteName || "untitled",
    },
    description: "An advanced Next.js application with dynamic routing and metadata",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
          <Header />
        {children}
          <FooterYes />
      </body>
    </html>
  );
}
