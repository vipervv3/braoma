import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — Braoma",
  description:
    "Braoma Frontline, Braoma Assistant, Braoma Safety, and more — AI-powered products grounded in real industry expertise.",
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-10 pt-20 sm:pt-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
            Our products
          </span>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] tracking-tight text-braoma-cream sm:text-6xl">
            Built for the work, not the demo.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-braoma-muted">
            One flagship available today, more in active development — each one
            solving a problem we understand from the inside.
          </p>
        </section>

        {/* Cards */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {PRODUCTS.map((p) => (
              <ProductCard
                key={p.slug}
                name={p.name}
                tagline={p.tagline}
                description={p.long}
                status={p.status}
                badgePrefix={p.badgePrefix}
                isFlagship={p.isFlagship}
              >
                {p.status !== "coming-soon" ? (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-braoma-gold transition hover:gap-2.5"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </ProductCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
