import { useCallback, useEffect, useRef, useState } from "react";

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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (images.length < 2) return;
    timerRef.current = setInterval(
      () => setActive((current) => (current + 1) % images.length),
      interval,
    );
  }, [clearTimer, images.length, interval]);

  useEffect(() => {
    images.forEach(({ src }) => {
      const preload = new Image();
      preload.src = src;
    });
  }, [images]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const goNext = useCallback(() => {
    setActive((current) => (current + 1) % images.length);
    startTimer();
  }, [images.length, startTimer]);

  return (
    <div
      onClick={goNext}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") goNext();
      }}
      aria-label="Show next image"
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
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
