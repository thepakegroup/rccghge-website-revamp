import { Playfair_Display, Quicksand } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import NavBar from "@/components/layout/NavBar";
import { ReduxProvider } from "@/redux/provider";
import{ Metadata } from "next";
import "./globals.css";
import FramerMotion from "@/lib/framer-motion/LazyMotion";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import Head from "next/head";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "RCCGHE",
    template: "%s | RCCGHE",
  },
  description: "Heavens glorious embassy - Into his presence through worship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${quicksand.variable}`}>
   
      <FramerMotion>
        <body
          suppressHydrationWarning
          className="font-quicksand overflow-x-hidden">
          <ReduxProvider>
            <NavBar />
            <Toaster richColors position="top-right" />
            <Hero />
            {children}
            <Footer />
          </ReduxProvider>
        </body>
      </FramerMotion>
    </html>
  );
}
