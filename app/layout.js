import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Cta from "./_components/Cta";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeInPixels",
  description: "We craft fast, responsive, and SEO-optimized websites that turn visitors into customers. Whether you're launching a startup or revamping your brand, we help bring your vision to life - pixel by pixel.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black max-w-7xl w-[90%] mx-auto`}
      >
        <Header />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
