import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us — BSM Traders Co.",
  description:
    "Learn about BSM Traders Co., a Florida-based sourcing and distribution partner supplying quality consumer goods to retailers and businesses nationwide.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="A trading partner built on quality and value"
        subtitle="BSM Traders Co. supplies quality consumer products to retailers, resellers, and businesses who need dependable stock at a fair price."
      />

      <section className="about">
        <div className="wrap about-grid">
          <div className="about-figure">
            <Image src="/logo-full.jpg" alt="BSM Traders Co." width={900} height={612} style={{ width: "78%", margin: "0 auto", height: "auto" }} />
          </div>
          <div>
            <span className="kicker">Our Story</span>
            <h2 style={{ fontSize: 30, marginBottom: 18 }}>Straightforward sourcing, done right</h2>
            <div className="about-copy">
              <p>BSM Traders Co. was founded to solve a simple problem: retailers and small businesses needed a sourcing partner they could trust to get quality goods at a fair price, without the runaround. We work closely with our customers to understand what they need and get it to them without the usual friction of wholesale sourcing.</p>
              <p>From first inquiry to final delivery, our team handles the details — sourcing, pricing, and logistics — so you can focus on running your business. Whether you&apos;re placing a single bulk order or setting up an ongoing supply relationship, we treat every account with the same level of care.</p>
            </div>
            <div className="about-list">
              <div className="item"><span className="mark"></span><div><strong>Quality Products</strong><span>Every item is checked against our own quality standard before it ships.</span></div></div>
              <div className="item"><span className="mark"></span><div><strong>Trusted Service</strong><span>Straight answers and steady communication from quote to delivery.</span></div></div>
              <div className="item"><span className="mark"></span><div><strong>Competitive Prices</strong><span>Sourcing relationships that let us pass savings on to you.</span></div></div>
              <div className="item"><span className="mark"></span><div><strong>Customer Satisfaction</strong><span>We measure success by whether you order from us again.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="why" style={{ padding: 0 }}>
        <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="why-grid">
            <div className="why-cell"><span className="num">01</span><h3>Quality Products</h3><p>Vetted goods that meet the standard your customers expect.</p></div>
            <div className="why-cell"><span className="num">02</span><h3>Trusted Service</h3><p>A responsive team that treats every order like it matters.</p></div>
            <div className="why-cell"><span className="num">03</span><h3>Competitive Prices</h3><p>Pricing designed to protect your margin, not just ours.</p></div>
            <div className="why-cell"><span className="num">04</span><h3>Customer Satisfaction</h3><p>Long-term partnerships built one accurate order at a time.</p></div>
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

      <section className="stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat"><div className="big">100<span className="gold-suffix">%</span></div><div className="cap">Orders Quality-Checked</div></div>
            <div className="stat"><div className="big">24<span className="gold-suffix">/7</span></div><div className="cap">Customer Support</div></div>
            <div className="stat"><div className="big">2<span className="gold-suffix"></span></div><div className="cap">Product Categories</div></div>
            <div className="stat"><div className="big">FL<span className="gold-suffix">·US</span></div><div className="cap">Based &amp; Shipping Nationwide</div></div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="kicker">Ready to talk?</span>
          <h2 style={{ color: "#fff", fontSize: 28, marginBottom: 22 }}>Let&apos;s get your first order moving</h2>
          <Link className="btn gold" href="/contact">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
