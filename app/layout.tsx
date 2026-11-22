import type { Metadata, Viewport } from "next";
import { Archivo, Poppins } from "next/font/google";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { site } from "./lib/site-data";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.company, url: site.url }],
  creator: site.company,
  publisher: site.company,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ff7a00",
};

// Only these glyphs are downloaded (~5KB vs ~450KB for the full font).
// Keep this list alphabetical and add any new name used in components/Icons.tsx.
const materialSymbolNames = [
  "apartment",
  "arrow_back",
  "arrow_forward",
  "bed",
  "build",
  "call",
  "cleaning_services",
  "close",
  "factory",
  "groups",
  "layers",
  "local_shipping",
  "location_on",
  "mail",
  "menu",
  "money_bag",
  "music_note",
  "open_in_full",
  "shopping_bag",
  "star",
  "water_drop",
].join(",");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-MY"
      className={`${archivo.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols is not available through next/font/google. */}
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=${materialSymbolNames}&display=block`}
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
