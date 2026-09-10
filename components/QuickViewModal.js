"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function QuickViewModal({ product, category, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;
  const isQuoteOnly = product.price === 0;

  return (
    <div className="qv-overlay" onClick={onClose}>
      <div className="qv-modal" onClick={(e) => e.stopPropagation()}>
        <button className="qv-close" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="qv-media" style={{ background: category.gradient }}>
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">{category.icon}</svg>
        </div>
        <div className="qv-body">
          <span className="cat-tag">{category.label}</span>
          <h3>{product.name}</h3>
          <p style={{ color: "var(--slate)", fontSize: 14.5 }}>{product.desc}</p>
          {product.tags && product.tags.length > 0 && (
            <div className="qv-tags">
              {product.tags.map((t) => (
                <span className="qv-tag" key={t}>{t}</span>
              ))}
            </div>
          )}
          <span className="price">{isQuoteOnly ? "Custom Quote" : `$${product.price.toFixed(2)}`}</span>
          {isQuoteOnly ? (
            <Link className="btn outline" href="/contact" onClick={onClose}>Get a Quote</Link>
          ) : (
            <button
              className="add-btn snipcart-add-item"
              style={{ width: "100%", padding: "13px 16px" }}
              data-item-id={product.id}
              data-item-name={product.name}
              data-item-price={product.price}
              data-item-url="/shop"
              data-item-description={product.desc}
              data-item-category={category.label}
              onClick={onClose}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
