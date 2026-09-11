// Shared catalog data — edit this file to add/remove/update products.
// Each product's `id` must be unique (used as the Snipcart item id).

export const categories = {
  electronics: {
    label: "Electronics",
    gradient: "linear-gradient(135deg,#1B2438,#3A4566)",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
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
//
// `image` is optional — point it at a file in /public/products/ (e.g.
// "/products/nanohd.jpg") to show a real photo instead of the placeholder
// icon tile. Leave it out (or delete the line) to keep the placeholder.
export const products = [
  { category: "electronics", id: "el-003", name: "Ubiquiti UniFi nanoHD Access Point (UAP-NANOHD-US)", price: 70.99, desc: "Compact 802.11ac Wave2 MU-MIMO enterprise access point for indoor deployments.", tags: ["Ubiquiti", "UniFi", "Access Point"], image: "/products/unifi-nanohd.png" },
  { category: "electronics", id: "el-004", name: "Ubiquiti UniFi U7 Long-Range Access Point", price: 219.99, desc: "WiFi 7 long-range UniFi access point built for extended indoor coverage.", tags: ["Ubiquiti", "UniFi", "Access Point", "WiFi 7"], image: "/products/unifi-u7-lr.png" },
  { category: "electronics", id: "el-005", name: "Ubiquiti USW-Flex-2.5G-5 UniFi Switch Flex 2.5GB", price: 63.99, desc: "Compact managed switch with 2.5GbE ports for high-speed network segments.", tags: ["Ubiquiti", "Switch", "Networking"], image: "/products/unifi-switch-flex-2-5g.png" },
  { category: "electronics", id: "el-006", name: "Ubiquiti U7-PRO-XG Access Point", price: 289.99, desc: "High-performance WiFi 7 access point with multi-gig uplink for demanding, high-density environments.", tags: ["Ubiquiti", "UniFi", "Access Point", "WiFi 7"], image: "/products/u7-pro-xg.png" },
  { category: "electronics", id: "el-007", name: "Ubiquiti UCG-MAX-NS Cloud Gateway", price: 248.99, desc: "All-in-one UniFi Cloud Gateway — router, controller, and NVR in one device.", tags: ["Ubiquiti", "Gateway", "Networking"], image: "/products/ucg-max-ns.png" },
  { category: "electronics", id: "el-008", name: "Ubiquiti ETH-SP-G2 Surge Protector (10-Pack)", price: 153.99, desc: "Gigabit Ethernet surge protectors, multipack of 10, for network and PoE line protection.", tags: ["Ubiquiti", "Surge Protection", "Networking"], image: "/products/eth-sp-g2.png" },
  { category: "electronics", id: "el-009", name: "Ubiquiti POE-24-24W-G-WH PoE Injector", price: 22.99, desc: "24V 24W passive Gigabit PoE injector for powering UniFi devices.", tags: ["Ubiquiti", "PoE", "Networking"], image: "/products/poe-24-24w-g-wh.png" },
  { category: "electronics", id: "el-010", name: "Ubiquiti U7-PRO-XGS-B Access Point", price: 399.99, desc: "WiFi 7 access point in matte black, built for high-density deployments with multi-gig connectivity.", tags: ["Ubiquiti", "UniFi", "Access Point", "WiFi 7"], image: "/products/u7-pro-xgs-b.png" },
  { category: "general", id: "gm-003", name: "American Autowire 500428 GM Steering Column Kit", price: 26.99, desc: "Steering column wiring kit for 1969 and newer GM vehicles.", tags: ["Automotive", "American Autowire"], image: "/products/gm-steering-column-kit.png" },
];

export const giftCardAmounts = [25, 50, 100, 250];
