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

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function ImageCarousel({
  images,
  interval = 18000,
  className = "",
}: ImageCarouselProps) {
  const [slides, setSlides] = useState(images);
  const [active, setActive] = useState(0);
  const hasShuffledRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (hasShuffledRef.current) return;
    hasShuffledRef.current = true;
    setSlides(shuffle(images));
  }, [images]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (slides.length < 2) return;
    timerRef.current = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      interval,
    );
  }, [clearTimer, slides.length, interval]);

  useEffect(() => {
    slides.forEach(({ src }) => {
      const preload = new Image();
      preload.src = src;
    });
  }, [slides]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const goNext = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
    startTimer();
  }, [slides.length, startTimer]);

  return (
    <div
      onClick={goNext}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") goNext();
      }}
      aria-label="Show next image"
      className={`overflow-hidden cursor-pointer ${className}`}
    >
      {slides.map(({ src, alt }, i) => (
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
