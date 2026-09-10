import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Shop — BSM Traders Co.",
  description:
    "Browse and buy quality consumer goods from BSM Traders Co. online, with secure checkout by card or PayPal.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        crumb="Shop"
        title="Order online, checkout securely"
        subtitle="Browse our catalog and check out directly with card or PayPal. Need a bulk or custom order instead? Use our quote form on the Contact page."
      />

      <ProductGrid />

      <section className="testimonials">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="kicker">Need a bulk order?</span>
          <h2 style={{ color: "#fff", fontSize: 28, marginBottom: 22 }}>Get a custom wholesale quote instead</h2>
          <Link className="btn gold" href="/contact">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
