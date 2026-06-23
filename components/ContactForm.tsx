"use client";

import { useState } from "react";
import Button from "@/components/Button";

const inputClass =
  "w-full rounded-md border border-braoma-border bg-braoma-navy-deep/60 px-4 py-3 text-sm text-braoma-cream placeholder:text-braoma-muted/70 outline-none transition focus:border-braoma-gold/60 focus-visible:ring-2 focus-visible:ring-braoma-gold/40";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Placeholder — wiring to a real endpoint comes later.
    console.log("Contact form submission", {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });
    setSent(true);
    e.currentTarget.reset();
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-braoma-navy-deep/60 p-8 ring-1 ring-braoma-gold/30">
        <p className="font-serif text-xl text-braoma-cream">Thank you.</p>
        <p className="mt-2 text-sm leading-relaxed text-braoma-muted">
          Your message has been received. We&apos;ll be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-medium text-braoma-gold transition hover:opacity-80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-braoma-cream"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-braoma-cream"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-braoma-cream"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className={`${inputClass} resize-y`}
        />
      </div>
      <Button type="submit" size="lg">
        Send message
      </Button>
    </form>
  );
}
