import type { ReactNode } from "react";
import type { ProductStatus } from "@/lib/products";

const STATUS: Record<ProductStatus, { label: string; className: string }> = {
  available: {
    label: "Available",
    className: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30",
  },
  "in-development": {
    label: "In development",
    className: "bg-braoma-gold-soft text-braoma-gold ring-1 ring-braoma-gold/30",
  },
  "coming-soon": {
    label: "Coming soon",
    className: "bg-white/5 text-braoma-muted ring-1 ring-white/10",
  },
};

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  badgePrefix?: string;
  isFlagship?: boolean;
  /** Optional footer slot, e.g. a "Learn more" link. */
  children?: ReactNode;
}

export default function ProductCard({
  name,
  tagline,
  description,
  status,
  badgePrefix,
  isFlagship = false,
  children,
}: ProductCardProps) {
  const s = STATUS[status];
  return (
    <div
      className={`flex h-full flex-col rounded-xl bg-braoma-navy-deep/60 p-7 transition ${
        isFlagship
          ? "ring-1 ring-braoma-gold/50 shadow-[0_0_44px_-14px_rgba(212,175,55,0.35)]"
          : "ring-1 ring-braoma-border hover:ring-braoma-gold/35"
      }`}
    >
      <span
        className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${s.className}`}
      >
        {badgePrefix ? `${badgePrefix} · ` : ""}
        {s.label}
      </span>
      <h3 className="mt-5 font-serif text-2xl tracking-tight text-braoma-cream">
        {name}
      </h3>
      <p className="mt-1 text-sm font-medium text-braoma-gold">{tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-braoma-muted">
        {description}
      </p>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
