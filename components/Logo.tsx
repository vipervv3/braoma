"use client";

import { useId } from "react";

/**
 * Braoma logo — a serif "B" with the brand's AI hidden in its counters:
 * the top counter is the triangle of an "A", the bottom is the stem of an "I".
 * Reads as a confident B at a glance; the "AI" rewards a closer look.
 *
 * Drawn with a mask so the counters are true negative space (works on any
 * background). useId() namespaces the mask/gradient so multiple instances on a
 * page don't collide (colons stripped — they break url(#...) references).
 */
export default function Logo({
  size = 34,
  showWordmark = true,
  className = "",
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const maskId = `braomaB-${uid}`;
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
          <mask id={maskId}>
            <rect width="64" height="64" fill="black" />
            {/* B silhouette */}
            <rect x="15" y="10" width="11" height="44" rx="2.5" fill="white" />
            <path d="M23 10 H38 C50 10 50 31 38 31 H23 Z" fill="white" />
            <path d="M23 33 H40 C52 33 52 54 40 54 H23 Z" fill="white" />
            {/* hidden "A" — triangular top counter */}
            <polygon points="34,15 42,28 26,28" fill="black" />
            {/* hidden "I" — slit bottom counter */}
            <rect x="31" y="37" width="7" height="14" rx="3.5" fill="black" />
          </mask>
        </defs>
        <rect width="64" height="64" fill={`url(#${gradId})`} mask={`url(#${maskId})`} />
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
