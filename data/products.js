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
export const products = [
  { category: "electronics", id: "el-003", name: "Ubiquiti UniFi nanoHD Access Point (UAP-NANOHD-US)", price: 70.99, desc: "Compact 802.11ac Wave2 MU-MIMO enterprise access point for indoor deployments.", tags: ["Ubiquiti", "UniFi", "Networking"] },
  { category: "electronics", id: "el-004", name: "Ubiquiti UniFi LR Long-Range Access Point", price: 219.99, desc: "Long-range UniFi access point built for extended indoor coverage.", tags: ["Ubiquiti", "UniFi", "Networking"] },
  { category: "electronics", id: "el-005", name: "Ubiquiti UISP-Fiber 2.5G UniFi Switch Flex 2.5GB", price: 63.99, desc: "Compact managed switch with 2.5GbE ports for high-speed network segments.", tags: ["Ubiquiti", "Switch", "Networking"] },
  { category: "electronics", id: "el-006", name: "Ubiquiti UF-PRO-XG Fiber Module", price: 289.99, desc: "UFiber Pro 10G SFP+ transceiver module for high-speed fiber uplinks.", tags: ["Ubiquiti", "Fiber", "Networking"] },
  { category: "electronics", id: "el-007", name: "Ubiquiti UCG-MAX-US Cloud Gateway", price: 248.99, desc: "All-in-one UniFi Cloud Gateway — router, controller, and NVR in one device.", tags: ["Ubiquiti", "Gateway", "Networking"] },
  { category: "electronics", id: "el-008", name: "Ubiquiti ETH-SP-G2 Surge Protector (10-Pack)", price: 153.99, desc: "Gigabit Ethernet surge protectors, multipack of 10, for network and PoE line protection.", tags: ["Ubiquiti", "Surge Protection", "Networking"] },
  { category: "electronics", id: "el-009", name: "Ubiquiti POE-24-24W-G-VVA PoE Injector", price: 22.99, desc: "24V 24W passive Gigabit PoE injector for powering UniFi devices.", tags: ["Ubiquiti", "PoE", "Networking"] },
  { category: "electronics", id: "el-010", name: "Ubiquiti UF-PRO-XG-B Fiber Module", price: 399.99, desc: "UFiber Pro 10G BiDi SFP+ module for single-strand fiber uplinks.", tags: ["Ubiquiti", "Fiber", "Networking"] },
  { category: "general", id: "gm-003", name: "American Autowire GM Steering Column Kit", price: 26.99, desc: "Steering column wiring kit for 1969 and newer GM vehicles.", tags: ["Automotive", "American Autowire"] },
];

export const giftCardAmounts = [25, 50, 100, 250];
