import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-cream mt-32">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 flex flex-col items-center">
          <Logo size="lg" static />
          <p className="mt-6 font-serif italic text-gold text-lg text-center">
            Managing Properties. Elevating Value.
          </p>
          <p className="mt-6 max-w-sm text-cream/70 text-sm leading-relaxed text-center">
            A modern property management partner serving homeowners, corporate
            clients, and travelers with care, clarity, and craft.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow !text-cream/50">Company</p>
          <Link to="/corporate-housing" className="block text-cream/80 hover:text-cream">
            Corporate Housing
          </Link>
          <Link to="/services" className="block text-cream/80 hover:text-cream">
            Services
          </Link>
          <Link to="/about" className="block text-cream/80 hover:text-cream">
            About
          </Link>
          <Link to="/contact" className="block text-cream/80 hover:text-cream">
            Contact
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow !text-cream/50">Contact</p>
          <p className="text-cream/80">roderick@roderickfanou.com</p>
          <p className="text-cream/80">Mon – Fri · 9a – 6p</p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} Summit Global Property. All rights
            reserved.
          </p>
          <p className="tracking-[0.2em] uppercase">Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
