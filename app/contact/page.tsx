import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Braoma",
  description:
    "Get in touch with Braoma. We'd love to hear from you about our AI-powered products.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="mx-auto max-w-3xl px-6 pb-20 pt-20 sm:pt-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
            Contact us
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight text-braoma-cream sm:text-6xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-braoma-muted">
            Questions about our products, partnerships, or what we&apos;re
            building next? Send us a note and we&apos;ll get back to you. You can
            also reach us directly at{" "}
            <a
              href="mailto:hello@braoma.com"
              className="text-braoma-gold transition hover:opacity-80"
            >
              hello@braoma.com
            </a>
            .
          </p>

          <div className="mt-12">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
