import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import interiorKitchen from "@/assets/interior-kitchen.jpg";
import interiorLiving from "@/assets/interior-living.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Summit Global Property" },
      {
        name: "description",
        content:
          "A modern team building a more thoughtful approach to property management.",
      },
      { property: "og:title", content: "About — Summit Global Property" },
      {
        property: "og:description",
        content:
          "Our story, our values, and the people behind Summit Global Property.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 md:pt-52 md:pb-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <span className="gold-line" />
            <p className="eyebrow mt-6">About</p>
          </div>
          <div className="lg:col-span-9">
            <h1 className="text-5xl md:text-7xl leading-[0.95]">
              A modern business
              <br />
              built on <span className="italic text-gold">trust</span>,<br />
              hospitality, and craft.
            </h1>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7 aspect-[16/10] overflow-hidden">
          <img
            src={interiorLiving}
            alt="Interior"
            width={1600}
            height={1100}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-5 aspect-[4/5] overflow-hidden">
          <img
            src={interiorKitchen}
            alt="Kitchen"
            width={1280}
            height={1600}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="py-20 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              A decade of caring for homes — and the people in them.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Summit Global Property began with a simple frustration: properties
              weren't being treated like homes, and guests weren't being treated
              like family.
            </p>
            <p>
              Today we partner with corporations and private owners to deliver a
              stylish, modern renting experience — fully-furnished homes for
              short stays, with the discipline of a hospitality business behind
              every reservation.
            </p>
            <p>
              We're still small enough that the owners answer the phone, and
              large enough to scale with your portfolio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-20 md:py-40">
        <div className="container-x grid gap-12 md:grid-cols-3">
          {[
            [
              "Care",
              "Every home is treated like our own — daily cleaning, fresh details, real maintenance.",
            ],
            [
              "Clarity",
              "Transparent reporting, plain-English contracts, on-time payouts every month.",
            ],
            [
              "Craft",
              "Considered design, considered hospitality, considered operations.",
            ],
          ].map(([t, b]) => (
            <div key={t} className="border-t border-cream/15 pt-8">
              <p className="font-serif text-4xl text-gold">{t}</p>
              <p className="mt-4 text-cream/70 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-28 md:py-40 text-center">
        <h2 className="text-4xl md:text-6xl">
          Let's build something together.
        </h2>
        <Link to="/contact" className="btn-primary mt-10 inline-flex">
          Get in touch
        </Link>
      </section>
    </SiteLayout>
  );
}
