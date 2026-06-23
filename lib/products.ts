export type ProductStatus = "available" | "in-development" | "coming-soon";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  /** Short blurb for the homepage grid. */
  short: string;
  /** Fuller description for the products page. */
  long: string;
  status: ProductStatus;
  /** Extra label shown before the status, e.g. "Flagship". */
  badgePrefix?: string;
  isFlagship?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: "frontline",
    name: "Braoma Frontline",
    tagline: "Hospitality Intelligence Suite",
    short:
      "AI built for hotels and the teams that run them — turning the daily flood of operational detail into clear, on-time decisions.",
    long: "A suite of AI tools built for hotels and the people who run them. Braoma Frontline turns the daily flood of operational detail — bookings, staffing, guest signals, the small fires — into clear, on-time decisions. It was shaped by three decades inside the industry, not guessed at from the outside, which is why it fits the way frontline teams actually work.",
    status: "available",
    badgePrefix: "Flagship",
    isFlagship: true,
  },
  {
    slug: "assistant",
    name: "Braoma Assistant",
    tagline: "AI Personal Assistant",
    short:
      "A personal assistant that listens, organizes, and follows through — so nothing you say in a meeting ever slips.",
    long: "A personal assistant that listens, organizes, and follows through. Braoma Assistant captures your meetings and notes, then turns them into tasks, plans, and reminders — quietly keeping the whole picture in order so nothing slips. Less time managing your work, more time doing it.",
    status: "in-development",
  },
  {
    slug: "safety",
    name: "Braoma Safety",
    tagline: "Traveler Safety App",
    short:
      "Peace of mind for people on the move — real-time guidance, check-ins, and alerts wherever the trip leads.",
    long: "Peace of mind for people on the move. Braoma Safety brings real-time guidance, check-ins, and timely alerts to travelers, helping them stay aware and stay safe wherever the trip takes them — and giving the people who care about them one less thing to worry about.",
    status: "in-development",
  },
  {
    slug: "more",
    name: "More on the way",
    tagline: "Expanding the Portfolio",
    short:
      "We're just getting started. New products are in the works across the spaces where good software is still missing.",
    long: "We're just getting started. New products are in the works across the spaces where good software is still missing — each grounded in the same real-world expertise that shapes everything we build. There's more to come.",
    status: "coming-soon",
  },
];
