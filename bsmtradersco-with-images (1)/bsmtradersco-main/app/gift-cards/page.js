import PageHero from "@/components/PageHero";
import { giftCardAmounts } from "@/data/products";

export const metadata = {
  title: "Gift Cards — BSM Traders Co.",
  description: "Buy a BSM Traders Co. gift card — delivered by email, redeemable on any order.",
};

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        crumb="Gift Cards"
        title="BSM Traders Co. gift cards"
        subtitle="A simple gift for a business owner or retail partner — redeemable toward any order, no expiration."
      />

      <section className="categories">
        <div className="wrap">
          <div className="giftcard-grid">
            {giftCardAmounts.map((amount) => (
              <div className="giftcard-tile" key={amount}>
                <span className="amt">${amount}</span>
                <span style={{ fontSize: 13.5, color: "#c6cede" }}>Gift Card</span>
                <button
                  className="add-btn snipcart-add-item"
                  style={{ width: "100%" }}
                  data-item-id={`giftcard-${amount}`}
                  data-item-name={`BSM Traders Co. Gift Card — $${amount}`}
                  data-item-price={amount}
                  data-item-url="/gift-cards"
                  data-item-description={`Digital gift card redeemable for $${amount} toward any BSM Traders Co. order.`}
                  data-item-category="Gift Card"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32, color: "var(--slate)", fontSize: 14, maxWidth: "60ch" }}>
            Gift cards are delivered by email after checkout and can be applied toward any order.
            Need a custom amount? <a href="/contact" style={{ color: "var(--navy)", fontWeight: 600 }}>Contact us</a> directly.
          </p>
        </div>
      </section>
    </>
  );
}
