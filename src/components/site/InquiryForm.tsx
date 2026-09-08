import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { Field } from "@/components/ui/Field";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as
  | string
  | undefined;

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSending(true);
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    if (!FORMSPREE_ENDPOINT) {
      setError(true);
      setSending(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Formspree rejected the submission");
      setSent(true);
    } catch (err) {
      console.error("Form submission failed:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-border bg-background p-12 text-center">
        <Check className="h-10 w-10 text-gold mx-auto" strokeWidth={1.4} />
        <h3 className="mt-6 text-3xl">Thank you.</h3>
        <p className="mt-4 text-muted-foreground">
          Your message has been sent. We'll get back to you shortly.
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
        <Field label="Instagram / Social Media" name="social" />
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
      {error && (
        <p className="text-sm text-destructive">
          Something went wrong — please email us directly at
          roderick@roderickfanou.com.
        </p>
      )}
      <button type="submit" className="btn-primary" disabled={sending}>
        {sending ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
