"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const q = query.trim().toLowerCase();
  const results = q
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q) ||
            (p.tags || []).some((t) => t.toLowerCase().includes(q))
        )
        .slice(0, 6)
    : [];

  return (
    <div className="search-wrap" ref={wrapRef}>
      <button className="search-toggle" aria-label="Search products" onClick={() => setOpen((v) => !v)}>
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {open && (
        <div className="search-panel">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {q && (
            <div className="search-results">
              {results.length ? (
                results.map((p) => (
                  <Link
                    key={p.id}
                    href="/shop"
                    className="search-result-item"
                    onClick={() => setOpen(false)}
                  >
                    <span className="srn">{p.name}</span>
                    <span className="srp">{p.price === 0 ? "Quote" : `$${p.price.toFixed(2)}`}</span>
                  </Link>
                ))
              ) : (
                <div className="search-empty">No products match &quot;{query}&quot;.</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
