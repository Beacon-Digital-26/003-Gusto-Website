import type { Metadata } from "next";
import { AboutSection } from "../components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About Us | Gusto Pro",
  description:
    "Gusto is a trash bag brand by Heng Heng Plastic Trading, making strong, reliable bags for household and commercial waste.",
};

export default function AboutPage() {
  return <AboutSection />;
}
