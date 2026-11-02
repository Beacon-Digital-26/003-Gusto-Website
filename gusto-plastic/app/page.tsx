import type { Metadata } from "next";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProductsSection } from "./components/sections/ProductsSection";

export const metadata: Metadata = {
  title: "Gusto Pro | Trash Bag Built Tough",
  description:
    "Heavy duty 3-layer garbage bags manufactured by Heng Heng Plastic Trading Malaysia. Holds 35KG, water resistant and affordable.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
