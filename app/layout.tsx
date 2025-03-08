import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import NavBar from "@/components/layout/NavBar";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/lib/components/ScrollToTop";
import FramerMotion from "@/lib/framer-motion/LazyMotion";
import { ReduxProvider } from "@/redux/provider";
import { Metadata } from "next";
import { Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";

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
    default: "RCCGHGE",
    template: "%s | RCCGHGE",
  },
  description: "Heavens glorious embassy - Into his presence through worship",
  icons: {
    icon: "/images/rccg-logo.svg",
  },
  keywords: [
    "RCCGHGE",
    "heavens glorious embassy",
    "church",
    "worship",
    "Pastor John Omewah",
    "pastor",
    "prayer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${quicksand.variable}`}>
      <ScrollToTop />
      <FramerMotion>
        <body
          suppressHydrationWarning
          className="font-quicksand overflow-x-hidden  mx-auto   w-full  ">
          <ReduxProvider>
            <NavBar />
            <Hero />
            {children}
            <Footer />
            <Toaster richColors position="top-right" />
          </ReduxProvider>
        </body>
      </FramerMotion>
    </html>
  );
}
