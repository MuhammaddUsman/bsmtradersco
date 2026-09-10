"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, products } from "@/data/products";
import { useWishlist } from "@/lib/wishlist";
import QuickViewModal from "./QuickViewModal";

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTag, setActiveTag] = useState(null);
  const [quickViewId, setQuickViewId] = useState(null);
  const { isSaved, toggle } = useWishlist();

  const categoryFiltered =
    activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter);

  const availableTags = useMemo(() => {
    const set = new Set();
    categoryFiltered.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
    return Array.from(set);
  }, [categoryFiltered]);

  const filtered = activeTag
    ? categoryFiltered.filter((p) => (p.tags || []).includes(activeTag))
    : categoryFiltered;

  const quickViewProduct = products.find((p) => p.id === quickViewId);

  return (
    <section className="categories">
      <div className="wrap">
        <div className="shop-toolbar">
          <button
            className={`filter-btn${activeFilter === "all" ? " active" : ""}`}
            onClick={() => { setActiveFilter("all"); setActiveTag(null); }}
          >
            All Products
          </button>
          {Object.entries(categories).map(([slug, cat]) => (
            <button
              key={slug}
              className={`filter-btn${activeFilter === slug ? " active" : ""}`}
              onClick={() => { setActiveFilter(slug); setActiveTag(null); }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {availableTags.length > 0 && (
          <div className="tag-toolbar">
            {availableTags.map((tag) => (
              <button
                key={tag}
                className={`tag-chip${activeTag === tag ? " active" : ""}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="product-grid">
          {filtered.map((product) => {
            const cat = categories[product.category];
            const isQuoteOnly = product.price === 0;
            const saved = isSaved(product.id);
            return (
              <div className="product-card" key={product.id}>
                <div className="product-media" style={{ background: cat.gradient }}>
                  <span className="cat-tag">{cat.label}</span>
                  <button
                    className={`wishlist-btn${saved ? " saved" : ""}`}
                    aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
                    onClick={() => toggle(product.id)}
                  >
                    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                    </svg>
                  </button>
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">{cat.icon}</svg>
                  <button className="qv-trigger" onClick={() => setQuickViewId(product.id)}>
                    Quick View
                  </button>
                </div>
                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="price-row">
                    <span className="price">
                      {isQuoteOnly ? "Custom Quote" : `$${product.price.toFixed(2)}`}
                    </span>
                    {isQuoteOnly ? (
                      <Link className="btn outline" href="/contact" style={{ textAlign: "center" }}>
                        Get a Quote
                      </Link>
                    ) : (
                      <button
                        className="add-btn snipcart-add-item"
                        data-item-id={product.id}
                        data-item-name={product.name}
                        data-item-price={product.price}
                        data-item-url="/shop"
                        data-item-description={product.desc}
                        data-item-category={cat.label}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          category={categories[quickViewProduct.category]}
          onClose={() => setQuickViewId(null)}
        />
      )}
    </section>
  );
}
