import { StructuredData } from "./components/StructuredData";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProductsSection } from "./components/sections/ProductsSection";

export default function HomePage() {
  return (
    <>
      <StructuredData />      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
