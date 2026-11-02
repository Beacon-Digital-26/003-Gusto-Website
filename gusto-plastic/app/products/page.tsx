import type { Metadata } from "next";
import { ProductsSection } from "../components/sections/ProductsSection";

export const metadata: Metadata = {
  title: "Products | Gusto Pro",
  description:
    "Gusto Pro heavy duty garbage bags in sizes S to XXL, from 19 x 22 inch to 36 x 48 inch rolls.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <ProductsSection />
    </div>
  );
}
