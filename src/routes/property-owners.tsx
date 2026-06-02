import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import property1 from "@/assets/property-1.jpg";
import {
  DollarSign, ShieldCheck, CalendarCheck, TrendingUp, Home, KeyRound, Sparkles, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/property-owners")({
  head: () => ({
    meta: [
      { title: "Property Owners — Summit Global Property" },
      {
        name: "description",
        content:
          "Partner with Summit Global Property to maximize your rental income. Professional management, vetted guests, and on-time monthly payouts.",
      },
      {
        property: "og:title",
        content: "Property Owners — Summit Global Property",
      },
      {
        property: "og:description",
        content:
          "Maximize your income with professional property management. Reliable payouts, vetted guests, zero hassle.",
      },
      { property: "og:url", content: "/property-owners" },
    ],
    links: [{ rel: "canonical", href: "/property-owners" }],
  }),
  component: PropertyOwnersPage,
});

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximize your income",
    body: "Dynamic pricing and multi-platform listing ensures your property earns market-leading rates.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted guests only",
    body: "No parties, no subletting, no unregistered guests. Every booking is screened and verified.",
  },
  {
    icon: CalendarCheck,
    title: "On-time monthly payouts",
    body: "Deposits sent by the 10th of every month. Detailed statements included.",
  },
  {
    icon: Home,
    title: "Less wear and tear",
    body: "Daily professional cleaning and short-term corporate guests means your property stays in pristine condition.",
  },
];

const howItWorks = [
  {
    n: "01",
    title: "Submit your property",
    body: "Share your property details online or over the phone. We schedule a walkthrough within 48 hours.",
  },
  {
    n: "02",
    title: "We prepare and launch",
    body: "Our team handles furnishing, professional photography, copywriting, pricing strategy, and listing across all major booking platforms.",
  },
  {
    n: "03",
    title: "We manage everything",
    body: "Guest screening, check-ins, cleaning, maintenance, and 24/7 guest support — all handled.",
  },
  {
    n: "04",
    title: "You collect monthly income",
    body: "A single deposit hits your account every month with a transparent breakdown of earnings and expenses.",
  },
];

function PropertyOwnersPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-ink/95" />
        <div className="container-x relative">
          <span className="gold-line" />
          <p className="eyebrow mt-6 !text-cream/60">Property Owners</p>
          <h1 className="mt-6 text-5xl md:text-7xl max-w-4xl leading-[0.95] text-cream">
            Your property. Our operation.{" "}
            <span className="italic text-gold">Your income</span>.
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-cream/70 text-lg leading-relaxed">
            Partner with Summit Global Property and turn your furnished home into
            a reliable income stream. We handle the guests, the cleaning, the
            maintenance, and the marketing — so you can enjoy the returns without
            the headaches.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary inline-flex">
              List your property
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
            ["Higher returns", "Revenue-optimized pricing strategy"],
            ["Zero landlord hassle", "We handle everything"],
            ["Monthly payouts", "Deposits by the 10th"],
            ["24/7 operations", "Support, cleaning, maintenance"],
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
            <p className="eyebrow mt-6">Why partner with us</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              More income. Less hassle.{" "}
              <span className="italic text-gold">Real results</span>.
            </h2>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-2">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-background p-8 md:p-12">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{body}</p>
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
              alt="Property exterior"
              width={1600}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6">How it works</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              From listing to your first{" "}
              <span className="italic text-gold">deposit</span>.
            </h2>
          </div>
          {howItWorks.map((s) => (
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

      {/* COMPARISON */}
      <section className="py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6">The difference</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Self-managing vs. Summit —{" "}
              <span className="italic text-gold">not even close</span>.
            </h2>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-2">
            <div className="bg-background p-8 md:p-12">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Self-managing</h3>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                {[
                  "Fielding guest messages at all hours",
                  "Coordinating cleaners between bookings",
                  "Handling maintenance emergencies yourself",
                  "Setting prices based on gut feeling",
                  "Chasing late payments and damages",
                  "Managing multiple listing platforms",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-destructive">✕</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8 md:p-12">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold">With Summit</h3>
              <ul className="mt-8 space-y-4">
                {[
                  "24/7 guest support team handles everything",
                  "Professional cleaning after every stay",
                  "Vetted maintenance network on call",
                  "Data-driven dynamic pricing",
                  "Guaranteed monthly deposits",
                  "Single point of contact for everything",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium">
                    <span className="text-gold">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="bg-ink text-cream py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6 !text-cream/60">Our commitment</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-cream">
              Guarantees we stand{" "}
              <span className="italic text-gold">behind</span>.
            </h2>
          </div>
          <div className="grid gap-px bg-cream/10 border border-cream/10 md:grid-cols-3">
            {[
              ["On-time payout", "Deposits are sent by the 10th. If we're late, next month's management fee is waived."],
              ["Cleaning guarantee", "If a guest arrives and something isn't right, we make it right within 4 hours or the stay is free."],
              ["Guest quality", "Every booking is screened. No parties, no subletting, no unregistered guests — ever."],
            ].map(([t, b]) => (
              <div key={t} className="p-8 md:p-12">
                <ShieldCheck className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 text-2xl text-cream">{t}</h3>
                <p className="mt-4 text-cream/60 text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary border-y border-border py-20 md:py-40">
        <div className="container-x text-center">
          <h2 className="text-4xl md:text-6xl max-w-3xl mx-auto">
            Ready to make your property work for you?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Tell us about your property and we'll prepare a tailored proposal
            within one business day.
          </p>
          <Link
            to="/contact"
            className="btn-primary mt-10 inline-flex"
          >
            Get your free proposal
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
