import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-braoma-border bg-braoma-navy-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <Logo size={32} />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-braoma-muted">
            Intelligent technology that simplifies life — grounded in real
            industry expertise.
          </p>
          <p className="mt-6 text-xs text-braoma-muted">
            © {year} Braoma. All rights reserved.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-braoma-cream">
            Products
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              "Braoma Frontline",
              "Braoma Assistant",
              "Braoma Safety",
            ].map((name) => (
              <li key={name}>
                <Link
                  href="/products"
                  className="text-braoma-muted transition hover:text-braoma-gold"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-braoma-cream">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href="/about"
                className="text-braoma-muted transition hover:text-braoma-gold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-braoma-muted transition hover:text-braoma-gold"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://kbmcollective.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-braoma-muted transition hover:text-braoma-gold"
              >
                KBM Collective
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-braoma-muted transition hover:text-braoma-gold"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
