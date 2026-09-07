import { useEffect, useState } from "react";

export type Slide = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: Slide[];
  /** How long each image is shown before the crossfade begins (ms). */
  interval?: number;
  /** Applied to the wrapping container. */
  className?: string;
};

export function ImageCarousel({
  images,
  interval = 18000,
  className = "",
}: ImageCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    images.forEach(({ src }) => {
      const preload = new Image();
      preload.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % images.length),
      interval,
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map(({ src, alt }, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          aria-hidden={i !== active}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
