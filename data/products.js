// Shared catalog data — edit this file to add/remove/update products.
// Each product's `id` must be unique (used as the Snipcart item id).

export const categories = {
  grocery: {
    label: "Grocery & Gourmet",
    gradient: "linear-gradient(135deg,#0C1B3A,#22335E)",
    icon: (
      <>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  },
  health: {
    label: "Health & Household",
    gradient: "linear-gradient(135deg,#123C3A,#1F5C57)",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    ),
  },
  beauty: {
    label: "Beauty & Personal Care",
    gradient: "linear-gradient(135deg,#8A5A16,#C6922E)",
    icon: <path d="M12 2s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11Z" />,
  },
  home: {
    label: "Home & Kitchen",
    gradient: "linear-gradient(135deg,#5C1F2E,#7C2E42)",
    icon: (
      <>
        <path d="M3 11 12 4l9 7" />
        <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
      </>
    ),
  },
  electronics: {
    label: "Electronics",
    gradient: "linear-gradient(135deg,#1B2438,#3A4566)",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  },
  patio: {
    label: "Patio & Garden",
    gradient: "linear-gradient(135deg,#26421F,#3E6B32)",
    icon: (
      <>
        <path d="M12 22c4-2 7-6 7-11a7 7 0 0 0-14 0c0 5 3 9 7 11Z" />
        <path d="M12 11v11" />
      </>
    ),
  },
  sports: {
    label: "Sports & Outdoors",
    gradient: "linear-gradient(135deg,#6B4A16,#A67926)",
    icon: (
      <>
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M9 12h6" />
      </>
    ),
  },
  general: {
    label: "General Merchandise",
    gradient: "linear-gradient(135deg,#22273A,#454C68)",
    icon: (
      <>
        <path d="M21 8 12 3 3 8l9 5 9-5Z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
  },
};

// `tags` are optional sub-category labels shown as secondary filters on the
// Shop page (e.g. brand, format, or use-case). Add/remove freely per product.
export const products = [
  { category: "grocery", id: "gp-001", name: "Premium Roast Coffee Beans, 2lb Bag", price: 24.99, desc: "Whole bean, medium roast, shelf-stable for retail display.", tags: ["Whole Bean", "Shelf-Stable"] },
  { category: "grocery", id: "gp-002", name: "Assorted Snack Variety Case (24ct)", price: 32.50, desc: "Mixed everyday snack case, ready for shelf or bundle resale.", tags: ["Bulk Case", "Best Seller"] },
  { category: "health", id: "hh-001", name: "Household Cleaning Bundle (6pc)", price: 28.00, desc: "Everyday cleaning essentials bundled for retail resale.", tags: ["Bundle"] },
  { category: "health", id: "hh-002", name: "Vitamin & Wellness Multipack", price: 19.75, desc: "Popular daily wellness items, sold as a retail-ready multipack.", tags: ["Multipack", "Best Seller"] },
  { category: "beauty", id: "bp-001", name: "Skincare Essentials Gift Set", price: 34.99, desc: "Daily-use skincare set packaged for gifting or retail display.", tags: ["Gift Set"] },
  { category: "beauty", id: "bp-002", name: "Haircare Duo — Shampoo & Conditioner", price: 16.50, desc: "Everyday haircare duo from a trusted personal-care line.", tags: ["Duo"] },
  { category: "home", id: "hk-001", name: "Stainless Steel Kitchen Utensil Set", price: 22.00, desc: "10-piece utensil set, retail packaged and ready to shelve.", tags: ["Stainless Steel", "Best Seller"] },
  { category: "home", id: "hk-002", name: "Cotton Kitchen Towel 4-Pack", price: 14.25, desc: "Absorbent cotton towels, bundled for retail or bulk resale.", tags: ["Cotton", "4-Pack"] },
  { category: "electronics", id: "el-001", name: "Wireless Charging Pad", price: 18.99, desc: "Universal fast-charging pad, retail boxed.", tags: ["Wireless"] },
  { category: "electronics", id: "el-002", name: "USB-C Cable 3-Pack", price: 12.50, desc: "Durable braided cables, bundled 3-pack for resale.", tags: ["USB-C", "3-Pack"] },
  { category: "patio", id: "pg-001", name: "Outdoor Solar Path Lights (4pc)", price: 26.00, desc: "Weatherproof solar lights, retail packaged for seasonal resale.", tags: ["Solar", "Seasonal"] },
  { category: "patio", id: "pg-002", name: "Garden Tool Starter Set", price: 21.75, desc: "Basic hand-tool set for home and garden retail.", tags: ["Starter Set"] },
  { category: "sports", id: "sp-001", name: "Adjustable Resistance Band Set", price: 15.99, desc: "Home-fitness bands with multiple resistance levels.", tags: ["Fitness"] },
  { category: "sports", id: "sp-002", name: "Insulated Sports Water Bottle", price: 13.25, desc: "32oz insulated bottle, popular for retail impulse-buy displays.", tags: ["Insulated", "Best Seller"] },
  { category: "general", id: "gm-001", name: "General Merchandise Mixed Lot", price: 39.00, desc: "Assorted general merchandise, ideal for discount and dollar retail.", tags: ["Mixed Lot"] },
  { category: "general", id: "gm-002", name: "Custom Sourcing Request", price: 0, desc: "Don't see what you need? Contact us for a custom sourcing quote.", tags: [] },
];

export const giftCardAmounts = [25, 50, 100, 250];
