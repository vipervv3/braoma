"use client";

import { useId } from "react";

/**
 * Braoma logo — a B+A monogram (Braoma + AI) inside a gold ring.
 * The vertical stem is shared: an "A" on the left, the "B" bowls on the right.
 * Flat vector so it scales from billboard to favicon. useId() namespaces the
 * gradient so multiple instances on a page don't collide (colons stripped —
 * they break url(#...) references).
 */
export default function Logo({
  size = 36,
  showWordmark = true,
  className = "",
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const gradId = `braomaGold-${uid}`;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="Braoma"
        className="shrink-0"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EBD27A" />
            <stop offset="1" stopColor="#C39B2E" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="27" fill="none" stroke={`url(#${gradId})`} strokeWidth="2.6" />
        <g
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* shared stem (A's right leg / B's spine) */}
          <path d="M30 17 V47" />
          {/* A — left leg + crossbar */}
          <path d="M18 47 L30 17" />
          <path d="M23.5 37 H30" />
          {/* B — two bowls */}
          <path d="M30 17 H37 C45 17 45 31 37 31 H30" />
          <path d="M30 31 H39 C48 31 48 47 39 47 H30" />
        </g>
      </svg>
      {showWordmark && (
        <span
          className="font-serif font-bold tracking-tight text-braoma-gold"
          style={{ fontSize: size * 0.64 }}
        >
          Braoma
        </span>
      )}
    </span>
  );
}
