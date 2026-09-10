"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useWishlist } from "@/lib/wishlist";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { ids: wishlistIds } = useWishlist();

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="contact-strip">
            <a href="tel:3213990783">321-399-0783</a>
            <a href="mailto:info@bsmtraders.com">info@bsmtraders.com</a>
          </div>
          <span className="tag">Quality Products. Better Value.</span>
        </div>
      </div>

      <header className="site">
        <div className="wrap nav-row">
          <Link className="brand" href="/">
            <Image src="/logo-compact.jpg" alt="BSM Traders Co. logo" width={200} height={117} style={{ height: 52, width: "auto" }} priority />
          </Link>

          <nav className="primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <SearchBar />
            <Link className="wish-header-btn" href="/wishlist" aria-label="Wishlist">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
              </svg>
              {wishlistIds.length > 0 && <span className="count">{wishlistIds.length}</span>}
            </Link>
            <a className="cart-btn snipcart-checkout" href="#" role="button" aria-label="Open cart">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="count" id="cart-count">0</span>
              <span className="cart-total" id="cart-total"></span>
            </a>
            <Link className="btn outline" href="/contact">Request a Quote</Link>
            <button
              className="menu-toggle"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
