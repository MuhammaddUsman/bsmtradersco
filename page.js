"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { categories, products } from "@/data/products";
import { useWishlist } from "@/lib/wishlist";

export default function WishlistPage() {
  const { ids, toggle } = useWishlist();
  const saved = products.filter((p) => ids.includes(p.id));

  return (
    <>
      <PageHero
        crumb="Wishlist"
        title="Your saved products"
        subtitle="Items you've saved for later. Saved on this device only — add them to your cart whenever you're ready."
      />

      <section className="categories">
        <div className="wrap">
          {saved.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <p style={{ color: "var(--slate)", marginBottom: 20 }}>
                You haven&apos;t saved any products yet.
              </p>
              <Link className="btn gold" href="/shop">Browse the Shop</Link>
            </div>
          ) : (
            <div className="product-grid">
              {saved.map((product) => {
                const cat = categories[product.category];
                const isQuoteOnly = product.price === 0;
                return (
                  <div className="product-card" key={product.id}>
                    <div className="product-media" style={{ background: cat.gradient }}>
                      <span className="cat-tag">{cat.label}</span>
                      <button
                        className="wishlist-btn saved"
                        aria-label="Remove from wishlist"
                        onClick={() => toggle(product.id)}
                      >
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                        </svg>
                      </button>
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">{cat.icon}</svg>
                      )}
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
          )}
        </div>
      </section>
    </>
  );
}
