import type { Metadata } from "next";
import { ContactSection } from "../components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Gusto Pro",
  description:
    "Contact Heng Heng Plastic Trading: headquarters in Alor Setar, Kedah, branches across northern Malaysia, phone 012-922 5233.",
};

export default function ContactPage() {
  return <ContactSection />;
}
