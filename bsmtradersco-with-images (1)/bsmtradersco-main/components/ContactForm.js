"use client";

import { useState } from "react";

// ============================================================
// This form sends real email via Web3Forms (free, no login needed):
// 1. Go to https://web3forms.com
// 2. Enter your email (info@bsmtraders.com) to get an Access Key instantly
// 3. Paste that key into WEB3FORMS_ACCESS_KEY below
// That's it — submissions will arrive in your inbox.
// ============================================================
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function ContactForm() {
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "err" | "unconfigured"

  async function handleSubmit(e) {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    const form = e.target;
    const formData = new FormData(form);
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="form-panel">
      <h3>Request a quote</h3>
      <p className="sub">Fill this out and our team will get back to you within one business day.</p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="subject" value="New quote request — BSM Traders Co. website" />
        <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

        <div className="form-row">
          <div>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" />
          </div>
        </div>
        <div className="form-row">
          <div className="full">
            <label htmlFor="message">What are you looking for?</label>
            <textarea id="message" name="message" required />
          </div>
        </div>
        <button className="btn" type="submit" style={{ width: "100%", marginTop: 6 }} disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Request"}
        </button>

        {status === "ok" && (
          <div className="form-msg show ok">Thanks — your message has been sent. We&apos;ll get back to you within one business day.</div>
        )}
        {status === "err" && (
          <div className="form-msg show err">Something went wrong sending your message. Please try again or email us directly.</div>
        )}
        {status === "unconfigured" && (
          <div className="form-msg show err">
            Form isn&apos;t fully connected yet — add your free Web3Forms access key in <code>components/ContactForm.js</code> to start receiving emails.
          </div>
        )}
      </form>
    </div>
  );
}
