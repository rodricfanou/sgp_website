import { Link } from "@tanstack/react-router";

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  /** When true, renders without a Link wrapper (e.g. for a hero showcase). */
  static?: boolean;
  className?: string;
};

const sizeMap = {
  sm: "h-16 md:h-20",
  md: "h-20 md:h-24",
  lg: "h-28 md:h-36",
  xl: "h-56 md:h-72",
};

export function Logo({ size = "md", static: isStatic = false, className }: LogoProps) {
  const content = (
    <img
      src="/logos/summit-logo-full.png"
      alt="Summit Global Property"
      className={`${sizeMap[size!]} w-auto object-contain ${className ?? ""}`}
    />
  );

  if (isStatic) return content;

  return (
    <Link
      to="/"
      className="inline-flex items-center transition-transform duration-500 hover:scale-[1.02]"
      aria-label="Summit Global Property — Home"
    >
      {content}
    </Link>
  );
}
