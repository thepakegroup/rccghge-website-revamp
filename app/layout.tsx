import type { Metadata } from "next";
import { Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";

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
  title: "RCCGHE",
  description: "Heavens glorious embassy - Into his presence through worship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${quicksand.variable}`}>
      <body suppressHydrationWarning className="font-quicksand">
        <ReduxProvider>
          <NavBar />
          <Hero/>
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
