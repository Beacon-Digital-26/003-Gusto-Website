import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Gusto Pro | Trash Bag Built Tough",
  description:
    "Heavy duty garbage bags manufactured by Heng Heng Plastic Trading Malaysia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <head>
        {/* Material Symbols is not available through next/font/google. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="flex flex-1 flex-col bg-white text-gusto-slate">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
