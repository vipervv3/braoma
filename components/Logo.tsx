"use client";

import { useId } from "react";

/**
 * Braoma logo — a B with "AI" inside it (a small A + I in the B's open counters:
 * B + A + I = Braoma + AI). Flat gold for crisp nav/favicon use. useId()
 * namespaces the gradient (colons stripped — they break url(#...) references).
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
        {/* B */}
        <g
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 9 V55" />
          <path d="M18 9 H38 C53 9 53 32 38 32 H18" />
          <path d="M18 32 H40 C55 32 55 55 40 55 H18" />
        </g>
        {/* A + I inside */}
        <g
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M30 26 L35 15 L40 26" />
          <path d="M32.2 22 H37.8" />
          <path d="M36 38 V50" />
          <path d="M33 38 H39" />
          <path d="M33 50 H39" />
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
