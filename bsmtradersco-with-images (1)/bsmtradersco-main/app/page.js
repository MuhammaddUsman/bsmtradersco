import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="hero" style={{ padding: 0 }}>
        <div className="wrap">
          <div className="hero-inner">
            <div>
              <div className="eyebrow-row">
                <span className="rule"></span> Wholesale sourcing &amp; distribution
              </div>
              <h1>Quality products. Better value. Delivered reliably.</h1>
              <p className="lede">
                BSM Traders Co. sources, stocks, and supplies everyday consumer goods for
                retailers and businesses — backed by trusted service and prices built to keep
                you competitive.
              </p>
              <div className="cta-row">
                <Link className="btn gold" href="/shop">Shop Products</Link>
                <Link className="btn outline-light" href="/contact">Request a Quote</Link>
              </div>
            </div>
            <div className="hero-panel">
              <div className="row"><span className="label">Headquartered in</span><span className="value">St. Petersburg, FL</span></div>
              <div className="row"><span className="label">Focus areas</span><span className="value">Retail &amp; Wholesale Goods</span></div>
              <div className="row"><span className="label">Commitment</span><span className="value">Quality, Every Order</span></div>
              <div className="row"><span className="label">Direct line</span><span className="value">321-399-0783</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="wrap about-grid">
          <div className="about-figure">
            <Image src="/logo-full.jpg" alt="BSM Traders Co." width={900} height={612} style={{ width: "78%", margin: "0 auto", height: "auto" }} />
          </div>
          <div>
            <span className="kicker">Who We Are</span>
            <h2 style={{ fontSize: 30, marginBottom: 18 }}>A trading partner built on quality and value</h2>
            <div className="about-copy">
              <p>BSM Traders Co. supplies quality consumer products to retailers, resellers, and businesses who need dependable stock at a fair price. We work closely with our customers to understand what they need and get it to them without the usual friction of wholesale sourcing.</p>
              <p>From first inquiry to final delivery, our team handles the details — sourcing, pricing, and logistics — so you can focus on running your business.</p>
            </div>
            <Link className="btn outline" href="/about" style={{ marginTop: 24, display: "inline-block" }}>More About Us</Link>
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

      <section className="categories">
        <div className="wrap">
          <div className="section-head">
            <div><span className="kicker">Product Categories</span><h2>Everyday goods, sourced right</h2></div>
            <p className="support">Browse our shop by category — order online with secure checkout, or request a bulk quote.</p>
          </div>
          <div className="cat-grid">
            <Link className="cat-cell" href="/shop"><span className="name">Electronics</span><span className="sub">Ubiquiti networking &amp; accessories</span></Link>
            <Link className="cat-cell" href="/shop"><span className="name">General Merchandise</span><span className="sub">Automotive &amp; custom sourcing</span></Link>
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
        <div className="wrap">
          <div className="section-head">
            <div><span className="kicker">What Partners Say</span><h2>Trusted by the businesses we supply</h2></div>
            <p className="support">A few words from retailers and resellers who order from BSM Traders Co.</p>
          </div>
          <div className="t-track">
            <div className="t-card"><p className="quote">Ordering is simple and the pricing is fair. Our shipments have always arrived accurately and on schedule.</p><div className="who"><strong>Retail Partner</strong><span>Florida</span></div></div>
            <div className="t-card"><p className="quote">What stands out is the communication — we always know where our order stands, no chasing required.</p><div className="who"><strong>Wholesale Buyer</strong><span>Georgia</span></div></div>
            <div className="t-card"><p className="quote">Good quality at prices that let us keep our margins healthy. It&apos;s an easy business to work with.</p><div className="who"><strong>Independent Retailer</strong><span>Texas</span></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
