import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Logo } from "@/components/site/Logo";
import { InquiryForm } from "@/components/site/InquiryForm";
import heroHome from "@/assets/hero-home.jpg";
import interiorKitchen from "@/assets/interior-kitchen.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import outside1 from "@/assets/slides/outside1.jpg";
import outside2 from "@/assets/slides/outside2.jpg";
import outside4 from "@/assets/slides/outside4.jpg";
import inside2 from "@/assets/slides/inside2.jpg";
import inside3 from "@/assets/slides/inside3.jpg";
import inside4 from "@/assets/slides/inside4.jpg";
import kitchen3 from "@/assets/slides/kitchen3.jpg";
import living1 from "@/assets/slides/living1.jpg";
import living2 from "@/assets/slides/living2.jpg";
import living3 from "@/assets/slides/living3.jpg";
import living4 from "@/assets/slides/living4.jpg";
import livingkitchen1 from "@/assets/slides/livingkitchen1.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Sparkles,
  ShieldCheck,
  KeyRound,
  Clock,
  Users,
  TrendingUp,
  Home,
  Briefcase,
  Wallet,
  Handshake,
  CalendarCheck,
  Wrench,
  MessageSquareText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Summit Global Property — Luxury Property Management & Corporate Housing",
      },
      {
        name: "description",
        content:
          "Luxury property management and corporate housing in the Southeast. We help homeowners maximize income through professionally managed furnished residences.",
      },
      {
        property: "og:title",
        content:
          "Summit Global Property — Luxury Property Management & Corporate Housing",
      },
      {
        property: "og:description",
        content:
          "Premium property management and corporate housing. Partner with us or book for your team.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <ImageCarousel
          className="absolute inset-0"
          images={[
            { src: heroHome, alt: "Luxury home at golden hour" },
            { src: outside1, alt: "Luxury home exterior" },
            { src: outside4, alt: "Property exterior at twilight" },
            { src: outside2, alt: "Home exterior at sunset" },
          ]}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/80" />
        <div className="container-x relative pb-16 md:pb-32 pt-36 text-cream">
          <h1 className="mt-12 max-w-4xl font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Earn More From Your Property.{" "}
            <span className="italic text-gold">We Handle Everything.</span>
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-cream/80 text-base md:text-lg leading-relaxed">
            Professional property management and corporate housing solutions for
            homeowners seeking higher returns and less hassle.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
            <Link
              to="/contact"
              className="btn-primary bg-cream text-ink hover:bg-gold hover:text-gold-foreground text-center flex-1 sm:flex-none"
            >
              List My Property
            </Link>
            <Link
              to="/contact"
              className="btn-outline text-cream text-center flex-1 sm:flex-none"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHOOSE YOUR PATH */}
      <section className="py-20 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">Choose your path</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              What brings you{" "}
              <span className="italic text-gold">here today</span>?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/contact"
              className="group block bg-secondary border border-border p-10 md:p-14 hover:bg-ink hover:text-cream transition-all duration-500"
            >
              <Home className="h-8 w-8 text-gold group-hover:text-gold" strokeWidth={1.2} />
              <h3 className="mt-8 text-3xl md:text-4xl">Property Owners</h3>
              <p className="mt-4 text-muted-foreground group-hover:text-cream/70 leading-relaxed max-w-sm">
                Increase income without managing guests, cleaners, or maintenance.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold group-hover:gap-3 transition-all">
                Get started <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link
              to="/corporate-housing"
              className="group block bg-secondary border border-border p-10 md:p-14 hover:bg-ink hover:text-cream transition-all duration-500"
            >
              <Briefcase className="h-8 w-8 text-gold group-hover:text-gold" strokeWidth={1.2} />
              <h3 className="mt-8 text-3xl md:text-4xl">Corporate Housing</h3>
              <p className="mt-4 text-muted-foreground group-hover:text-cream/70 leading-relaxed max-w-sm">
                Flexible furnished housing for executives, healthcare professionals, and relocating teams.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST BAR */}
      <section className="border-y border-border bg-secondary">
        <div className="container-x py-8 md:py-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm">
            {[
              "Vetted Corporate Guests",
              "Monthly Owner Payouts",
              "Professional Cleaning",
              "Full-Service Management",
              "24-Hour Guest Support",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 text-muted-foreground">
                <svg className="h-4 w-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

{false && (
      <section className="py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6">What we do</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Hospitality for guests. Peace of mind for owners.
            </h2>
          </div>

          <div className="grid gap-px bg-border border border-border">
            {[
              {
                icon: KeyRound,
                title: "Corporate Housing",
                body: "Fully-furnished residences for executives, interns, relocating teams, and healthcare professionals.",
                link: "/corporate-housing",
              },
              {
                icon: Sparkles,
                title: "Short-Term Stays",
                body: "Curated homes for families, couples, and groups seeking a more personal alternative to hotels.",
              },
              {
                icon: ShieldCheck,
                title: "Asset Protection",
                body: "Daily housekeeping and a vetted guest model dramatically reduces wear and damage risk.",
              },
              {
                icon: Building2,
                title: "Owner Partnerships",
                body: "Transparent, on-time monthly payouts so you can enjoy the freedom your real estate offers.",
              },
            ].map(({ icon: Icon, title, body, link }) => (
              <div
                key={title}
                className="bg-background p-8 md:p-12 md:[grid-column:span_6] lg:[grid-column:span_3] group"
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 md:mt-8 text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {body}
                </p>
                {link && (
                  <Link
                    to={link as "/corporate-housing"}
                    className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {false && (
      <section className="container-x">
        <div className="grid gap-4 md:gap-6 md:grid-cols-12">
          <div className="md:col-span-7 overflow-hidden md:h-[420px]">
            <img
              src={interiorLiving}
              alt="Living room"
              width={1600}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover object-[center_12%]"
            />
          </div>
          <div className="md:col-span-5 overflow-hidden md:h-[420px]">
            <img
              src={interiorKitchen}
              alt="Kitchen"
              width={1280}
              height={1600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      )}

      {/* SECTION 4: WHY OWNERS CHOOSE SUMMIT */}
      <section className="py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6">Why owners choose Summit</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              More income. Less stress.{" "}
              <span className="italic text-gold">Real results</span>.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[{
                icon: Users,
                title: "Professional Guest Screening",
                body: "Every booking is vetted. We only accept verified corporate clients and responsible travelers.",
              },
              {
                icon: ShieldCheck,
                title: "Property Protection",
                body: "Daily professional cleaning and regular maintenance preserve your home's condition.",
              },
              {
                icon: Clock,
                title: "Hands-Off Ownership",
                body: "We manage everything — marketing, bookings, cleaning, and support — so you stay free.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-background border border-border p-8 md:p-10">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary inline-flex">
              List Your Property
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY PROPERTY OWNERS TRUST US */}
      <section className="py-20 md:py-40 bg-secondary">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 items-end mb-16">
            <div className="max-w-2xl">
              <span className="gold-line" />
              <p className="eyebrow mt-6">Why property owners trust us</p>
              <h2 className="mt-4 text-4xl md:text-5xl">
                Why Property Owners{" "}
                <span className="italic text-gold">Trust Us</span>.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                SGP brings together dependable management, attentive property
                care, and clear communication to create a more confident and
                streamlined ownership experience.
              </p>
            </div>
            <ImageCarousel
              className="relative w-full aspect-[16/10]"
              images={[
                { src: living1, alt: "Living room" },
                { src: living2, alt: "Open living space" },
                { src: living3, alt: "Bright living room" },
                { src: living4, alt: "Living room at dusk" },
              ]}
            />
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-3">
            {[
              {
                icon: Wallet,
                title: "Dependable Payments",
                body: "Enjoy consistent, timely payments designed to bring greater predictability and confidence to property ownership.",
              },
              {
                icon: Handshake,
                title: "Professional Partnership",
                body: "Work with a trusted team committed to professional service and long-term property care.",
              },
              {
                icon: ShieldCheck,
                title: "Greater Stability",
                body: "Longer lease terms help create greater stability while reducing turnover and tenant replacement costs.",
              },
              {
                icon: CalendarCheck,
                title: "Consistent Occupancy",
                body: "Active management helps keep your property well positioned and reduce unnecessary vacancy.",
              },
              {
                icon: Wrench,
                title: "Proactive Property Care",
                body: "Routine maintenance and oversight help protect your property's condition and long-term value.",
              },
              {
                icon: MessageSquareText,
                title: "Reliable Communication",
                body: "Stay informed with clear updates, responsive support, and straightforward communication.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-background p-8 md:p-12">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY SUMMIT */}
      <section className="py-20 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="gold-line" />
            <p className="eyebrow">Why Summit Global Property</p>
            <h2 className="text-4xl md:text-5xl">
              We do the work.{" "}
              <span className="italic text-gold">You earn the returns.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-muted-foreground leading-relaxed">
            <p>
              We help homeowners increase income through professionally
              managed furnished residences. Our team handles everything —
              from marketing and guest screening to cleaning and maintenance.
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Professional marketing",
                "Guest screening",
                "Deep cleaning",
                "Ongoing maintenance",
                "Dynamic pricing",
                "24/7 guest support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <svg className="h-3.5 w-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-medium">
              You receive monthly income without the daily workload.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-foreground font-medium border-b border-foreground pb-1 hover:gap-3 transition-all"
            >
              Start earning <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: OWNER SPLIT */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-40 grid gap-12 md:gap-16 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <ImageCarousel
              className="relative h-full w-full"
              images={[
                { src: interiorBedroom, alt: "Bedroom" },
                { src: inside3, alt: "Bedroom interior" },
                { src: inside4, alt: "Bright interior" },
                { src: inside2, alt: "Interior" },
                { src: kitchen3, alt: "Kitchen" },
                { src: livingkitchen1, alt: "Living kitchen" },
              ]}
            />
          </div>
          <div className="space-y-8">
            <span className="gold-line" />
            <p className="eyebrow !text-cream/60">For owners</p>
            <h2 className="text-cream text-4xl md:text-5xl">
              Why Partner With Us?
            </h2>
            <ul className="space-y-6">
              {[
                [
                  "Less wear & tear",
                  "Daily professional cleaning keeps every surface in top condition.",
                ],
                [
                  "Faithful, on-time payouts",
                  "Reliable monthly deposits — no chasing, no surprises.",
                ],
                [
                  "Better guest profile",
                  "Verified corporate clients and vetted travelers, not long-term tenants.",
                ],
                [
                  "End-to-end operations",
                  "Maintenance, marketing, supply, support — handled.",
                ],
              ].map(([t, b]) => (
                <li
                  key={t}
                  className="border-t border-cream/10 pt-5 flex gap-6"
                >
                  <span className="text-gold font-serif text-2xl leading-none">
                    ·
                  </span>
                  <div>
                    <p className="font-medium text-cream">{t}</p>
                    <p className="text-cream/60 text-sm mt-1 leading-relaxed">
                      {b}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-outline text-cream inline-block">
              Start Earning
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW SGP WORKS */}
      <section className="py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6">How SGP works</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Tell us your needs.{" "}
              <span className="italic text-gold">We'll handle the rest.</span>
            </h2>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-3">
            {[
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
            ].map(({ n, title, body }) => (
              <div key={n} className="bg-background p-8 md:p-12">
                <span className="font-serif text-5xl text-gold">{n}</span>
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: BRAND STAMP */}
      <section className="bg-ink py-20 md:py-28 border-y border-gold/20">
        <div className="container-x flex flex-col items-center text-center">
          <Logo size="xl" static />
          <p className="mt-10 font-serif italic text-gold text-xl md:text-2xl tracking-wide">
            Managing Properties. Elevating Value.
          </p>
        </div>
      </section>

      {/* SECTION 10: CONTACT */}
      <section id="inquiry" className="bg-secondary py-20 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="gold-line" />
            <p className="eyebrow">Get in touch</p>
            <h2 className="text-4xl md:text-5xl">
              Tell us about your{" "}
              <span className="italic text-gold">project</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Owners, corporate clients, and travelers are all welcome. Share a
              few details and we'll respond within one business day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
