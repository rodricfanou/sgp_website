import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Logo } from "@/components/site/Logo";
import { InquiryForm } from "@/components/site/InquiryForm";
import heroHome from "@/assets/hero-home.jpg";
import interiorKitchen from "@/assets/interior-kitchen.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Sparkles,
  ShieldCheck,
  KeyRound,
  Clock,
  Users,
  CalendarCheck,
  TrendingUp,
  Quote,
  Home,
  Briefcase,
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

const stats = [
  { icon: Clock, label: "24-hour response", desc: "Guest support team on call" },
  { icon: Users, label: "100% verified", desc: "Vetted guests and corporate clients" },
  { icon: CalendarCheck, label: "Deep cleaned", desc: "Professional cleaning after every stay" },
  { icon: TrendingUp, label: "Monthly payouts", desc: "Transparent owner deposits, on time" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroHome}
          alt="Luxury home at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/80" />
        <div className="container-x relative pb-16 md:pb-32 pt-36 text-cream">
          <h1 className="mt-12 max-w-4xl font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Luxury Property Management &{" "}
            <span className="italic text-gold">Corporate Housing</span>.
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-cream/80 text-base md:text-lg leading-relaxed">
            We help homeowners maximize&nbsp;income through professionally
            managed furnished residences while providing exceptional stays for
            executives, traveling professionals, and relocating teams.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
            <Link
              to="/contact"
              className="btn-primary bg-cream text-ink hover:bg-gold hover:text-gold-foreground text-center flex-1 sm:flex-none"
            >
              Partner With Us
            </Link>
            <Link
              to="/corporate-housing"
              className="btn-outline text-cream text-center flex-1 sm:flex-none"
            >
              Request Corporate Housing
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHOOSE YOUR PATH */}
      <section className="py-20 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">Who we serve</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Tell us <span className="italic text-gold">who you are</span>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/contact"
              className="group block bg-secondary border border-border p-10 md:p-14 hover:bg-ink hover:text-cream transition-all duration-500"
            >
              <Home className="h-8 w-8 text-gold group-hover:text-gold" strokeWidth={1.2} />
              <h3 className="mt-8 text-3xl md:text-4xl">I Own Property</h3>
              <p className="mt-4 text-muted-foreground group-hover:text-cream/70 leading-relaxed max-w-sm">
                Maximize your income with professional management, vetted
                guests, and reliable monthly payouts.
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
              <h3 className="mt-8 text-3xl md:text-4xl">I Need Corporate Housing</h3>
              <p className="mt-4 text-muted-foreground group-hover:text-cream/70 leading-relaxed max-w-sm">
                Furnished, flexible homes for your team—executives, nurses,
                interns, and relocating hires.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS / TRUST */}
      <section className="border-y border-border bg-secondary">
        <div className="container-x py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {stats.map(({ icon: Icon, label, desc }) => (
              <div key={label}>
                <Icon
                  className="h-6 w-6 text-gold"
                  strokeWidth={1.4}
                />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] font-medium text-foreground">
                  {label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BENEFITS / WHAT WE DO */}
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
                body: "Fully-furnished residences for executives, traveling nurses, interns, and relocating teams.",
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

      {/* SECTION 5: IMAGE GRID */}
      <section className="container-x">
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

      {/* SECTION 6: HOW IT WORKS */}
      <section className="py-20 md:py-40">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="gold-line" />
            <p className="eyebrow mt-6">How it works</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              From first call to{" "}
              <span className="italic text-gold">first guest</span>.
            </h2>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Tell us about your property",
                body: "Share a few details online or over the phone. We'll schedule a walkthrough within 48 hours.",
              },
              {
                n: "02",
                title: "We prepare and list",
                body: "Our team handles furnishing, photography, pricing, and listing across major booking platforms.",
              },
              {
                n: "03",
                title: "You collect monthly income",
                body: "We manage everything—guests, cleaning, maintenance—and deposit your earnings monthly.",
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

      {/* SECTION 7: TESTIMONIAL */}
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

      {/* SECTION 8: ABOUT SUMMIT (poetic copy moved lower) */}
      <section className="py-20 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="gold-line" />
            <p className="eyebrow">About Summit Global Property</p>
            <h2 className="text-4xl md:text-5xl">
              A modern approach to property management.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We believe a home is more than four walls — it&rsquo;s the way
              light falls on a kitchen counter in the morning, the comfort of
              fresh linens after a long day, the quiet confidence that every
              detail has been considered.
            </p>
            <p>
              Summit Global Property partners with corporations and private
              owners to maximize the efficiency of your holdings while
              mitigating the wear of long-term tenants. The result: passive
              freedom for you, and a stylish, modern experience for your guests.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-foreground font-medium border-b border-foreground pb-1 hover:gap-3 transition-all"
            >
              Our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND STAMP */}
      <section className="bg-ink py-20 md:py-28 border-y border-gold/20">
        <div className="container-x flex flex-col items-center text-center">
          <Logo size="xl" static />
          <p className="mt-10 font-serif italic text-gold text-xl md:text-2xl tracking-wide">
            Managing Properties. Elevating Value.
          </p>
        </div>
      </section>

      {/* SECTION 9: OWNER SPLIT */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-40 grid gap-12 md:gap-16 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={interiorBedroom}
              alt="Bedroom"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <span className="gold-line" />
            <p className="eyebrow !text-cream/60">For owners</p>
            <h2 className="text-cream text-4xl md:text-5xl">
              Why list your property with us?
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
              Partner with us
            </Link>
          </div>
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
