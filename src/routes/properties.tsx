import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import interiorKitchen from "@/assets/interior-kitchen.jpg";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Summit Global Collection" },
      {
        name: "description",
        content:
          "Browse Summit Global Property's curated collection of fully-furnished homes for short and extended stays.",
      },
      {
        property: "og:title",
        content: "The Collection — Summit Global Property",
      },
      {
        property: "og:description",
        content:
          "A curated portfolio of fully-furnished residences across the Southeast.",
      },
      { property: "og:url", content: "/properties" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: PropertiesPage,
});

const properties = [
  {
    img: property1,
    name: "The Maple House",
    city: "Asheville, NC",
    type: "Craftsman",
    beds: 4,
    baths: 3,
    guests: 8,
  },
  {
    img: property2,
    name: "Linden Row",
    city: "Austin, TX",
    type: "Townhouse",
    beds: 3,
    baths: 2.5,
    guests: 6,
  },
  {
    img: property3,
    name: "Stonebrook Manor",
    city: "Nashville, TN",
    type: "Estate",
    beds: 5,
    baths: 4,
    guests: 10,
  },
  {
    img: interiorLiving,
    name: "Willow Loft",
    city: "Charleston, SC",
    type: "Loft",
    beds: 2,
    baths: 2,
    guests: 4,
  },
  {
    img: interiorBedroom,
    name: "Ember Cottage",
    city: "Savannah, GA",
    type: "Cottage",
    beds: 2,
    baths: 1,
    guests: 4,
  },
  {
    img: interiorKitchen,
    name: "Marble & Oak",
    city: "Raleigh, NC",
    type: "Residence",
    beds: 3,
    baths: 2,
    guests: 6,
  },
];

function PropertiesPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 md:pt-52 md:pb-24 border-b border-border">
        <div className="container-x grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <span className="gold-line" />
            <p className="eyebrow mt-6">The Collection</p>
            <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95]">
              Homes designed to be{" "}
              <span className="italic text-gold">lived in</span>.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-muted-foreground">
            <p>
              Every Summit Global Property residence is fully furnished,
              professionally cleaned, and prepared for guests who expect more
              than a rental.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <article key={p.name} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{p.city}</p>
                  <h2 className="text-2xl mt-2">{p.name}</h2>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground pt-3">
                  {p.type}
                </span>
              </div>
              <div className="mt-4 flex gap-6 text-sm text-muted-foreground border-t border-border pt-4">
                <span>{p.beds} bed</span>
                <span>{p.baths} bath</span>
                <span>Sleeps {p.guests}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-28 text-center border-t border-border">
        <h2 className="text-4xl md:text-5xl">
          Looking for something specific?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Tell us your dates, party size, and city — we'll match you with the
          right home.
        </p>
        <Link to="/contact" className="btn-primary mt-10 inline-flex">
          Inquire now
        </Link>
      </section>
    </SiteLayout>
  );
}
