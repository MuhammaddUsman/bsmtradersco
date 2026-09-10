"use client";

import { useState } from "react";

// Reuses the same free Web3Forms key as the contact form.
// Set it in components/ContactForm.js and paste the same key here.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("Newsletter isn't connected yet — add your Web3Forms key in components/Newsletter.js.");
      return;
    }
    setStatus("Submitting…");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New newsletter signup — BSM Traders Co. website",
          email,
          message: `Newsletter signup request from ${email}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Thanks — you're on the list.");
        setEmail("");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="newsletter">
      <div className="wrap newsletter-row">
        <div>
          <h3>Get sourcing tips in your inbox</h3>
          <p>Occasional emails on new categories, pricing updates, and buying advice. No spam.</p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn gold" type="submit">Subscribe</button>
        </form>
      </div>
      {status && (
        <div className="wrap">
          <div className="newsletter-msg">{status}</div>
        </div>
      )}
    </div>
  );
}
