/**
 * Braoma hero lockup — a metallic B with "AI" inside it (a small A + I sit in
 * the B's open counters: B + A + I = Braoma + AI), plus the wordmark + tagline.
 * Inline SVG so the gradient/glow render; the wordmark uses real text.
 */
export default function BrandMark() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-3xl px-12 py-10 [background:radial-gradient(ellipse_60%_55%_at_50%_42%,#23232a_0%,#15151a_55%,#0b0b0e_100%)] ring-1 ring-braoma-border">
        <svg
          width="220"
          height="220"
          viewBox="0 0 64 64"
          role="img"
          aria-label="Braoma — Automation & AI"
          className="mx-auto h-auto w-[160px] sm:w-[200px]"
        >
          <defs>
            <linearGradient id="braomaMetal" x1="0.1" y1="0" x2="0.5" y2="1">
              <stop offset="0" stopColor="#FDF3B0" />
              <stop offset="0.26" stopColor="#E9CD74" />
              <stop offset="0.5" stopColor="#C99A2E" />
              <stop offset="0.72" stopColor="#EAD080" />
              <stop offset="1" stopColor="#7E5C18" />
            </linearGradient>
            <filter id="braomaGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="0.7" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g fill="#FFF7D6">
            <circle cx="54" cy="11" r="1.3" opacity="0.8" />
            <circle cx="11" cy="46" r="1" opacity="0.55" />
            <circle cx="50" cy="50" r="0.8" opacity="0.5" />
          </g>
          <g filter="url(#braomaGlow)">
            {/* B shadow */}
            <g
              fill="none"
              stroke="#4a3811"
              strokeWidth="6.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0.7,1.1)"
            >
              <path d="M18 9 V55" />
              <path d="M18 9 H38 C53 9 53 32 38 32 H18" />
              <path d="M18 32 H40 C55 32 55 55 40 55 H18" />
            </g>
            {/* B main */}
            <g
              fill="none"
              stroke="url(#braomaMetal)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 9 V55" />
              <path d="M18 9 H38 C53 9 53 32 38 32 H18" />
              <path d="M18 32 H40 C55 32 55 55 40 55 H18" />
            </g>
            {/* B highlight */}
            <g
              fill="none"
              stroke="#FFF6CF"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
              transform="translate(-0.5,-0.7)"
            >
              <path d="M18 9 V52" />
              <path d="M18 9 H38 C51 9 53 18 52 22" />
            </g>
            {/* A + I inside the B */}
            <g
              fill="none"
              stroke="url(#braomaMetal)"
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
          </g>
        </svg>
        <div
          className="mt-5 text-center text-4xl font-extrabold tracking-[0.16em] sm:text-5xl"
          style={{
            paddingLeft: "0.16em",
            backgroundImage:
              "linear-gradient(180deg,#FDF3B0,#E6C766 38%,#C99A2E 60%,#8A661B)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          BRAOMA
        </div>
        <div className="mt-2 text-center text-xs font-medium uppercase tracking-[0.34em] text-braoma-gold sm:text-sm">
          Automation &amp; AI
        </div>
      </div>
    </div>
  );
}
