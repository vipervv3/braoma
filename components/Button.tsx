import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-md font-medium tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-braoma-gold focus-visible:ring-offset-2 focus-visible:ring-offset-braoma-navy disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-braoma-gold text-braoma-navy-deep hover:bg-braoma-gold/90",
  secondary:
    "border border-braoma-border text-braoma-cream hover:bg-braoma-gold-soft hover:border-braoma-gold/40",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
