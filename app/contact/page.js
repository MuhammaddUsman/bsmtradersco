import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Contact Us — BSM Traders Co.",
  description: "Get in touch with BSM Traders Co. for wholesale quotes, order support, or general questions.",
};

const MAPS_QUERY = "7901+4th+St+N+Ste+10224+St+Petersburg+FL+33702";

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let's talk about your next order"
        subtitle="Reach out directly or send a few details below and we'll follow up with a quote — usually within one business day."
      />

      <section className="contact">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <div className="item">
              <div className="icon">
                <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div><strong>Call Us</strong><a href="tel:3213990783">321-399-0783</a></div>
            </div>
            <div className="item">
              <div className="icon">
                <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
              </div>
              <div><strong>Email Us</strong><a href="mailto:info@bsmtraders.com">info@bsmtraders.com</a></div>
            </div>
            <div className="item">
              <div className="icon">
                <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div><strong>Visit Us</strong><span>7901 4th St N, Ste 10224<br />St. Petersburg, FL 33702</span></div>
            </div>
            <div className="map-frame">
              <iframe
                src={`https://maps.google.com/maps?q=${MAPS_QUERY}&t=m&z=14&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BSM Traders Co. location"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Faq />
    </>
  );
}
