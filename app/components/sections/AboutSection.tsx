import Image from "next/image";
import { ImageSlot } from "../ImageSlot";
import { Reveal } from "../Reveal";
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 sm:gap-12 sm:px-8 lg:px-10 lg:grid-cols-2 lg:pl-0">
        <Reveal className="order-last aspect-[2/3] w-full max-w-xl lg:order-first">
          <ImageSlot
            src={images.aboutRolls}
            alt="Stack of Gusto Pro heavy duty garbage bag rolls in sizes S to XXL"
            label="Stacked rolls image"
            sizes="(min-width: 1024px) 36rem, 100vw"
            className="h-full w-full text-gusto-slate"
            imageClassName="object-contain"
          />
        </Reveal>
        <Reveal delay={150} className="text-center lg:text-right">
          <h2 className="font-display text-5xl tracking-[-1.12px] text-gusto-orange uppercase sm:text-6xl lg:text-7xl">
            About Us
          </h2>
          <div className="mt-6 space-y-5 text-center text-[18px] font-light leading-[1.7] text-black lg:ml-auto lg:max-w-xl lg:text-right">
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
        </Reveal>
      </div>
    </section>
  );
}
