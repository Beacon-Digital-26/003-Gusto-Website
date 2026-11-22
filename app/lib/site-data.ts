import type { ComponentType } from "react";
import {
  FacebookIcon,
  ShoppingBagIcon,
  WhatsAppIcon,
} from "../components/Icons";

export type IconComponent = ComponentType<{ className?: string }>;

// Drop files into /public/images and set the paths here, e.g. "/images/logo.png".
export const images = {
  logo: "/images/logo.png",
  heroProduct: "/images/hero-product2.png",
  whyChooseUs: "/images/why-choose-us-new.png",
  aboutRolls: "/images/about-us-product.jpg",
  aboutWatermark: "/images/about-watermark.png",
};

export const products: {
  size: string;
  dimensions: string;
  bagsPerRoll: number;
  image?: string;
  imageClassName?: string;
  frameClassName?: string;
  large?: boolean;
}[] = [
  { size: "S", dimensions: "19 x 22 inch", bagsPerRoll: 20, image: "/images/s-product.png" },
  { size: "M", dimensions: "22 x 34 inch", bagsPerRoll: 20, image: "/images/m-product.png", imageClassName: "object-cover scale-[1.12]" },
  { size: "L", dimensions: "28 x 35 inch", bagsPerRoll: 20, image: "/images/l-product.png", imageClassName: "object-cover scale-[1.12]" },
  {
    size: "XL",
    dimensions: "32 x 39 inch",
    bagsPerRoll: 15,
    image: "/images/xl-product.png",
    imageClassName: "object-contain",
    frameClassName: "aspect-[438/311]",
    large: true,
  },
  {
    size: "XXL",
    dimensions: "36 x 48 inch",
    bagsPerRoll: 10,
    image: "/images/xxl-product.png",
    imageClassName: "object-contain",
    frameClassName: "aspect-[438/311]",
    large: true,
  },
];

