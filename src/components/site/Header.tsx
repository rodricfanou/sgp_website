import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/property-owners", label: "Property Owners" },
  { to: "/corporate-housing", label: "Corporate Housing" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(to: string) {
    return to === "/" ? pathname === "/" : pathname.startsWith(to);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-background/85 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      <div className="container-x flex h-20 md:h-28 items-center justify-between">
        <Logo size="md" />
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Main navigation"
        >
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: i.to === "/" }}
              aria-current={isActive(i.to) ? "page" : undefined}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex btn-primary !py-3 !px-5 !text-[0.68rem]"
        >
          Get in touch
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-border bg-background"
          role="dialog"
          aria-label="Navigation menu"
        >
          <div className="container-x py-6 flex flex-col gap-5">
            {nav.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-foreground/80"
                aria-current={isActive(i.to) ? "page" : undefined}
              >
                {i.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary self-start"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
