import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import interiorLiving from "@/assets/interior-living.jpg";
import property1 from "@/assets/property-1.jpg";
import {
  Building2, ShieldCheck, DollarSign, CalendarCheck, Users, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/corporate-housing")({
  head: () => ({
    meta: [
      { title: "Corporate Housing — Summit Global Property" },
      {
        name: "description",
        content:
          "Furnished corporate housing for executives, interns, relocating teams, and healthcare professionals. Flexible terms, hospitality-grade homes.",
      },
      {
        property: "og:title",
        content: "Corporate Housing — Summit Global Property",
      },
      {
        property: "og:description",
        content:
          "Furnished, flexible, and worry-free housing for your workforce.",
      },
      { property: "og:url", content: "/corporate-housing" },
    ],
    links: [{ rel: "canonical", href: "/corporate-housing" }],
  }),
  component: CorporateHousingPage,
});

const benefits = [
  {
    icon: Building2,
    title: "For Employers",
    items: [
      "Simplify relocation and travel programs",
      "Centralized billing and reporting",
      "Consistent quality across markets",
    ],
  },
  {
    icon: Users,
    title: "For Employees & Guests",
    items: [
      "Fully furnished, move-in ready homes",
      "Hotel amenities with home privacy",
      "Flexible 30+ night stays",
    ],
  },
  {
    icon: ShieldCheck,
    title: "For Property Owners",
    items: [
      "Verified corporate clientele",
      "Daily professional cleaning",
      "Guaranteed on-time payouts",
    ],
  },
];

const industries = [
  "Healthcare & Traveling Professionals",
  "Tech & Engineering",
  "Consulting & Professional Services",
  "Construction & Project Teams",
  "Internship & Rotation Programs",
  "Insurance & Disaster Relief",
];

const howItWorks = [
  {
    n: "01",
    title: "Tell us your needs",
    body: "Number of guests, locations, duration, and any specific requirements.",
  },
  {
    n: "02",
    title: "We curate your options",
    body: "We match from our portfolio or source a home that fits your standards.",
  },
  {
    n: "03",
    title: "One invoice, one point of contact",
    body: "Centralized billing and a dedicated account manager for every booking.",
  },
];

function CorporateHousingPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-ink/95" />
        <div className="container-x relative">
          <span className="gold-line" />
          <p className="eyebrow mt-6 !text-cream/60">Corporate Housing</p>
          <h1 className="mt-6 text-5xl md:text-7xl max-w-4xl leading-[0.95] text-cream">
            Your people deserve more than a hotel room.
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-cream/70 text-lg leading-relaxed">
            Furnished, flexible, and worry-free homes for executives, rotating
            teams, relocating employees, and healthcare professionals. We handle every
            detail — so you can focus on the work that matters.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary inline-flex">
              Inquire about corporate housing
            </Link>
            <Link to="/services" className="btn-outline text-cream inline-flex">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary">
        <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["Multi-market", "Coverage across the Southeast"],
            ["Flexible terms", "30 nights to 12+ months"],
            ["Central billing", "One invoice per stay period"],
            ["24/7 support", "On-call guest experience team"],
          ].map(([t, b]) => (
            <div key={t}>
              <p className="text-sm uppercase tracking-[0.18em] text-gold font-medium">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6">Who it serves</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              A better solution for{" "}
              <span className="italic text-gold">everyone</span>.
            </h2>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, items }) => (
              <div key={title} className="bg-background p-8 md:p-12">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 text-2xl">{title}</h3>
                <ul className="mt-6 space-y-3">
                  {items.map((i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-gold mt-0.5">—</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE SPLIT */}
      <section className="container-x pb-20 md:pb-40">
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
          <div className="md:col-span-5 aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              src={property1}
              alt="Exterior"
              width={1600}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-ink text-cream py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6 !text-cream/60">Industries we serve</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-cream">
              We support the teams that keep things{" "}
              <span className="italic text-gold">moving</span>.
            </h2>
          </div>
          <div className="grid gap-px bg-cream/10 border border-cream/10 md:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="p-8 md:p-12 flex items-center gap-4"
              >
                <Sparkles className="h-5 w-5 text-gold shrink-0" strokeWidth={1.4} />
                <span className="text-cream/90">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6">How it works</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Fast setup. Simple process.{" "}
              <span className="italic text-gold">Zero hassle</span>.
            </h2>
          </div>
          {howItWorks.map((s, i) => (
            <div key={s.n} className="flex gap-8 md:gap-16 py-10 md:py-14 border-t border-border">
              <span className="font-serif text-5xl text-gold shrink-0">{s.n}</span>
              <div className="max-w-lg">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary border-y border-border py-20 md:py-40">
        <div className="container-x text-center">
          <h2 className="text-4xl md:text-6xl max-w-3xl mx-auto">
            Ready to move your team?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Tell us about your upcoming assignments and we'll prepare a tailored
            housing proposal within one business day.
          </p>
          <Link
            to="/contact"
            className="btn-primary mt-10 inline-flex"
          >
            Request a proposal
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
