import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnipcartProvider from "@/components/SnipcartProvider";

export const metadata = {
  title: "BSM Traders Co. — Quality Products. Better Value.",
  description:
    "BSM Traders Co. sources and distributes quality consumer goods at competitive prices, with a real online shop and trusted service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <SnipcartProvider />
      </body>
    </html>
  );
}
