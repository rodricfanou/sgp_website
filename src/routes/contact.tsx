import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Field } from "@/components/ui/Field";
import { useState, type FormEvent } from "react";
import { Mail, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Summit Global Property" },
      {
        name: "description",
        content:
          "Reach Summit Global Property for property management partnerships, corporate housing, and guest stays.",
      },
      { property: "og:title", content: "Contact Summit Global Property" },
      {
        property: "og:description",
        content:
          "Tell us about your property or your stay — we typically respond within one business day.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name =
      `${data.get("firstName") || ""} ${data.get("lastName") || ""}`.trim() ||
      "website";
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "—"}\nInterest: ${data.get("interest")}\n\n${data.get("message") || ""}`,
    );
    window.location.href = `mailto:roderick@roderickfanou.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="pt-40 pb-12 md:pt-52 md:pb-16">
        <div className="container-x">
          <span className="gold-line" />
          <p className="eyebrow mt-6">Contact</p>
          <h1 className="mt-6 text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            Let's start a <span className="italic text-gold">conversation</span>
            .
          </h1>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-40">
        <div className="grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <p className="eyebrow">Inquiries</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Owners, corporate clients, and travelers are all welcome. We
                typically respond within one business day.
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1">roderick@roderickfanou.com</p>
                </div>
              </li>

            </ul>
          </aside>

          <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-16">
            {sent ? (
              <div className="border border-border p-12 text-center bg-card">
                <Check
                  className="h-10 w-10 text-gold mx-auto"
                  strokeWidth={1.4}
                />
                <h2 className="mt-6 text-3xl">Thank you.</h2>
                <p className="mt-4 text-muted-foreground">
                  Your email client should have opened. We'll be in touch
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name" name="lastName" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div>
                  <label className="eyebrow block mb-3" htmlFor="interest">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full bg-transparent border-b border-foreground py-3 text-base focus:outline-none focus:border-gold"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Listing my property</option>
                    <option>Corporate housing</option>
                    <option>Booking a stay</option>
                    <option>Something else</option>
                  </select>
                </div>
                <Field label="Tell us more" name="message" textarea />
                <button type="submit" className="btn-primary">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
