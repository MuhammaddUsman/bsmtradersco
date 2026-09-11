"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What does BSM Traders Co. do?",
    a: "We source and distribute quality consumer goods — from grocery and household essentials to general merchandise — for retailers, resellers, and businesses across the country.",
  },
  {
    q: "Where are you located?",
    a: "Our office is at 7901 4th St N, Ste 10224, St. Petersburg, FL 33702, and we ship to customers nationwide.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. We work with independent retailers and small resellers as well as larger wholesale accounts — get in touch and we'll tailor a quote to your volume.",
  },
  {
    q: "Can I order online and pay directly?",
    a: "Yes — items in our shop can be added to cart and checked out online with card or PayPal. For bulk or custom orders, use the quote form on our Contact page instead.",
  },
  {
    q: "What are your categories?",
    a: "Grocery & gourmet food, health & household, beauty & personal care, home & kitchen, electronics, patio & garden, sports & outdoors, and general merchandise on request.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 32 }}>
          <div>
            <span className="kicker">Questions</span>
            <h2>Frequently asked questions</h2>
          </div>
          <p className="support">Answers to what new partners usually ask us before their first order.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className={`faq-item${openIndex === i ? " open" : ""}`} key={item.q}>
              <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {item.q}
                <span className="plus"></span>
              </button>
              <div
                className="faq-a"
                style={{ maxHeight: openIndex === i ? "220px" : "0px" }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
