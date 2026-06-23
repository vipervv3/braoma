import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
              AI built by industry insiders
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-braoma-cream sm:text-6xl">
              Intelligent technology that{" "}
              <span className="italic text-braoma-gold">simplifies life.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-braoma-muted">
              Braoma builds AI-powered products that improve how people live,
              work, travel, and connect — shaped by people who&apos;ve done the
              work, not just studied it.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" size="lg">
                Explore our products
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                About Braoma
              </Button>
            </div>
          </div>
        </section>

        {/* What we're building */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
              What we&apos;re building
            </span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-braoma-cream sm:text-4xl">
              A portfolio of products, one standard.
            </h2>
            <p className="mt-4 text-braoma-muted">
              Every Braoma product starts from the same place: a real problem,
              understood from the inside, solved with technology that respects
              the people using it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {PRODUCTS.map((p) => (
              <ProductCard
                key={p.slug}
                name={p.name}
                tagline={p.tagline}
                description={p.short}
                status={p.status}
                badgePrefix={p.badgePrefix}
                isFlagship={p.isFlagship}
              />
            ))}
          </div>
        </section>

        {/* Founder credibility */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-2xl bg-braoma-navy-deep/60 px-8 py-14 ring-1 ring-braoma-border sm:px-14">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
                Built on experience
              </span>
              <p className="mt-5 font-serif text-2xl leading-relaxed tracking-tight text-braoma-cream sm:text-3xl">
                Braoma was founded by a hospitality operations leader who spent
                three decades running and scaling more than 30 properties.
              </p>
              <p className="mt-5 leading-relaxed text-braoma-muted">
                That&apos;s the difference behind everything we build: AI shaped
                by people who&apos;ve lived the problems they&apos;re solving.
                Technology should understand the industry it serves — ours does.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
