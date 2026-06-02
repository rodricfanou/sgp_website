import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Field } from "@/components/ui/Field";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Inquiry from ${data.get("name") || "website"}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "—"}\nInterest: ${data.get("interest")}\n\n${data.get("message") || ""}`,
    );
    window.location.href = `mailto:roderick@roderickfanou.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-border bg-background p-12 text-center">
        <Check className="h-10 w-10 text-gold mx-auto" strokeWidth={1.4} />
        <h3 className="mt-6 text-3xl">Thank you.</h3>
        <p className="mt-4 text-muted-foreground">
          Your email client should have opened. We'll respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 bg-background border border-border p-8 md:p-10"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <div>
          <label htmlFor="interest" className="eyebrow block mb-3">
            I'm interested in
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full bg-transparent border-b border-foreground py-3 text-base focus:outline-none focus:border-gold"
            defaultValue="Listing my property"
          >
            <option>Listing my property</option>
            <option>Corporate housing</option>
            <option>Booking a stay</option>
            <option>Something else</option>
          </select>
        </div>
      </div>
      <Field label="Message" name="message" textarea colSpan />
      <button type="submit" className="btn-primary">
        Send inquiry
      </button>
    </form>
  );
}