// Sourced from verified Shopee buyer reviews (ShopeeReviews_7049730518). Only
// light punctuation/line-break/typo cleanup applied; wording kept authentic.
// `id` uses the source review_id since a few masked usernames repeat.
export const testimonials = [
  {
    id: "11327332210",
    quote:
      "Beli le kome takkan menyesal punya sebab teman pun dah repeat beli kali ke dua. Kualiti dan saiz yang puas hati serta harganya yang amat berpatutan. Supplier pun bungkus barangan dengan begitu kemas dan rapi sekali. Terbaekkkk supplier!",
    name: "z*****e",
    role: "Verified Shopee Buyer \u00b7 Size XL",
  },
  {
    id: "107053580684",
    quote:
      "Alhamdulillah, items received in good condition. Thanks seller & courier service! Very practical, useful & satisfying quality. Highly recommended products & seller.",
    name: "s*****0",
    role: "Verified Shopee Buyer \u00b7 Size XL",
  },
  {
    id: "10357186130",
    quote:
      "Dengan adanya plastik sampah ini, ia memudahkan saya untuk menyediakan bungkusan setiap kali tong sampah telah penuh. Material plastik agak tebal dan tidak mudah koyak. Ia mampu menampung kandungan sampah yang banyak dan berat.",
    name: "z*****e",
    role: "Verified Shopee Buyer \u00b7 Size XL",
  },
  {
    id: "7176332625",
    quote:
      "Penghantaran dr seller pantas, harga antara yg terbaik, muat dgn bakul sampah, yg terbaik plastik tak bocor walau sampah penuh dan padat. Tq seller!",
    name: "rafieramli",
    role: "Verified Shopee Buyer \u00b7 Size S",
  },
  {
    id: "15156928143",
    quote:
      "Senang nak buat kerja-kerja kemas barang-barang besar dan berat. Plastik tebal, sangat mudah, terbaik. Nice packaging, secure wrapping!",
    name: "syaamazlan992",
    role: "Verified Shopee Buyer \u00b7 Size XXL",
  },
  {
    id: "15399500538",
    quote:
      "This is my 2nd time buying already, the thickness and quality of the bags are top notch and reasonably priced. Highly recommended products.",
    name: "my7750_28200",
    role: "Verified Shopee Buyer \u00b7 Size L",
  },
  {
    id: "7350575318",
    quote:
      "Looking for M size or 60cm x 60cm. Found this most suitable with my 20L dustbin. Price cheaper than buy at physical store. Sure will buy again.",
    name: "p*****h",
    role: "Verified Shopee Buyer \u00b7 Size M",
  },
  {
    id: "57554843122",
    quote:
      "Barang sudah sampai dalam 3 hari, 4th repeated order. Mmg bagus plastic bag ni, harga berpatutan, tahan lasak, terbaik plastik sampah ni. Hats off seller!",
    name: "sakthideva",
    role: "Verified Shopee Buyer \u00b7 Size M",
  },
  {
    id: "16046000984",
    quote:
      "Dari PKP pakai plastic ni, sangat bagus tahan berat. Plastic berkualiti dan agak tebal, saya suka size pun just nice, harga lagi murah dari luar and berkualiti. Tq seller.",
    name: "m*****n",
    role: "Verified Shopee Buyer \u00b7 Size XL",
  },
  {
    id: "12567765154",
    quote:
      "Thanks seller for the speedy delivery, all items received in good condition. This is my second time purchasing from this seller. The garbage plastic is very good coz it's thick and not easily torn like some other garbage bags.",
    name: "b*****8",
    role: "Verified Shopee Buyer \u00b7 Size XL",
  },
  {
    id: "97220985843",
    quote:
      "Harga berpatutan, size besar, cukup untuk kegunaan, boleh isi banyak barang, tahan juga. Tapi kalau nak yang betul-betul heavy duty, kena cari yang lagi tebal.",
    name: "b*****z",
    role: "Verified Shopee Buyer \u00b7 Size XL",
  },
  {
    id: "98888464809",
    quote:
      "Tebal la jugak, tak macam yang nipis untuk buang kertas je. Boleh pakai untuk dapur. Tak mudah koyak dan berbaloi dengan harga. Saiz S pun elok, senang muat bakul sampah yang kecik.",
    name: "m*****r",
    role: "Verified Shopee Buyer \u00b7 Size S",
  },
  {
    id: "107016410094",
    quote:
      "Barang sampai dengan cepat dan dalam keadaan sangat baik. Packaging kemas dan selamat, tak ada sebarang kerosakan. Kualiti barang memang memuaskan dan sama seperti dalam gambar. Harga pun berbaloi dengan kualiti yang diterima.",
    name: "k*****5",
    role: "Verified Shopee Buyer \u00b7 Size L",
  },
  {
    id: "12879918237",
    quote:
      "Plastik xnipis xmudah koyak. Harga pun murah. Tong sampah hijau tu plastik saiz S lebih kurang tinggi A4 paper. Saiz XL & L belum guna. In Syaa-Allah nanti repeat order.",
    name: "m*****f",
    role: "Verified Shopee Buyer \u00b7 Size XL",
  },
  {
    id: "98475890703",
    quote:
      "Penghantaran superb laju, plastic tak tebal tak nipis sangat, harga pun murah. Tqvm seller, will repeat again!",
    name: "hafizarebear",
    role: "Verified Shopee Buyer \u00b7 Size L",
  },
  {
    id: "12082489049",
    quote:
      "Dah repeat banyak kali beli dari seller ni. Happy dapat beli barang lebih kurang sama kualiti dengan brand mahal tapi pada harga yang lebih murah. Terima kasih seller.",
    name: "sarimah.talib",
    role: "Verified Shopee Buyer \u00b7 Size XL",
  },
  {
    id: "65468386659",
    quote:
      "Dah selalu guna plastic ni, memang tahan, murah dan banyak. Memang recommended plastic ni, tq seller. Boleh repeat order lagi kalau macam ni.",
    name: "sharol80",
    role: "Verified Shopee Buyer \u00b7 Size L",
  },
  {
    id: "13456095054",
    quote:
      "Second time beli sini. Nak kata murah tu mungkin ada yang lagi murah, tapi kualiti for this one is tiptop, tebal sikit. That's why suka beli sini. Hantar pun cepat. Thanks seller!",
    name: "sbsyazwani",
    role: "Verified Shopee Buyer \u00b7 Size S",
  },
  {
    id: "96919091544",
    quote:
      "Produk diterima dengan cepat dan dalam keadaan sangat baik. Kualiti memang memuaskan, sama seperti yang diterangkan dalam iklan. Harga pun berbaloi dan sesuai dengan bajet. Seller responsif serta pembungkusan sangat kemas.",
    name: "homestore_diy",
    role: "Verified Shopee Buyer \u00b7 Size S",
  },
];

export const contact = {
  phones: [
    { label: "012-922 5233", href: "tel:+60129225233" },
    { label: "012-668 7218", href: "tel:+60126687218" },
  ],
  phone: "012-922 5233",
  phoneHref: "tel:+60129225233",
  email: "henghengplastictrading@gmail.com",
  hqAddress:
    "No. 2, 2A, 3, 3A, 4, 4A, 6 Lot 5440,\nPersimpangan, Jalan Lencong Barat,\nTandop, 05400 Alor Setar,\nKedah",
};

// Replace "#" with the real profile/store URLs.
export const socials: { label: string; href: string; icon: IconComponent }[] = [
  { label: "WhatsApp", href: "https://wa.me/60129225233", icon: WhatsAppIcon },
  { label: "Shopee", href: "#", icon: ShoppingBagIcon },
];

export const footerSocials = socials.filter((item) =>
  ["WhatsApp", "Shopee"].includes(item.label),
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
