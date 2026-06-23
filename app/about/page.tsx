import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Braoma",
  description:
    "Braoma builds AI-powered solutions grounded in real industry expertise — with a mission to simplify life and empower people through innovation.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-12 pt-20 sm:pt-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
            About Braoma
          </span>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] tracking-tight text-braoma-cream sm:text-6xl">
            Technology that understands the people it serves.
          </h1>
        </section>

        {/* Mission + Vision */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-braoma-navy-deep/60 p-9 ring-1 ring-braoma-border">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
                Our mission
              </h2>
              <p className="mt-5 font-serif text-2xl leading-relaxed tracking-tight text-braoma-cream">
                To create intelligent technology that simplifies life, enhances
                productivity, and empowers people through innovation.
              </p>
            </div>
            <div className="rounded-2xl bg-braoma-navy-deep/60 p-9 ring-1 ring-braoma-border">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
                Our vision
              </h2>
              <p className="mt-5 font-serif text-2xl leading-relaxed tracking-tight text-braoma-cream">
                To become a globally trusted technology company delivering
                AI-powered solutions that improve how people live, work, travel,
                and connect.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-6 py-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-braoma-gold">
            Our story
          </span>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-braoma-muted">
            <p>
              Braoma was founded on a simple conviction: the best software comes
              from people who have lived the problems it solves. Our founder
              spent three decades in hospitality operations, running and scaling
              more than 30 properties — close enough to the work to know exactly
              where technology helps and where it just gets in the way.
            </p>
            <p>
              We started with hospitality because we know it intimately, but the
              idea travels. Across every industry there are people doing hard,
              detailed work without tools that truly understand it. Braoma exists
              to close that gap — bringing real-world expertise to AI software,
              one product at a time.
            </p>
            <p>
              We build calmly and deliberately. Every product has to earn its
              place by making someone&apos;s day genuinely easier. That standard
              is the whole company.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/products" size="lg">
              See what we&apos;re building
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
