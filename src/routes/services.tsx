import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import { Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Summit Global Property" },
      {
        name: "description",
        content:
          "Corporate housing, short-term stays, and full-service property management for owners.",
      },
      { property: "og:title", content: "Services — Summit Global Property" },
      {
        property: "og:description",
        content:
          "From corporate housing to short-term stays — every detail handled.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Corporate Housing",
    body: "Customized accommodations for executives on extended assignments, traveling nurses, interns, and relocating new hires. Flexible terms, hospitality-grade furnishings.",
    bullets: [
      "Flexible 30+ night stays",
      "Furnished, fully equipped",
      "Centralized billing",
    ],
    detail:
      "We partner directly with HR, travel, and operations teams to source, furnish, and maintain homes that feel like a real home — not a hotel room. Every property is inspected, photographed, and stocked before your team arrives.",
  },
  {
    n: "02",
    title: "Short-Term Stays",
    body: "A curated alternative to hotels for families and groups. Each home is photographed, styled, and prepared with the same standards we'd expect ourselves.",
    bullets: [
      "Concierge guest support",
      "Spotless turnover housekeeping",
      "Smart-home check-in",
    ],
    detail:
      "From weekend getaways to month-long escapes, each property is professionally cleaned, fully equipped with linens and kitchen essentials, and backed by a guest experience team available seven days a week.",
  },
  {
    n: "03",
    title: "Property Management",
    body: "Hand us the keys. We handle marketing, guest screening, dynamic pricing, maintenance, supply, and reporting — and we send you a clean deposit every month.",
    bullets: [
      "Dynamic revenue management",
      "Vetted maintenance network",
      "Monthly owner reporting",
    ],
    detail:
      "Our owners receive a single monthly deposit, a detailed occupancy report, and 24/7 access to a dedicated portfolio manager. We absorb the operational complexity so you can focus on higher-level investments.",
  },
  {
    n: "04",
    title: "Design & Furnishing",
    body: "Our in-house team can take a bare property and transform it into a turnkey rental — sourcing, staging, and styling included.",
    bullets: [
      "Brand-aligned interiors",
      "Full FF&E sourcing",
      "Photography included",
    ],
    detail:
      "We work within your budget to deliver interiors that photograph well and wear well. From space planning to pillow selection, every detail is intentional. Most properties are guest-ready within 30 days of signing.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 border-b border-border">
        <div className="container-x">
          <span className="gold-line" />
          <p className="eyebrow mt-6">Services</p>
          <h1 className="mt-6 text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            A full hospitality operation — wrapped around your{" "}
            <span className="italic text-gold">real estate</span>.
          </h1>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="container-x">
        {services.map((s, i) => (
          <article
            key={s.n}
            className="grid gap-6 lg:grid-cols-12 py-16 md:py-24 border-b border-border last:border-b-0"
          >
            <div className="lg:col-span-2 font-serif text-5xl text-gold">
              {s.n}
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl">{s.title}</h2>
              {i === 0 && (
                <Link
                  to="/corporate-housing"
                  className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>
            <div className="lg:col-span-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>{s.body}</p>
              <p className="text-foreground/70">{s.detail}</p>
              <ul className="space-y-2 text-foreground/80 text-sm pt-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-gold">—</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            {i === 1 && (
              <div className="lg:col-span-12 aspect-[16/7] overflow-hidden mt-6">
                <img
                  src={interiorBedroom}
                  alt="Bedroom"
                  width={1600}
                  height={700}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </article>
        ))}
      </section>

      {/* TRUST SIGNAL — TESTIMONIAL */}
      <section className="bg-ink text-cream py-20 md:py-40">
        <div className="container-x max-w-4xl text-center">
          <Quote className="h-10 w-10 text-gold mx-auto" strokeWidth={1.2} />
          <blockquote className="mt-8 text-2xl md:text-3xl leading-relaxed font-serif text-cream/90">
            &ldquo;We placed six traveling nurses in Summit properties over nine
            months. The homes were ready on day one, billing was painless, and
            our team felt genuinely taken care of. That&rsquo;s rare.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-medium text-cream">— Director of Talent,</p>
            <p className="text-cream/50 text-sm">
              Regional healthcare system, Southeast
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE SPLIT */}
      <section className="container-x py-20 md:py-40">
        <div className="grid gap-4 md:gap-6 md:grid-cols-12">
          <div className="md:col-span-7 aspect-[16/11] overflow-hidden">
            <img
              src={interiorLiving}
              alt="Living room"
              width={1600}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:col-span-5 aspect-[4/5] md:aspect-auto overflow-hidden" />
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-40 text-center border-t border-border">
        <h2 className="text-4xl md:text-6xl max-w-3xl mx-auto">
          Ready for hands-off ownership?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Tell us about your property and we'll prepare a tailored proposal.
        </p>
        <Link to="/contact" className="btn-primary mt-10 inline-flex">
          Request a proposal
        </Link>
      </section>
    </SiteLayout>
  );
}
