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
  component: function () {
    return (
      <SiteLayout>
        <main className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl text-muted-foreground">
              Coming soon
            </h1>
          </div>
        </main>
      </SiteLayout>
    );
  },
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
