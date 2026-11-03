import type { ComponentType } from "react";
import {
  BedIcon,
  BuildingIcon,
  FacebookIcon,
  FactoryIcon,
  InstagramIcon,
  ShoppingBagIcon,
  SprayIcon,
  TikTokIcon,
  ToolsIcon,
  TruckIcon,
  WhatsAppIcon,
} from "../components/Icons";

export type IconComponent = ComponentType<{ className?: string }>;

// Drop files into /public/images and set the paths here, e.g. "/images/logo.png".
export const images = {
  logo: "/images/logo.png",
  heroProduct: "/images/hero-product2.png",
  whyChooseUs: "/images/why-choose-us.png",
  aboutRolls: "/images/about-us-product.png",
  aboutWatermark: "/images/about-watermark.png",
};

export const partners: { name: string; icon: IconComponent }[] = [
  { name: "Apex Logistics", icon: TruckIcon },
  { name: "Metro Facilities", icon: BuildingIcon },
  { name: "Nordic Clean", icon: SprayIcon },
  { name: "Summit Build", icon: ToolsIcon },
  { name: "Titan Industrial", icon: FactoryIcon },
  { name: "Grand Plaza", icon: BedIcon },
];

export const products: {
  size: string;
  dimensions: string;
  bagsPerRoll: number;
  image?: string;
  imageClassName?: string;
}[] = [
  { size: "S", dimensions: "19 x 22 inch", bagsPerRoll: 20, image: "/images/s-product.png" },
  { size: "M", dimensions: "22 x 34 inch", bagsPerRoll: 20, image: "/images/m-product.png", imageClassName: "object-cover scale-[1.12]" },
  { size: "L", dimensions: "28 x 35 inch", bagsPerRoll: 20, image: "/images/l-product.png", imageClassName: "object-cover scale-[1.12]" },
  { size: "XL", dimensions: "32 x 39 inch", bagsPerRoll: 15, image: "/images/xl-product.png", imageClassName: "object-cover scale-[1.12]" },
  { size: "XXL", dimensions: "36 x 48 inch", bagsPerRoll: 10, image: "/images/xxl-product.png", imageClassName: "object-cover scale-[1.12]" },
];

export const testimonials = [
  {
    quote:
      "No more double bagging. Gusto bags cut our facility plastic waste in half while never splitting even under heavy liquid loads.",
    name: "Marcus T.",
    role: "Head of Facilities, Apex Logistics",
  },
  {
    quote:
      "We dump sharp metal offcuts and wet debris daily. Zero rips or leaks. Absolute tank of a bag for demolition sites.",
    name: "Ir. Dave Wong",
    role: "Site Operations Manager, Summit Construction",
  },
  {
    quote:
      "Heng Heng Plastic delivers pristine German-grade quality right on schedule. It has eliminated housekeeping leaks in all 8 hotel properties.",
    name: "Sarah Lin",
    role: "Supply Chain Director, Grand Pacific Hospitality",
  },
];

export const contact = {
  phone: "012-922 5233",
  phoneHref: "tel:+60129225233",
  email: "yonghainmsb@gmail.com",
  hqAddress:
    "No. 2, 2A, 3, 3A, 4, 4A, Lot 5440, Persimpangan, Jln Taman Jeliti, Tandop, 05400 Alor Setar, Kedah",
};

// Replace "#" with the real profile/store URLs.
export const socials: { label: string; href: string; icon: IconComponent }[] = [
  { label: "WhatsApp", href: "https://wa.me/60129225233", icon: WhatsAppIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "TikTok", href: "#", icon: TikTokIcon },
  { label: "Shopee", href: "#", icon: ShoppingBagIcon },
];

export const footerSocials = socials.filter((item) =>
  ["WhatsApp", "Instagram", "TikTok", "Shopee"].includes(item.label),
);

export const locations: { branch: string; address: string; image?: string }[] = [
  { branch: "Headquarters", address: contact.hqAddress },
  {
    branch: "Sungai Petani",
    address: "No 5, Jalan Petri, Taman Pekan Baru, Sungai Petani, Malaysia, 08000",
  },
  {
    branch: "Simpang Kuala",
    address: "228A, Jalan PSK 7, Pekan Simpang Kuala, Simpang Kuala, 05400 Alor Setar, Kedah",
  },
  {
    branch: "Simpang Empat",
    address: "No. 8E, Tingkat Bawah, Jalan Pekan Simpang Empat 3, Simpang Empat, 06650 Alor Setar, Kedah",
  },
  {
    branch: "Tanah Merah",
    address: "No 70 BWH, Jalan Tanah Merah, Bandar Baru, Tanah Merah, 06700 Pendang, Kedah",
  },
];

export const businessHours = [
  { day: "Mon - Fri", hours: "8:30 AM - 5:30 PM" },
  { day: "Sat", hours: "8:30 AM - 1:00 PM" },
  { day: "Sun & PH", hours: "Closed" },
];
