import Image from "next/image";

type ImageSlotProps = {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  preload?: boolean;
};

export function ImageSlot({
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
  sizes = "50vw",
  preload,
}: ImageSlotProps) {
  if (src) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className={imageClassName || "object-contain"}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-current/40 bg-black/5 p-4 text-center text-xs font-semibold uppercase tracking-widest opacity-70 ${className}`}
      role="img"
      aria-label={alt}
    >
      {label}
    </div>
  );
}
