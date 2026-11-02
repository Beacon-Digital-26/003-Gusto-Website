import Image from "next/image";
import { ImageSlot } from "../ImageSlot";
import { images } from "../../lib/site-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-36 overflow-hidden bg-white py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[1056px] w-[1036px] -translate-y-1/2"
      >
        <Image
          src={images.aboutWatermark}
          alt=""
          fill
          sizes="1036px"
          className="object-contain object-right"
        />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <ImageSlot
          src={images.aboutRolls}
          alt="Stack of Gusto Pro heavy duty garbage bag rolls in sizes S to XXL"
          label="Stacked rolls image"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="mx-6 aspect-[2/3] max-w-xl bg-white text-gusto-slate lg:mx-0"
        />
        <div className="px-6 text-center sm:px-10 lg:pr-16 lg:text-right">
          <h2 className="font-display text-5xl tracking-[-1.12px] text-gusto-orange uppercase sm:text-6xl lg:text-7xl">
            About Us
          </h2>
          <div className="mt-6 space-y-5 text-right text-[18px] font-light leading-[1.7] text-[#b3b3b3] lg:ml-auto lg:max-w-xl">
            <p>
              Gusto is a trash bag brand by Heng Heng Plastic Trading. We make
              strong, reliable bags built to handle everyday household and
              commercial waste without tearing or leaking.
            </p>
            <p>
              With years of experience in the plastics trade, we focus on
              quality materials, consistent sizing, and fair prices. Whether
              you need bags for your home, shop, restaurant, or office, Gusto
              has a size and thickness to fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
