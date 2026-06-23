"use client";

import { useId } from "react";

/**
 * Braoma logo — interlocked B + A monogram (Braoma + Automation), matching the
 * brand mark used on the hero. Flat gold for crisp nav/favicon use. useId()
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
        <g
          transform="translate(-3.5,0)"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* B */}
          <path d="M34 11 V53" />
          <path d="M34 11 H43 C55 11 55 32 43 32 H34" />
          <path d="M34 32 H45 C57 32 57 53 45 53 H34" />
          {/* A interlocked */}
          <path d="M14 53 L30 11" />
          <path d="M20 38 H33" />
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
