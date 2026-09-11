"use client";

import { useEffect } from "react";
import Script from "next/script";

// ============================================================
// SNIPCART — powers the shopping cart + real checkout/payment.
// 1. Create a free account at https://snipcart.com
// 2. Copy your PUBLIC API key from the Snipcart dashboard
// 3. Replace YOUR_SNIPCART_PUBLIC_API_KEY below with it
// 4. In the Snipcart dashboard, connect Stripe or PayPal to accept real payments
// Cart works across every page automatically once this is set.
// ============================================================
const SNIPCART_PUBLIC_API_KEY = "YOUR_SNIPCART_PUBLIC_API_KEY";

export default function SnipcartProvider() {
  useEffect(() => {
    function updateCount() {
      try {
        if (window.Snipcart) {
          const state = window.Snipcart.store.getState();
          const countEl = document.getElementById("cart-count");
          const totalEl = document.getElementById("cart-total");
          if (countEl) countEl.textContent = state.cart.items.count || 0;
          if (totalEl) {
            const total = state.cart.total || 0;
            totalEl.textContent = total > 0 ? `$${total.toFixed(2)}` : "";
          }
        }
      } catch {
        /* Snipcart not ready yet */
      }
    }
    document.addEventListener("snipcart.ready", () => {
      updateCount();
      window.Snipcart.store.subscribe(updateCount);
    });
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://app.snipcart.com" />
      <link rel="preconnect" href="https://cdn.snipcart.com" />
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.css" />
      <div
        hidden
        id="snipcart"
        data-config-modal-style="side"
        data-api-key={SNIPCART_PUBLIC_API_KEY}
      />
      <Script src="https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js" strategy="afterInteractive" />
    </>
  );
}
