import Link from "next/link";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Services — BSM Traders Co.",
  description:
    "BSM Traders Co. offers product sourcing, wholesale distribution, transparent pricing, and dedicated order support for retailers and businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Sourcing and distribution, handled end to end"
        subtitle="We work as an extension of your purchasing team — finding the right products, negotiating fair pricing, and getting them to your door on schedule."
      />

      <section className="services">
        <div className="wrap">
          <div className="service-ledger">
            <div className="service-row">
              <span className="idx">01</span>
              <div><h3>Product Sourcing</h3><p className="desc" style={{ marginTop: 8, maxWidth: "60ch" }}>We identify and vet suppliers across our product categories to keep quality consistent and costs predictable. If you need something outside our standard catalog, tell us and we&apos;ll source it.</p></div>
              <span className="desc">Grocery · Household · Beauty · General merchandise</span>
            </div>
            <div className="service-row">
              <span className="idx">02</span>
              <div><h3>Wholesale Distribution</h3><p className="desc" style={{ marginTop: 8, maxWidth: "60ch" }}>Bulk and case-pack orders fulfilled accurately, with clear timelines from confirmation to delivery. We handle packing and shipping coordination so your stock arrives ready to sell.</p></div>
              <span className="desc">Nationwide shipping</span>
            </div>
            <div className="service-row">
              <span className="idx">03</span>
              <div><h3>Pricing &amp; Quotes</h3><p className="desc" style={{ marginTop: 8, maxWidth: "60ch" }}>Transparent, competitive quotes tailored to order volume — no hidden markups. Larger and recurring orders receive tiered pricing.</p></div>
              <span className="desc">Volume-based tiers</span>
            </div>
            <div className="service-row">
              <span className="idx">04</span>
              <div><h3>Order Support</h3><p className="desc" style={{ marginTop: 8, maxWidth: "60ch" }}>A direct point of contact for every account, from first order to reorder — including help with tracking, returns, and reordering.</p></div>
              <span className="desc">Direct line: 321-399-0783</span>
            </div>
            <div className="service-row">
              <span className="idx">05</span>
              <div><h3>Online Ordering</h3><p className="desc" style={{ marginTop: 8, maxWidth: "60ch" }}>Browse and buy select items directly through our online shop with secure checkout — ideal for smaller or one-off orders.</p></div>
              <span className="desc">Card &amp; PayPal accepted</span>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="section-head">
            <div><span className="kicker">How We Work</span><h2>From inquiry to delivery, in four steps</h2></div>
            <p className="support">A straightforward process so you know exactly what to expect when you order from BSM Traders Co.</p>
          </div>
          <div className="steps">
            <div className="step"><div className="step-num">01</div><h3>Tell us what you need</h3><p>Share your product list, volumes, and timeline with our team.</p></div>
            <div className="step"><div className="step-num">02</div><h3>Get a clear quote</h3><p>We price it out transparently — no surprises at checkout.</p></div>
            <div className="step"><div className="step-num">03</div><h3>We source &amp; prepare</h3><p>Your order is sourced, quality-checked, and packed for shipment.</p></div>
            <div className="step"><div className="step-num">04</div><h3>Delivered on schedule</h3><p>Your goods arrive on time, with support available after the sale.</p></div>
          </div>
        </div>
      </section>

      <Faq />

      <section className="testimonials">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="kicker">Ready to talk?</span>
          <h2 style={{ color: "#fff", fontSize: 28, marginBottom: 22 }}>Let&apos;s scope out your order</h2>
          <Link className="btn gold" href="/contact">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
