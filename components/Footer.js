import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
import PaymentBadges from "./PaymentBadges";

export default function Footer() {
  return (
    <footer>
      <Newsletter />
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-plate">
              <Image src="/logo-compact.jpg" alt="BSM Traders Co." width={160} height={94} style={{ height: 36, width: "auto" }} />
            </div>
            <p>BSM Traders Co. sources and distributes quality consumer goods for retailers and businesses nationwide — reliable service, fair pricing, every order.</p>
            <PaymentBadges />
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/gift-cards">Gift Cards</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Categories</h4>
            <ul>
              <li><Link href="/shop">Grocery &amp; Gourmet</Link></li>
              <li><Link href="/shop">Health &amp; Household</Link></li>
              <li><Link href="/shop">Beauty &amp; Personal Care</Link></li>
              <li><Link href="/shop">Home &amp; Kitchen</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:3213990783">321-399-0783</a></li>
              <li><a href="mailto:info@bsmtraders.com">info@bsmtraders.com</a></li>
              <li><span>7901 4th St N, Ste 10224</span></li>
              <li><span>St. Petersburg, FL 33702</span></li>
            </ul>
          </div>
        </div>
        <div className="bottom-bar">
          <span>&copy; {new Date().getFullYear()} BSM Traders Co. All rights reserved.</span>
          <div className="socials">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#c6cede"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5 5 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
